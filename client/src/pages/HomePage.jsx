import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

function HomePage() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    // Simulando una carga para demostración
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };


  return (
  <section className="bg-teal-300 flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold">Evotes</h1>
      <p className="text-md text-slate-400">
        Easy votes secury 
      </p>


      <Button
          label="Get Started"
          className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
          icon={loading ? 'pi pi-spin pi-spinner' : 'pi pi-check'}
          loading={loading}
          onClick={handleClick}
        />

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/register"
      >
        Get Started
      </Link>
    </header>
  </section>
  );
}

export default HomePage;
