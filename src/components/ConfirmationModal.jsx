// components/ConfirmationModal.jsx
export function ConfirmationModal({
  selectedSeats,
  totalPrice,
  movie,
  onClose,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-6 text-center shadow-2xl dark:border-white/15 dark:bg-slate-900/95 dark:shadow-[0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)]">
        {/* Icône de succès */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 ring-1 ring-emerald-500/40 dark:text-emerald-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Réservation confirmée !
        </h2>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {movie.title} • {movie.date} à {movie.time}
        </p>

        {/* Récapitulatif des sièges et du montant */}
        <div className="my-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.03]">
          <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Sièges réservés ({selectedSeats.length})
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {selectedSeats.map((seat) => (
              <span
                key={seat.id}
                className="rounded-lg bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-600 ring-1 ring-amber-500/30 dark:bg-amber-500/20 dark:text-amber-300 dark:ring-amber-500/40"
              >
                {seat.id} ({seat.type})
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3 text-sm dark:border-white/10">
            <span className="text-slate-500 dark:text-slate-400">
              Total payé
            </span>
            <span className="text-base font-extrabold text-slate-900 dark:text-amber-400">
              {totalPrice} FCFA
            </span>
          </div>
        </div>

        {/* Bouton pour faire disparaître la modale */}
        <button
          type="button"
          onClick={onClose}
          className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-amber-500/25 transition hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
