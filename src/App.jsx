import { Salle } from "./components/Salle";
import { useState } from "react";
// 1. Tu déclares le state ici (initialisé avec un tableau vide [])

function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleToggleSeat = (seat) => {
    setSelectedSeats((prev) => {
      const exists = prev.some((s) => s.id === seat.id);
      return exists
        ? prev.filter((s) => s.id !== seat.id) // Retire l'objet siège
        : [...prev, seat]; // Ajoute l'objet siège complet
    });
  };

  return (
    <main className="w-full p-2">
      {/* EN-TETE  */}
      <header className="w-full bg-gray-300  mb-2 py-2">
        <p className="text-3xl text-center">En-tête</p>
      </header>

      <div className="w-full bg-gray-400 p-2 grid md:grid-cols-2 gap-2">
        <div>
          <section id="scene" className="bg-gray-500  mb-2">
            <p className="text-2xl text-center">Scène</p>
          </section>

          {/* SALLE DE SIEGE  */}
          <section id="salle" className="bg-gray-600  h-50 pt-2.5">
            <Salle
              selectedSeats={selectedSeats}
              onToggleSeat={handleToggleSeat}
            />
          </section>

          {/* LEGENDE */}
          <section id="legende" className="bg-gray-800  text-center mt-2 p-2">
            <p className="text-2xl text-white">Legende</p>
          </section>
        </div>

        {/* RECAPITULATIF */}
        <aside id="recapitulatif" className="bg-gray-700 p-2 ">
          <p className="text-2xl text-white text-center">Récapitulatif</p>
        </aside>
      </div>
    </main>
  );
}

export default App;
