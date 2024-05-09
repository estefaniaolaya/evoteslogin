import { Link } from "react-router-dom";
import personeroImage from "../img/personero.png"; // Import the personero image

function HomePage() {
  return (
    <>
      {/* Welcome Section */}
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

      {/* Online Voting Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 flex justify-center items-center py-14">
        <header className="bg-white p-10 rounded-lg shadow-md text-center flex justify-between items-center w-full lg:w-11/12 line-divider">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl py-2 font-bold text-gray-800">Online Voting: <span className="text-blue-500">+ Participation</span><br /><span className="text-red-500">- Cost</span></h1>
          </div>
          <div className="w-full lg:w-1/2 px-8 lg:px-16 py-2">
            <p className="text-lg text-gray-700">
              It is the telematic voting tool that streamlines your voting processes. It facilitates people's voting wherever they are, allowing them to vote at any time and from anywhere. This alternative entails less organizational effort, time, and resource savings, and a reduction in environmental impact.
            </p>
            <Link
              className="inline-block mt-4 px-6 py-3 text-sm leading-none border rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </header>
      </section>

      {/* Why Use Easy Votes Section */}
      <section className="bg-gray-100 py-10">
        <header className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-center">Why Use Easy Votes?</h2>
          <section className="servicios" id="servicios">
            <div className="contenido text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Your current services go here */}
              </div>
            </div>
          </section>
        </header>
      </section>

      {/* Personero Elections Section */}
      <section className="bg-gray-200 py-14">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-center">
          {/* Image Container */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img src={personeroImage} alt="Personero Election" className="w-full rounded-lg shadow-lg" />
          </div>

          {/* Content Container */}
          <div className="w-full lg:w-1/2 px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Personero Elections</h2>
            <p className="text-lg text-gray-900 mb-6">
              Personero elections are crucial for student voices in educational institutions. Easy Votes makes it easy for students to choose their representative through a secure and efficient online election process.
            </p>
            <ul className="list-disc text-lg text-gray-900 mb-6 pl-6">
              <li>Students can vote securely and conveniently from anywhere.</li>
              <li>The online voting process is efficient and transparent.</li>
              <li>Automatic and real-time results.</li>
            </ul>
            <Link
              className="inline-block px-8 py-4 text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition duration-300"
              to="/personero-elections"
            >
              Participate in Elections
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;