export function Siege({ id, etat, isVIP }) {
  if (etat == "occupe") {
    return (
      <button className="w-7 h-7 flex justify-center bg-gray-900 border border-gray-500 rounded cursor-not-allowed mx-1">
        <span className="text-gray-600 text-center">x</span>
      </button>
    );
  }
  if (etat == "selectionne") {
    return (
      <button className="w-7 h-7 bg-orange-400 border border-orange-400 rounded cursor-pointer mx-1"></button>
    );
  }
  return (
    <button
      className={
        isVIP
          ? "w-7 h-7 bg-indigo-700 border border-indigo-500 rounded cursor-pointer mx-1"
          : "w-7 h-7 bg-gray-700 border border-gray-500 rounded cursor-pointer mx-1"
      }
    ></button>
  );
}
