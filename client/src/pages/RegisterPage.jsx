import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";

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

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card>
        {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-6">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="username">Username:</Label>
            <Input
              type="text"
              name="username"
              placeholder="Write your name"
              {...register("username")}
              autoFocus
            />
            {errors.username?.message && (
              <p className="text-red-500">{errors.username?.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email:</Label>
            <Input
              name="email"
              placeholder="youremail@domain.tld"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              name="password"
              placeholder="********"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password:</Label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="********"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message && (
              <p className="text-red-500">{errors.confirmPassword?.message}</p>
            )}
          </div>

          <div className="relative">
            <Label htmlFor="institution">Institution:</Label>
            <select
              className="block appearance-none w-full bg-zinc-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              {...register("institution")}
            >
              <option value="">Select your institution</option>
              <option value="Tecnico">Tecnico</option>
              <option value="Inen">Inen</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 border">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <Button>Sign up</Button>
        </form>
        <p className="text-center">
          Already Have an Account?{" "}
          <Link className="text-red-500" to="/login">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default Register;