export function Buttonlegende({ type }) {
  if (type == "occupied") {
    return (
      <div className="flex flex-col items-center font-mono">
        <div className="w-10 h-10 bg-gray-600 opacity-50 rounded flex items-center justify-center">
          x
        </div>
        <p className="text-gray-200">Occupée</p>
      </div>
    );
  }
  if (type == "selectionne") {
    return (
      <div className="flex flex-col items-center font-mono">
        <div className="w-10 h-10 bg-emerald-500 text-white rounded"></div>
        <p className="text-gray-200">Sélectionner</p>
      </div>
    );
  }
  if (type == "VIP") {
    return (
      <div className="font-mono flex flex-col items-center">
        <div className="w-10 h-10 bg-amber-500/20 rounded border-2 border-amber-500 text-amber-400"></div>
        <p className="text-gray-200">VIP</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center font-mono">
      <div className="w-10 h-10 bg-slate-700 text-slate-200 rounded"></div>
      <p className="text-gray-200">Libre</p>
    </div>
  );
}
