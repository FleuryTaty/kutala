import data from "./data/data";
import { Siege } from "./components/Siege";

function App() {
  {
    /* TABLEAU RANGEE SIEGE NORMAL */
  }
  const rangeeNormal = data.map((salle) =>
    salle.rangee.filter((rangee) => rangee.categorie == "normal"),
  );
  {
    /* TABLEAU RANGEE SIEGE VIP */
  }
  const rangeeVIP = data.map((salle) =>
    salle.rangee.filter((rangee) => rangee.categorie == "VIP"),
  );

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
          <section id="salle" className="bg-gray-600  h-50">
            <p className="text-white text-center text-2xl">Salle</p>

            {/* RANGEE DES SIEGES NORMAL */}
            <div
              id="rangee_normal"
              className="w-full flex items-center justify-between px-2"
            >
              <span className="block text-[20px] text-white font-bold mr-2">
                {rangeeNormal.map((rangee) =>
                  rangee.map((item) => item.lettre),
                )}
              </span>

              {/* SIEGE */}
              <div id="siege" className="flex items-center mt-2">
                {rangeeNormal.map((rangee) =>
                  rangee.map((siege) =>
                    siege.siege.map((item) => (
                      <Siege
                        key={item.id}
                        etat={item.etat}
                        isVIP={item.isVIP}
                      />
                    )),
                  ),
                )}
              </div>

              <span className="block text-[20px] text-white font-bold ml-2">
                {rangeeNormal.map((rangee) =>
                  rangee.map((item) => item.lettre),
                )}
              </span>
            </div>

            {/* RANGEE DES SIEGES VIP */}
            <div
              id="rangee_VIP"
              className="flex items-center justify-between px-2"
            >
              <span className="block text-[20px] text-white font-bold mr-2">
                {rangeeVIP.map((rangee) => rangee.map((item) => item.lettre))}
              </span>

              <div id="siege" className="mt-2 flex items-center justify-center">
                {rangeeVIP.map((rangee) =>
                  rangee.map((siege) =>
                    siege.siege.map((item) => (
                      <Siege
                        key={item.id}
                        etat={item.etat}
                        isVIP={item.isVIP}
                      />
                    )),
                  ),
                )}
              </div>

              <span className="block text-[20px] text-white font-bold ml-2">
                {rangeeVIP.map((rangee) => rangee.map((item) => item.lettre))}
              </span>
            </div>
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
