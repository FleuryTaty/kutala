// components/Siege.jsx
export function Siege({ seat, isSelected, onSelect }) {
  // Détermination dynamique des classes CSS (exemple avec Tailwind)
  const getSeatStyle = () => {
    if (seat.status === "occupied") {
      return "bg-gray-600 cursor-not-allowed opacity-50"; // Occupé
    }
    if (isSelected) {
      return "bg-emerald-500 text-white scale-110"; // Sélectionné par l'utilisateur
    }
    if (seat.type === "VIP") {
      return "bg-amber-500/20 border-2 border-amber-500 text-amber-400 hover:bg-amber-500/40"; // VIP libre
    }
    return "bg-slate-700 hover:bg-slate-600 text-slate-200"; // Standard libre
  };

  return (
    <button
      disabled={seat.status === "occupied"}
      onClick={() => onSelect(seat)}
      className={`w-8 h-8 rounded-t-lg text-xs font-bold transition-all ${getSeatStyle()}`}
      title={`${seat.id} - ${seat.type}`}
    >
      {seat.number}
    </button>
  );
}
