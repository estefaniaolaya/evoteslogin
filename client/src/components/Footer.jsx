import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from "../img/ico.ico";
import SocialButtons from '../components/ui/SocialButtons'; // Ruta correcta al componente SocialButtons

const Footer = () => {
  const socials = [
    { name: 'GitHub', url: 'https://github.com/tu-usuario', icon: 'github' },
    { name: 'Twitter', url: 'https://twitter.com/tu-usuario', icon: 'twitter' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tu-usuario', icon: 'linkedin' },
    { name: 'Instagram', url: 'https://www.instagram.com/tu-usuario', icon: 'instagram' },
  ];

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
              <SocialButtons socials={socials} />
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