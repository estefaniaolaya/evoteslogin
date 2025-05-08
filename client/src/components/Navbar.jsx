import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";
import logoImage from "../img/ico.ico";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faVoteYea,
  faTasks,
  faSignInAlt,
  faUserPlus,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();  // Hook de autenticación
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Estado para el menú
  const [isLargeScreen, setIsLargeScreen] = useState(false);  // Estado para detectar pantallas grandes

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);  // Cambiar el estado del menú cuando el botón se presiona
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);  // Definir si es una pantalla grande o pequeña
    };

    handleResize();  // Llamar inmediatamente para verificar el tamaño inicial

    window.addEventListener("resize", handleResize);  // Agregar un event listener para cambios de tamaño de pantalla

    return () => {
      window.removeEventListener("resize", handleResize);  // Limpiar el event listener al desmontar el componente
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-600 my-3 py-5 px-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <Link to={isAuthenticated ? "/" : "/"}>
          <img src={logoImage} alt="Logo" className="h-12 w-auto" />
        </Link>

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={handleMenuToggle}  // Al hacer clic, alterna el menú
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className={`lg:flex ${isMenuOpen || isLargeScreen ? "flex" : "hidden"} mt-4 lg:mt-0 lg:items-center gap-x-4`}>
          {isAuthenticated ? (
            <>
              <span className="text-white-800">Welcome {user.username}</span>  {/* Mostrar saludo si está autenticado */}
              <ButtonLink to="/candidates" textColor="black">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Candidate
              </ButtonLink>
              <ButtonLink to="/votes" textColor="black">
                <FontAwesomeIcon icon={faVoteYea} className="mr-2" />
                Add Vote
              </ButtonLink>
             
              <Link
                to="/"
                onClick={() => logout()}  // Llamada a la función logout al hacer clic
                className="text-white-500 hover:underline flex items-center"
              >
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                Logout
              </Link>

            </>

          ) : (
            <div className="flex gap-x-1">  {/* Botones si no está autenticado */}
              <ButtonLink to="/" textColor="black" className="text-xs px-2 py-1">
                <FontAwesomeIcon icon={faVoteYea} className="mr-1 text-sm" />
                Votes Online
              </ButtonLink>
              <ButtonLink to="/services" textColor="black" className="text-xs px-2 py-1">
                <FontAwesomeIcon icon={faUser} className="mr-1 text-sm" />
                Services
              </ButtonLink>
              <ButtonLink to="/login" textColor="black" className="text-xs px-2 py-1">
                <FontAwesomeIcon icon={faSignInAlt} className="mr-1 text-sm" />
                Login
              </ButtonLink>
              <ButtonLink to="/register" textColor="black" className="text-xs px-2 py-1">
                <FontAwesomeIcon icon={faUserPlus} className="mr-1 text-sm" />
                Register
              </ButtonLink>
              <ButtonLink to="/contact" textColor="black" className="text-xs px-2 py-1">
                <FontAwesomeIcon icon={faEnvelope} className="mr-1 text-sm" />
                Contact
              </ButtonLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
