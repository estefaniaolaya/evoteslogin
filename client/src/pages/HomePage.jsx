import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="bg-red-500 flex justify-center items-center">
      <header className="bg-zinc-800 p-10">
        <h1 className="text-5xl py-2 font-bold text-center">Easy Votes Security</h1>
        <p className="text-md text-slate-400">
        Welcome to Easy Votes Security, your comprehensive solution for student election management. Our main objective is to provide you with an innovative platform designed to facilitate secure and efficient voting in educational institutions. With our system, we ensure rigorous control of all activities of the student government, thus providing a transparent and reliable voting experience. Join us as we transform the way elections are conducted in your school, ensuring a solid and accessible democratic process for all students
        </p>

        <Link
          className="inline-block text-sm px-4 py-2  leading-none border rounded-xl bg-center text-white border-white bg-indigo-500 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 disabled:bg-indigo-300 bor"
          to="/register"
        >
          Get Started
        </Link>
      </header>

    
    
   
    </section>
  );
}

export default HomePage;