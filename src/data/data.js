const salle = [
  {
    titre: "Demon slayer : La forteresse de l'infinie",
    rangee: [
      {
        lettre: "A",
        categorie: "normal",
        prix: 2000,
        siege: [
          {
            id: "A1",
            etat: "libre",
            selectionne: true,
          },
          {
            id: "A2",
            etat: "libre",
            selectionne: false,
          },
          {
            id: "A3",
            etat: "occupe",
            selectionne: false,
          },
          {
            id: "A4",
            etat: "libre",
            selectionne: false,
          },
        ],
      },
      {
        lettre: "B",
        categorie: "VIP",
        prix: 5000,
        siege: [
          {
            id: "B1",
            etat: "libre",
            selectionne: false,
          },
          {
            id: "B2",
            etat: "occupe",
            selectionne: false,
          },
          {
            id: "B3",
            etat: "libre",
            selectionne: false,
          },
          {
            id: "B4",
            etat: "libre",
            selectionne: true,
          },
        ],
      },
    ],
  },
];

export default salle;
