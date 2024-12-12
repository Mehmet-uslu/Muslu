import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

const FormField = ({ label, id, type = "text", validation, errors, register }) => (
  <div>
    <label htmlFor={id} className="block font-medium">{label}</label>
    <input
      type={type}
      id={id}
      {...register(id, validation)}
      className="w-full p-2 border border-gray-300 rounded-md"
    />
    {errors[id] && <p className="text-red-500 text-sm">{errors[id].message}</p>}
  </div>
);

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [storeFieldsVisible, setStoreFieldsVisible] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // Role verilerini çek
    axios.get('https://workintech-fe-ecommerce.onrender.com/roles')
      .then(response => setRoles(response.data))
      .catch(error => console.error("Rol verileri çekilirken hata oluştu:", error));
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await axios.post('https://workintech-fe-ecommerce.onrender.com/signup', data);
      alert("Hesabınızı aktive etmek için e-postadaki bağlantıya tıklayın!");
      history.push("/");
    } catch (error) {
      console.error("Kayıt sırasında hata oluştu:", error);
      alert("Bir hata oluştu, lütfen tekrar deneyin.");
    }
    setIsLoading(false);
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setStoreFieldsVisible(selectedRole === 'store');
    // Eğer mağaza rolü seçildiyse, mağaza alanlarının görünmesini sağlayalım
    if (selectedRole === 'store') {
      setValue("store.name", "");
      setValue("store.phone", "");
      setValue("store.tax_no", "");
      setValue("store.bank_account", "");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Kayıt Ol</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          label="Ad"
          id="name"
          validation={{
            required: 'Ad alanı zorunludur',
            minLength: { value: 3, message: 'Ad en az 3 karakter olmalıdır' },
          }}
          register={register}
          errors={errors}
        />

        <FormField
          label="E-posta"
          id="email"
          type="email"
          validation={{
            required: 'E-posta alanı zorunludur',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Geçerli bir e-posta adresi girin',
            },
          }}
          register={register}
          errors={errors}
        />

        <FormField
          label="Şifre"
          id="password"
          type="password"
          validation={{
            required: 'Şifre zorunludur',
            minLength: { value: 8, message: 'Şifre en az 8 karakter olmalıdır' },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: 'Şifre büyük, küçük harf, rakam ve özel karakter içermelidir',
            },
          }}
          register={register}
          errors={errors}
        />

        <FormField
          label="Şifreyi Onayla"
          id="password_confirmation"
          type="password"
          validation={{
            required: 'Şifreyi onaylamak zorunludur',
            validate: value => value === watch('password') || 'Şifreler eşleşmiyor',
          }}
          register={register}
          errors={errors}
        />

        <div>
          <label htmlFor="role_id" className="block font-medium">Rol</label>
          <select
            id="role_id"
            {...register('role_id', { required: 'Rol seçilmelidir' })}
            onChange={handleRoleChange}
            defaultValue=""
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>Rol seçiniz</option>
            {roles.map(role => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))}
          </select>
          {errors.role_id && <p className="text-red-500 text-sm">{errors.role_id.message}</p>}
        </div>

        {storeFieldsVisible && (
          <>
            <FormField
              label="Mağaza Adı"
              id="store.name"
              validation={{
                required: 'Mağaza adı zorunludur',
                minLength: { value: 3, message: 'Mağaza adı en az 3 karakter olmalıdır' },
              }}
              register={register}
              errors={errors}
            />

            <FormField
              label="Mağaza Telefonu (Türkiye)"
              id="store.phone"
              validation={{
                pattern: {
                  value: /^(\+90|0)(5[0-9]{1})[0-9]{8}$/,
                  message: 'Geçerli bir Türkiye telefon numarası girin',
                },
              }}
              register={register}
              errors={errors}
            />

            <FormField
              label="Mağaza Vergi Numarası"
              id="store.tax_no"
              validation={{
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: 'Geçersiz vergi numarası',
                },
              }}
              register={register}
              errors={errors}
            />

            <FormField
              label="Mağaza IBAN"
              id="store.bank_account"
              validation={{
                pattern: {
                  value: /^[A-Z]{2}\d{2}[A-Z0-9]{4,30}$/,
                  message: 'Geçersiz IBAN',
                },
              }}
              register={register}
              errors={errors}
            />
          </>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-2 text-white rounded-md ${isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isLoading ? 'Kayıt Olunuyor...' : 'Kayıt Ol'}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
