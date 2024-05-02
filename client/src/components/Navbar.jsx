import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";
import logoImage from "../img/ico.ico";

// Define una lista de colores para cada botón
const buttonColors = [
  "bg-purple-200",
  "bg-green-200",
  "bg-yellow-600",
  "bg-red-600",
  "bg-purple-600",
];

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 my-3 flex justify-between py-5 px-10 rounded-lg shadow-md"> 
      <Link to={isAuthenticated ? "/tasks" : "/"}>
        <img src={logoImage} alt="Logo" className="h-12 w-auto" />
      </Link>

      <ul className="flex gap-x-4 items-center">
        {isAuthenticated ? (
          <>
            <li className="text-gray-800">
              Welcome {user.username}
            </li>
            <li>
              <ButtonLink to="/votes" index={0} className={`inline-block px-6 py-3 text-sm leading-none border rounded-lg text-white hover:text-white hover:bg-indigo-700 transition duration-300 ${buttonColors[0]}`}>Add Vote</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/add-task" index={1} className={`inline-block px-6 py-3 text-sm leading-none border rounded-lg text-white hover:text-white hover:bg-green-700 transition duration-300 ${buttonColors[1]}`}>Add task</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/candidates" index={2} className={`inline-block px-6 py-3 text-sm leading-none border rounded-lg text-white hover:text-white hover:bg-yellow-700 transition duration-300 ${buttonColors[2]}`}>Candidate</ButtonLink>
            </li>
            <li>
              <Link to="/" onClick={() => logout()} className="text-red-500 hover:underline">Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/" index={3} className={`inline-block px-6 py-3 text-sm leading-none border rounded-lg text-white hover:text-white hover:bg-gray-700 transition duration-300 ${buttonColors[3]}`}>Votaciones online</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/services" index={4} className={`inline-block px-6 py-3 text-sm leading-none border rounded-lg text-white hover:text-white hover:bg-gray-700 transition duration-300 ${buttonColors[4]}`}>Services</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/login" index={0} className={`inline-block px-6 py-3 text-sm leading-none border rounded-lg text-white hover:text-white hover:bg-indigo-700 transition duration-300 ${buttonColors[0]}`}>Login</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register" index={1} className={`inline-block px-6 py-3 text-sm leading-none border rounded-lg text-white hover:text-white hover:bg-green-700 transition duration-300 ${buttonColors[1]}`}>Register</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/contact" index={2} className={`inline-block px-6 py-3 text-sm leading-none border rounded-lg text-white hover:text-white hover:bg-yellow-700 transition duration-300 ${buttonColors[2]}`}>Contact</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}