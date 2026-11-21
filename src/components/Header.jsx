// components/Header.jsx
export function Header({ movie }) {
  return (
    <header className="relative mb-8 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.2)] backdrop-blur-2xl">
      {/* Reflet lumineux d'ambiance */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Bloc Gauche : Affiche + Détails du film */}
        <div className="flex items-center gap-5">
          {/* Affiche du film avec bordure lumineuse */}
          <div className="relative shrink-0">
            <img
              src={movie.poster}
              alt={`Affiche du film ${movie.title}`}
              className="h-28 w-20 rounded-2xl object-cover shadow-lg shadow-black/60 ring-1 ring-white/20 sm:h-32 sm:w-24"
            />
            {/* Badge Format (IMAX 3D) superposé en bas de l'affiche */}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
              {movie.format}
            </span>
          </div>

          {/* Titre et métadonnées */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-400">
              <span>{movie.genre}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">{movie.duration}</span>
              <span className="text-slate-600">•</span>
              <span className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-300">
                {movie.rating}
              </span>
            </div>

            <h1 className="mt-1.5 text-xl font-bold tracking-tight text-white sm:text-2xl">
              {movie.title}
            </h1>

            {/* Lieu / Salle */}
            <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-400 sm:text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-amber-500"
              >
                <path
                  fillRule="evenodd"
                  d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{movie.cinema}</span>
            </p>
          </div>
        </div>

        {/* Bloc Droite : Date & Horaire de la séance */}
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 sm:flex-col sm:items-end sm:justify-center sm:px-5 sm:py-4">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-4 w-4 text-amber-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            <span>{movie.date}</span>
          </div>

          <div className="flex items-baseline gap-1.5">
            <span className="text-[11px] uppercase tracking-wider text-slate-400">
              Séance
            </span>
            <span className="text-xl font-extrabold text-amber-400 sm:text-2xl">
              {movie.time}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
