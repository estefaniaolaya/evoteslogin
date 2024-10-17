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
  const { isAuthenticated, logout, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-5 px-10 shadow-md">
      <div className="w-full flex justify-between items-center">
        <Link to={isAuthenticated ? "/" : "/"}>
          <img src={logoImage} alt="Logo" className="h-12 w-auto" />
        </Link>

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={handleMenuToggle}
        >
          <svg
            className="h-5 w-5"
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

        <ul
          className={`lg:flex ${
            isMenuOpen || isLargeScreen ? "block" : "hidden"
          } mt-4 lg:mt-0 lg:items-center gap-x-4`}
        >
          {isAuthenticated ? (
            <>
              <li className={isLargeScreen ? "text-gray-900" : "hidden lg:block"}>
                Welcome {user.username}
              </li>
              <li>
                <ButtonLink to="/candidates" textColor="black">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  {isMenuOpen || isLargeScreen
                    ? "Candidate"
                    : <span className="lg:hidden">Cand.</span>}
                </ButtonLink>
              </li>
              <li>
                <ButtonLink to="/votes" textColor="black">
                  <FontAwesomeIcon icon={faVoteYea} className="mr-2" />
                  {isMenuOpen || isLargeScreen
                    ? "Add Vote"
                    : <span className="lg:hidden">Vote</span>}
                </ButtonLink>
              </li>
              <li>
                <ButtonLink to="/add-task" textColor="black">
                  <FontAwesomeIcon icon={faTasks} className="mr-2" />
                  {isMenuOpen || isLargeScreen
                    ? "Add Task"
                    : <span className="lg:hidden">Task</span>}
                </ButtonLink>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => logout()}
                  className="text-red-500 hover:underline flex items-center"
                >
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                  {isMenuOpen || isLargeScreen
                    ? "Logout"
                    : <span className="lg:hidden">Logout</span>}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <ButtonLink to="/" textColor="black">
                  <FontAwesomeIcon icon={faVoteYea} className="mr-2" />
                  {isMenuOpen || isLargeScreen
                    ? "Votes Online"
                    : <span className="lg:hidden">Votes</span>}
                </ButtonLink>
              </li>
              <li>
                <ButtonLink to="/services" textColor="black">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  {isMenuOpen || isLargeScreen
                    ? "Services"
                    : <span className="lg:hidden">Cands.</span>}
                </ButtonLink>
              </li>
              <li>
                <ButtonLink to="/login" textColor="black">
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                  {isMenuOpen || isLargeScreen
                    ? "Login"
                    : <span className="lg:hidden">Login</span>}
                </ButtonLink>
              </li>
              <li>
                <ButtonLink to="/register" textColor="black">
                  <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                  {isMenuOpen || isLargeScreen
                    ? "Register"
                    : <span className="lg:hidden">Reg.</span>}
                </ButtonLink>
              </li>
              <li>
                <ButtonLink to="/contact" textColor="black">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  {isMenuOpen || isLargeScreen
                    ? "Contact"
                    : <span className="lg:hidden">Cont.</span>}
                </ButtonLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
