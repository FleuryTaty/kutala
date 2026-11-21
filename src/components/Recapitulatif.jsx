import { SEAT_TYPES } from "../data/data";

export function Recapitulatif({ selectedSeat, onConfirm }) {
  const seatStandard = selectedSeat.filter((seat) => seat.type == "STANDARD");
  const seatVip = selectedSeat.filter((seat) => seat.type == "VIP");

  const amountSeatStandard = seatStandard.length * SEAT_TYPES.STANDARD.price;
  const amountSeatVip = seatVip.length * SEAT_TYPES.VIP.price;

  const totalAmount = amountSeatStandard + amountSeatVip;
  console.log(selectedSeat);

  if (selectedSeat == 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700/80 bg-slate-900/50 px-6 py-10 text-center backdrop-blur-sm">
        {/* Cercle d'icône subtil */}
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-800/80 text-amber-500/80 ring-1 ring-slate-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
            />
          </svg>
        </div>

        {/* Message principal */}
        <h3 className="text-base font-semibold text-slate-200">
          Aucun siège sélectionné
        </h3>

        {/* Instruction secondaire */}
        <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-slate-400">
          Cliquez sur une ou plusieurs places disponibles sur le plan de la
          salle pour afficher le détail de votre réservation.
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="pb-2 border-b-gray-500/20 border-b font-mono">
        <h1 className="text-3xl text-white font-black">
          Récapitulatif de la commande
        </h1>
        <span className="text-amber-400 font-mono">
          {selectedSeat.length} place(s) réservé(s)
        </span>
      </section>

      <section className="mt-2 font-mono">
        <h2 className="uppercase text-gray-400 font-mono">Sièges réservés</h2>
        <div className="h-50 m-0.5 p-1 bg-gray-800 border-gray-600 border scrollbar-none overflow-auto">
          {selectedSeat.map((seat) => (
            <div
              key={seat.id}
              className="flex items-center justify-between px-1.5"
            >
              <div className="flex gap-2 mb-1">
                <span
                  id="badge"
                  className="block flex justify-center items-center px-1 bg-amber-500/20 border-2 border-amber-500 text-amber-400"
                >
                  {seat.id}
                </span>

                <div>
                  <p className="text-white">Siège {seat.id}</p>
                  <span className="text-amber-500">{seat.type}</span>
                </div>
              </div>
              <p className="text-white font-mono">
                {seat.type == "STANDARD"
                  ? `${SEAT_TYPES.STANDARD.price.toLocaleString()} FCFA`
                  : `${SEAT_TYPES.VIP.price.toLocaleString()} FCFA`}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t-gray-500/20 border-t mt-3 pt-3 font-mono">
        <div className="flex justify-between">
          <p className="text-gray-200 font-mono">Sous-total billets</p>
          <span className="text-white font-mono text-nowrap">{`${totalAmount.toLocaleString()} FCFA`}</span>
        </div>
      </section>

      <section className="border-t-gray-500/20 border-t mt-5 pt-3 font-mono">
        <div className="flex justify-between items-center mb-3">
          <p className="uppercase text-gray-200">Total à payer</p>
          <span className="text-3xl text-amber-500 font-black font-mono">{`${totalAmount.toLocaleString()} FCFA`}</span>
        </div>

        <button
          type="button"
          onClick={onConfirm}
          className="group relative w-full overflow-hidden rounded-sm bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-6 py-4 text-sm font-bold uppercase tracking-wider cursor-pointer text-slate-950 shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/40 active:scale-[0.98] disabled:pointer-events-none disabled:bg-none disabled:bg-slate-800 disabled:text-slate-500 disabled:shadow-none"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          {/* Contenu du bouton */}
          <span className="relative flex items-center justify-center gap-2">
            <span>Confirmer la réservation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </section>
    </>
  );
}
