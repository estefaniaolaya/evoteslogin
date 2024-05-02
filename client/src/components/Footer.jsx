import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from "../img/ico.ico";

const Footer = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-8">
      <footer className="pie-pagina container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="box flex items-center justify-center md:justify-start">
            <figure className="mr-4">
              <a href="#">
              <img src={logoImage} alt="Logo" className="h-12 w-auto" />
              </a>
            </figure>
            <p className="text-white">Andres Camilo Polania Bobadilla</p>
          </div>

          <div className="box">
            <h2 className="text-white mb-4">SÍGUENOS</h2>
            <div className="red-social flex space-x-4">
              <a href="#" className="text-white fab fa-facebook" aria-label="Facebook"></a>
              <a href="#" className="text-white fab fa-instagram" aria-label="Instagram"></a>
              <a href="#" className="text-white fab fa-twitter" aria-label="Twitter"></a>
              <a href="#" className="text-white fab fa-youtube" aria-label="YouTube"></a>
            </div>
          </div>

          <div className="box text-right">
            <small className="text-white">&copy; 2024 <b>ANDRES POLANI</b> - Todos los Derechos Reservados.</small>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;