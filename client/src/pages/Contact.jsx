import React from "react";
import votoo from "../img/votaciones.png"; // Import the image

function Contact() {
  return (
    <section
      className="min-h-[1000px] relative flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${votoo})` }} // Establecer la imagen de fondo
    >
      {/* Capa oscura en la imagen de fondo */}
      <div
        className="absolute inset-0 w-full h-full bg-black opacity-50"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      ></div>

      {/* Contenido del formulario */}
      <div className="relative z-10 bg-white bg-opacity-90 shadow-xl rounded-lg max-w-2xl w-full p-10 backdrop-blur-md">
        
        {/* Título */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-500 mt-2">We would love to hear from you. Please fill out this form.</p>
        </div>

        {/* Formulario */}
        <form>
          <div className="mb-6">
            <label className="block text-gray-600 font-semibold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              id="name"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-600 font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-600 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              id="message"
              rows="5"
              placeholder="Type your message here"
            />
          </div>

          {/* Botón */}
          <div className="text-center">
            <button
              className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Información de contacto */}
        <div className="mt-10 text-center">
          <p className="text-gray-500">Or contact us via email: <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
