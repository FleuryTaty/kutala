import { Salle } from "./components/Salle";
import { Buttonlegende } from "./components/Buttonlegende";
import { Recapitulatif } from "./components/Recapitulatif";
import { ConfirmationModal } from "./components/ConfirmationModal";
import { useState } from "react";
import { MOVIE_INFO, SEAT_TYPES } from "./data/data";
import { Header } from "./components/Header";
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

  // 1. State booléen pour afficher ou masquer la modale
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. Fonction déclenchée par le bouton "Confirmer la réservation"
  const handleOpenModal = () => {
    if (selectedSeats.length === 0) return;
    setIsModalOpen(true);
  };

  // 3. Fonction déclenchée par le bouton "Fermer" de la modale
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSeats([]); // Remet la sélection à zéro à la fermeture (retire cette ligne si tu veux garder les sièges sélectionnés)
  };

  // Calcul du prix total à passer à la modale
  const totalPrice = selectedSeats.reduce(
    (total, seat) => total + SEAT_TYPES[seat.type].price,
    0,
  );

  return (
    <main className="w-full p-2">
      {/* EN-TETE  */}
      <Header movie={MOVIE_INFO} />

      <div className="w-full grid md:grid-cols-2 gap-2">
        <div>
          <section
            id="scene"
            className="mb-12 flex w-full flex-col items-center"
          >
            {/* Conteneur avec perspective 3D */}
            <div className="relative w-full max-w-2xl">
              {/* 1. La barre lumineuse courbée de l'écran */}
              <div className="h-3 w-full rounded-t-[100%] bg-gradient-to-r from-amber-500/20 via-white to-amber-500/20 shadow-[0_0_30px_rgba(255,255,255,0.8),0_10px_40px_rgba(245,158,11,0.5)]" />

              {/* 2. Le faisceau lumineux projeté vers la salle (effet trapèze) */}
              <div className="mx-auto h-16 w-[92%] bg-gradient-to-b from-white/20 via-amber-500/5 to-transparent [clip-path:polygon(4%_0%,96%_0%,100%_100%,0%_100%)] blur-sm" />

              {/* 3. Libellé discret sous le faisceau */}
              <p className="-mt-6 text-center text-[11px] font-semibold uppercase tracking-[0.4em] text-slate-400/80">
                Écran
              </p>
            </div>
          </section>

          {/* SALLE DE SIEGE  */}
          <section
            id="salle"
            className="bg-gray-800/10 border border-gray-700 rounded py-2"
          >
            <Salle
              selectedSeats={selectedSeats}
              onToggleSeat={handleToggleSeat}
            />
          </section>

          {/* LEGENDE */}
          <section
            id="legende"
            className="bg-gray-800/10 border border-gray-700 rounded text-center mt-2 p-2 flex justify-center gap-3"
          >
            <Buttonlegende type={""} />
            <Buttonlegende type={"selectionne"} />
            <Buttonlegende type={"VIP"} />
            <Buttonlegende type={"occupied"} />
          </section>
        </div>

        {/* RECAPITULATIF */}
        <aside
          id="recapitulatif"
          className=" bg-slate-900/40 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.25)] backdrop-blur-2xl"
        >
          <Recapitulatif
            selectedSeat={selectedSeats}
            onConfirm={handleOpenModal}
          />
        </aside>
      </div>

      {/* Affichage conditionnel de la modale */}
      {isModalOpen && (
        <ConfirmationModal
          selectedSeats={selectedSeats}
          totalPrice={totalPrice}
          movie={MOVIE_INFO}
          onClose={handleCloseModal}
        />
      )}
    </main>
  );
}

export default App;
