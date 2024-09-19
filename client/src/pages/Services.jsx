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
                <p className="text-gray-700">Implement an innovative management system aimed at providing educational institutions with a comprehensive platform that facilitates safe and efficient voting, while ensuring rigorous control of all school governance activities.</p>
              </div>
              <div className="service-box bg-white p-8 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg transform hover:translate-x-2 hover:bg-green-200">
                <i className="fa-solid fa-object-group text-5xl text-green-600 mb-4"></i>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Diseño</h3>
                <p className="text-gray-700">The development will feature a system architecture that satisfies the software components and a user interface in accordance with predefined requirements, both functional and non-functional.</p>
              </div>
              <div className="service-box bg-white p-8 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg transform hover:translate-x-2 hover:bg-yellow-200">
                <i className="fa-solid fa-circle-question text-5xl text-yellow-600 mb-4"></i>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Soporte</h3>
                <p className="text-gray-700">I offer specialized website support and administration services. My focus is on ensuring optimal performance, efficient problem resolution, and effective content management.</p>
              </div>
            </div>
          </div>
        </section>
      </header>
    </section>
  );
}

export default Services;