import React from "react";
import { Link } from "react-router-dom";

// Define una lista de colores para cada botón
const buttonColors = [
  "bg-purple-400",
  "bg-green-300",
  "bg-yellow-300",
  "bg-red-200",
  "bg-purple-200",
];

export const ButtonB = ({ to, children, index }) => (
  <Link
    to={to}
    className={`inline-block text-white font-bold py-2 px-4 rounded-lg transition duration-300 ${buttonColors[index]}`}
    style={{
      textDecoration: 'none',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      opacity: '1',
      transition: 'opacity 0.3s, transform 0.3s', // Agregar transición para opacidad y transformación
    }}
    onMouseEnter={(e) => { e.target.style.opacity = '0.8'; e.target.style.transform = 'translateY(-2px)'; }} // Reducir la opacidad y desplazar hacia arriba
    onMouseLeave={(e) => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }} // Restaurar la opacidad y posición original
  >
    {children}
  </Link>
);