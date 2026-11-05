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
            isVIP: false,
          },
          {
            id: "A2",
            etat: "occupe",
          },
          {
            id: "A3",
            etat: "selectionne",
          },
          {
            id: "A4",
            etat: "occupe",
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
            isVIP: true,
          },
          {
            id: "B2",
            etat: "occupe",
            isVIP: true,
          },
          {
            id: "B3",
            etat: "selectionne",
            isVIP: true,
          },
          {
            id: "B4",
            etat: "occupe",
            isVIP: true,
          },
        ],
      },
    ],
  },
];

export default salle;
