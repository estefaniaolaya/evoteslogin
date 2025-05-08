import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Message, Button, Input, Label } from '../components/ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../schemas/auth';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import votoo from "../img/votaciones.png"; // Import the image

function Register() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
  };

  if (isAuthenticated) {
    navigate('/candidates'); // Redirigir automáticamente si ya está autenticado
    return null; // Renderizar nada mientras se redirige
  }

  return (
    <section 
      className="relative min-h-[1000px] bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${votoo})` }} // Ajuste de la imagen de fondo
    >
      {/* Capa oscura opcional */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Contenido del formulario */}
      <div className="relative z-10 max-w-md w-full p-6 bg-white bg-opacity-70 rounded-lg shadow-md">
        {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-6">Register</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="username" className="block text-sm my-1 text-gray-800">Username:</Label>
            <Input type="text" name="username" placeholder="Write your name" {...register('username')} autoFocus />
            {errors.username?.message && <p className="text-red-500">{errors.username?.message}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email:</Label>
            <Input name="email" placeholder="youremail@domain.tld" {...register('email')} />
            {errors.email?.message && <p className="text-red-500">{errors.email?.message}</p>}
          </div>

          <div>
            <Label htmlFor="password">Password:</Label>
            <Input type="password" name="password" placeholder="********" {...register('password')} />
            {errors.password?.message && <p className="text-red-500">{errors.password?.message}</p>}
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password:</Label>
            <Input type="password" name="confirmPassword" placeholder="********" {...register('confirmPassword')} />
            {errors.confirmPassword?.message && <p className="text-red-500">{errors.confirmPassword?.message}</p>}
          </div>

          <div className="relative">
            <Label htmlFor="institution">Institution:</Label>
            <select
              className="block appearance-none w-full bg-white-700 text-gray-900 border border-white-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              {...register('institution')}
            >
              <option value="">Select your institution</option>
              <option value="Tecnico">Tecnico</option>
              <option value="Inem">Inem</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-400 border">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <Button>Sign up</Button>
        </form>
        <p className="text-center text-gray-900">
          Already Have an Account?{' '}
          <Link className="text-blue-900" to="/login">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
