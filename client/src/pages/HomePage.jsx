import { Link } from "react-router-dom";


function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 flex justify-center items-center py-8"> 
        <header className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl py-2 font-bold text-gray-800">Easy Votes Security</h1>
          <p className="text-lg text-gray-700">
            Welcome to Easy Votes Security, your comprehensive solution for student election management. Create your voting process in minutes and let people vote from anywhere.
          </p>
          <Link
            className="inline-block mt-4 px-6 py-3 text-sm leading-none border rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300"
            to="/register"
          >
            Get Started
          </Link>
        </header>
      </section>

      <section className="bg-gradient-to-r from-blue-500 to-purple-500 flex justify-center items-center py-14">
  <header className="bg-white p-10 rounded-lg shadow-md text-center flex justify-between items-center w-full lg:w-11/12 line-divider">
    <div className="w-full lg:w-1/2">
      <h1 className="text-4xl md:text-5xl lg:text-6xl py-2 font-bold text-gray-800">Votos Online: <span className="text-blue-500">+ Participación</span><br /><span className="text-red-500">- Costo</span></h1>
    </div>
    <div className="w-full lg:w-1/2 px-8 lg:px-16 py-2">
      <p className="text-lg text-gray-700">
        It is the telematic voting tool that streamlines your voting processes. It facilitates people's voting wherever they are, allowing them to vote at any time and from anywhere. This alternative entails less organizational effort, time and resource savings, and a reduction in environmental impact.
      </p>
      <Link
        className="inline-block mt-4 px-6 py-3 text-sm leading-none border rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300"
        to="/register"
      >
        Contact
      </Link>
    </div>
  </header>
</section>

      <section className="bg-gray-100 py-10">
        <header className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-center">¿Por qué usar Easy Votes?</h2> {/* Título añadido */}
          <section className="servicios" id="servicios">
            <div className="contenido text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="service-box bg-white p-8 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg transform hover:translate-x-2 hover:bg-purple-200"> {/* Cambio de color al hacer hover y animación de desplazamiento hacia la derecha */}
                  <i className="fa-solid fa-code text-4xl text-indigo-600 mb-4"></i>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">SEGURO, INMUTABLE Y SECRETO</h3>
                  <p className="text-gray-700"><li>Verificación de doble factor</li>
 <li>Voto anónimo</li>
<li>Blockchain </li></p>
                </div>
                <div className="service-box bg-white p-8 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg transform hover:translate-x-2 hover:bg-green-200"> {/* Cambio de color al hacer hover y animación de desplazamiento hacia la derecha */}
                  <i className="fa-solid fa-object-group text-4xl text-green-600 mb-4"></i>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">LEGAL</h3>
                  <p className="text-gray-700">Adaptamos el voto digital a cualquier reglamentación, contando con validez legal adaptado a las legislaciones en colombia.</p>
                </div>
                <div className="service-box bg-white p-8 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg transform hover:translate-x-2 hover:bg-yellow-200"> {/* Cambio de color al hacer hover y animación de desplazamiento hacia la derecha */}
                  <i className="fa-solid fa-circle-question text-4xl text-yellow-600 mb-4"></i>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">TRANSPARENCIA</h3>
                  <p className="text-gray-700">Aseguramos resultados:
<li>Inmutables</li>
<li>Auditables</li>
<li>Seguimiento en tiempo real.</li>
 

</p>
                </div>
              </div>
            </div>
          </section>
        </header>
      </section>
    </>
  );
}

export default HomePage;