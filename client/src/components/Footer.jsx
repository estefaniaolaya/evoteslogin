import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">Síguenos</h2>
            <div className="flex mt-2">
              <a href="#" className="mr-4">
                <i className="fab fa-facebook-square text-lg"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-twitter-square text-lg"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-instagram-square text-lg"></i>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold">Enlaces útiles</h2>
            <ul className="mt-2">
              <li><Link to="/about">Acerca de nosotros</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
              <li><Link to="/terms">Términos y condiciones</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Contacto</h2>
            <p className="mt-2">Email: contacto@example.com</p>
            <p>Teléfono: +1234567890</p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>Derechos de autor © 2024 Easy Votes Security. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;