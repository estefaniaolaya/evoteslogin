import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { loginSchema } from "../schemas/auth";
import votoo from "../img/votaciones.png"; // Import the image

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/candidates");
    }
  }, [isAuthenticated]);

  return (
    <section 
      className="relative min-h-[1000px] bg-cover bg-center p-14" 
      style={{ backgroundImage: `url(${votoo})` }} // Establecer la imagen de fondo
    >
      {/* Opcional: Puedes agregar un overlay para oscurecer el fondo */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 h-[calc(100vh-100px)] flex items-center justify-center">
        <Card>
          {loginErrors.map((error, i) => (
            <Message message={error} key={i} />
          ))}
          <h1 className="text-4xl md:text-5xl lg:text-6xl py-2 font-bold text-gray-800 text-center">Login</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="email">Email:</Label>
              <Input
                label="Write your email"
                type="email"
                name="email"
                placeholder="youremail@domain.tld"
                {...register("email", { required: true })}
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>

            <div>
              <Label htmlFor="password">Password:</Label>
              <Input
                type="password"
                name="password"
                placeholder="Write your password"
                {...register("password", { required: true, minLength: 6 })}
              />
              <p className="text-red-500">{errors.password?.message}</p>
            </div>

            <Button>Login</Button>
          </form>

          <p className="flex justify-center text-gray-700">
            Don't have an account? <Link to="/register" className="text-blue-600">Sign up</Link>
          </p>
        </Card>
      </div>
    </section>
  );
}
