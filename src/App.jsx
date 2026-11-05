import data from "./data/data";
console.log(data);

function App() {
  return (
    <main className="w-full p-2">
      <header className="w-full bg-gray-300  mb-2 py-2">
        <p className="text-3xl text-center">En-tête</p>
      </header>

      <div className="w-full bg-gray-400 p-2 grid md:grid-cols-2 gap-2">
        <div>
          <section id="scene" className="bg-gray-500  mb-2">
            <p className="text-2xl text-center">Scène</p>
          </section>
          <section
            id="salle"
            className="bg-gray-600  h-50 flex items-center justify-center"
          >
            <p className="text-white text-center text-2xl">Salle</p>
          </section>
        </div>
        <aside id="recapitulatif" className="bg-gray-700 p-2 ">
          <p className="text-2xl text-white text-center">Récapitulatif</p>
        </aside>
      </div>

      <section
        id="legende"
        className="bg-gray-800  text-center mt-2 p-2 md:w-1/2"
      >
        <p className="text-2xl text-white">Legende</p>
      </section>
    </main>
  );
}

export default App;
