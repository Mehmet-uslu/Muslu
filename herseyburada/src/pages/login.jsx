import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://workintech-fe-ecommerce.onrender.com/login", {
        email: data.email,
        password: data.password,
      });

      const userData = response.data;

      // Remember Me özelliği
      if (data.remember) {
        localStorage.setItem("token", userData.token);
      } else {
        sessionStorage.setItem("token", userData.token);
      }

      // Kullanıcı bilgilerini sakla
      localStorage.setItem("user", JSON.stringify(userData));

      // Önceki sayfaya yönlendir veya ana sayfaya git
      history.push("/navbar")
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Kullanıcı adınız veya Şifreniz hatalı");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" {...register("remember")} />
            Remember Me
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;