import React from "react";
import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children, textColor }) => {
  const buttonStyle = {
    textDecoration: "none",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    opacity: "1",
    transition: "opacity 0.4s, transform 0.4s",
    backgroundColor: "white", // Color de fondo deseado para todos los botones principales
    color: textColor || "black", // Usar el color de texto pasado como prop o negro por defecto
    padding: "12px 9px", // Ajustar el espaciado interno del botón
    borderRadius: "9px", // Redondear las esquinas del botón
    display: "inline-block",
  };

  const handleMouseEnter = (e) => {
    e.target.style.opacity = "0.8";
    e.target.style.transform = "translateY(-2px)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.opacity = "1";
    e.target.style.transform = "translateY(0)";
  };

  return (
    <Link
      to={to}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Link>
  );
};