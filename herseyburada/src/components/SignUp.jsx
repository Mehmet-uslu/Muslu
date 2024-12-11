import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [storeFieldsVisible, setStoreFieldsVisible] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // API'den rollerin çekilmesi
    axios.get('https://workintech-fe-ecommerce.onrender.com/roles')
      .then(response => setRoles(response.data))
      .catch(error => console.error("Rol verileri çekilirken hata oluştu:", error));
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://workintech-fe-ecommerce.onrender.com/signup', data);
      alert("Hesabınızı aktive etmek için e-postadaki bağlantıya tıklayın!");
      history.push("/");  // Başarılı kayıt sonrası önceki sayfaya yönlendirme
    } catch (error) {
      console.error("Kayıt sırasında hata oluştu:", error);
      alert("Bir hata oluştu, lütfen tekrar deneyin.");
    }
    setIsLoading(false);
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setStoreFieldsVisible(selectedRole === 'store');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Kayıt Ol</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">Ad</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Ad alanı zorunludur', minLength: { value: 3, message: 'Ad en az 3 karakter olmalıdır' } })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">E-posta</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'E-posta alanı zorunludur', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Geçerli bir e-posta adresi girin' } })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block font-medium">Şifre</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'Şifre zorunludur',
              minLength: { value: 8, message: 'Şifre en az 8 karakter olmalıdır' },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: 'Şifre büyük, küçük harf, rakam ve özel karakter içermelidir',
              },
            })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div>
          <label htmlFor="password_confirmation" className="block font-medium">Şifreyi Onayla</label>
          <input
            type="password"
            id="password_confirmation"
            {...register('password_confirmation', {
              required: 'Şifreyi onaylamak zorunludur',
              validate: value => value === getValues('password') || 'Şifreler eşleşmiyor',
            })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.password_confirmation && <p className="text-red-500 text-sm">{errors.password_confirmation.message}</p>}
        </div>

        <div>
          <label htmlFor="role_id" className="block font-medium">Rol</label>
          <select
            id="role_id"
            {...register('role_id', { required: 'Rol seçilmelidir' })}
            onChange={handleRoleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {roles.map(role => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))}
          </select>
          {errors.role_id && <p className="text-red-500 text-sm">{errors.role_id.message}</p>}
        </div>

        {storeFieldsVisible && (
          <div className="space-y-4">
            <div>
              <label htmlFor="store_name" className="block font-medium">Mağaza Adı</label>
              <input
                type="text"
                id="store_name"
                {...register('store.name', { required: 'Mağaza adı zorunludur', minLength: { value: 3, message: 'Mağaza adı en az 3 karakter olmalıdır' } })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.store?.name && <p className="text-red-500 text-sm">{errors.store?.name.message}</p>}
            </div>

            <div>
              <label htmlFor="store_phone" className="block font-medium">Mağaza Telefonu (Türkiye)</label>
              <input
                type="text"
                id="store_phone"
                {...register('store.phone', { pattern: { value: /^(\+90|0)(5[0-9]{1})[0-9]{8}$/, message: 'Geçerli bir Türkiye telefon numarası girin' } })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.store?.phone && <p className="text-red-500 text-sm">{errors.store?.phone.message}</p>}
            </div>

            <div>
              <label htmlFor="store_tax_no" className="block font-medium">Mağaza Vergi Numarası</label>
              <input
                type="text"
                id="store_tax_no"
                {...register('store.tax_no', { pattern: { value: /^T\d{4}[V]\d{6}$/, message: 'Geçersiz vergi numarası' } })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.store?.tax_no && <p className="text-red-500 text-sm">{errors.store?.tax_no.message}</p>}
            </div>

            <div>
              <label htmlFor="store_bank_account" className="block font-medium">Mağaza IBAN</label>
              <input
                type="text"
                id="store_bank_account"
                {...register('store.bank_account', { pattern: { value: /^[A-Z]{2}\d{2}[A-Z0-9]{4,30}$/, message: 'Geçersiz IBAN' } })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.store?.bank_account && <p className="text-red-500 text-sm">{errors.store?.bank_account.message}</p>}
            </div>
          </div>
        )}

        <div className="flex justify-center mt-6">
          <button type="submit" disabled={isLoading} className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md ${isLoading ? 'opacity-50' : ''}`}>
            {isLoading ? 'Gönderiliyor...' : 'Kayıt Ol'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
