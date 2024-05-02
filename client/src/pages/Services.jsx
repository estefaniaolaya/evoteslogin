import React from "react";

function Services() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 p-10">
      <header className="bg-white p-10">
        <section className="servicios" id="servicios">
          <div className="contenido text-center">
            <h2 className="text-5xl py-4 font-bold text-gray-800">Easy Votes Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="service-box bg-white p-8 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg transform hover:translate-x-2 hover:bg-purple-200">
                <i className="fa-solid fa-code text-5xl text-indigo-600 mb-4"></i>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Aplicación</h3>
                <p className="text-gray-700">Implementar un sistema de gestión innovador destinado a proporcionar a las instituciones educativas una plataforma integral que facilite la realización de votaciones seguras y eficientes, al mismo tiempo que garantice un riguroso control de todas las actividades del gobierno escolar.</p>
              </div>
              <div className="service-box bg-white p-8 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg transform hover:translate-x-2 hover:bg-green-200">
                <i className="fa-solid fa-object-group text-5xl text-green-600 mb-4"></i>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Diseño</h3>
                <p className="text-gray-700">El desarrollo contará con una arquitectura de sistema que satisfaga los componentes de software y una interfaz de usuario acorde con los requisitos predefinidos, tanto funcionales como no funcionales.</p>
              </div>
              <div className="service-box bg-white p-8 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg transform hover:translate-x-2 hover:bg-yellow-200">
                <i className="fa-solid fa-circle-question text-5xl text-yellow-600 mb-4"></i>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Soporte</h3>
                <p className="text-gray-700">Ofrezco servicios especializados de soporte y administración para páginas web. Mi enfoque se centra en garantizar un rendimiento óptimo, la resolución eficiente de problemas y la gestión efectiva de contenido.</p>
              </div>
            </div>
          </div>
        </section>
      </header>
    </section>
  );
}

export default Services;