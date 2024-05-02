import React from "react";

function Candidates() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 p-10">
      <header className="bg-white p-10">
        <section className="candidates" id="candidates">
          <div className="contenido text-center">
            <h2 className="text-5xl py-4 font-bold text-gray-800">Conoce a los Candidatos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="candidate-box bg-white p-8 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg transform hover:translate-x-2 hover:bg-purple-200">
                <img src="robot1.jpg" alt="Robot 1" className="mx-auto w-24 h-24 rounded-full mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">Juan Pérez</h3>
                <p className="text-gray-700">Candidato a Presidente del Centro de Estudiantes</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Conocer más</button>
              </div>
              <div className="candidate-box bg-white p-8 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg transform hover:translate-x-2 hover:bg-green-200">
                <img src="robot2.jpg" alt="Robot 2" className="mx-auto w-24 h-24 rounded-full mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">María López</h3>
                <p className="text-gray-700">Candidata a Vicepresidente del Centro de Estudiantes</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Conocer más</button>
              </div>
              <div className="candidate-box bg-white p-8 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg transform hover:translate-x-2 hover:bg-yellow-200">
                <img src="robot3.jpg" alt="Robot 3" className="mx-auto w-24 h-24 rounded-full mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">Pedro González</h3>
                <p className="text-gray-700">Candidato a Tesorero del Centro de Estudiantes</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Conocer más</button>
              </div>
            </div>
          </div>
        </section>
      </header>
    </section>
  );
}

export default Candidates;