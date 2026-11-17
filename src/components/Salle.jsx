// components/Salle.jsx
import { CINEMA_HALL } from "../data/data";
import { Siege } from "./Siege";

export function Salle({ selectedSeats, onToggleSeat }) {
  return (
    <div className="flex flex-col gap-3 items-center">
      {CINEMA_HALL.map((rowObj) => (
        <div key={rowObj.row} className="flex items-center gap-2">
          {/* Lettre de la rangée à gauche */}
          <span className="w-6 text-slate-400 font-semibold">{rowObj.row}</span>

          {/* Les sièges de la rangée */}
          <div className="flex gap-2">
            {rowObj.seats.map((seat) => {
              const isSelected = selectedSeats.some((s) => s.id === seat.id);
              return (
                <Siege
                  key={seat.id}
                  seat={seat}
                  isSelected={isSelected}
                  onSelect={onToggleSeat}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
