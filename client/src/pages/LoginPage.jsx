import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { loginSchema } from "../schemas/auth";

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
    <section className="bg-gradient-to-r from-green-900 to-blue-800 p-10">
      <header className="bg-white p-27" >
    <section className="h-[calc(100vh-100px)] flex items-center justify-center bg-white-900">
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
          Don't have an account? <Link to="/register" className="text-blue-900">Sign up</Link>
        </p>
      </Card>
    </section>
    </header>
    </section>
  );
}