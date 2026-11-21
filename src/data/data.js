// src/data/data.js

// 1. Les tarifs et types de sièges (évite de coder les prix en dur dans tes composants)
export const SEAT_TYPES = {
  STANDARD: {
    id: "standard",
    label: "Siège Standard",
    price: 5000, // Ou 10, selon ta devise
  },
  VIP: {
    id: "vip",
    label: "Siège VIP",
    price: 10000,
  },
};

// 2. Les informations pour l'en-tête (Header)
export const MOVIE_INFO = {
  title: "Dune : Deuxième Partie",
  cinema: "Cinéma Le Majestic - Salle 1",
  date: "Mardi 17 Nov. 2026",
  time: "20:30",
  format: "IMAX 3D",
  poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", // URL de l'affiche
  genre: "Science-Fiction, Aventure",
  duration: "2h 46min",
  rating: "Tous publics",
};

// 3. La salle organisée par rangées (Rows) pour un affichage facile en grille
export const CINEMA_HALL = [
  {
    row: "A",
    seats: [
      { id: "A1", number: 1, type: "STANDARD", status: "available" },
      { id: "A2", number: 2, type: "STANDARD", status: "available" },
      { id: "A3", number: 3, type: "STANDARD", status: "occupied" }, // Déjà réservé
      { id: "A4", number: 4, type: "STANDARD", status: "occupied" },
      { id: "A5", number: 5, type: "STANDARD", status: "available" },
      { id: "A6", number: 6, type: "STANDARD", status: "available" },
    ],
  },
  {
    row: "B",
    seats: [
      { id: "B1", number: 1, type: "STANDARD", status: "available" },
      { id: "B2", number: 2, type: "STANDARD", status: "available" },
      { id: "B3", number: 3, type: "STANDARD", status: "available" },
      { id: "B4", number: 4, type: "STANDARD", status: "available" },
      { id: "B5", number: 5, type: "STANDARD", status: "occupied" },
      { id: "B6", number: 6, type: "STANDARD", status: "available" },
    ],
  },
  {
    row: "C", // Rangée VIP au fond de la salle
    seats: [
      { id: "C1", number: 1, type: "STANDARD", status: "available" },
      { id: "C2", number: 2, type: "STANDARD", status: "available" },
      { id: "C3", number: 3, type: "STANDARD", status: "available" },
      { id: "C4", number: 4, type: "STANDARD", status: "occupied" },
      { id: "C5", number: 5, type: "STANDARD", status: "available" },
      { id: "C6", number: 6, type: "STANDARD", status: "available" },
    ],
  },
  {
    row: "D", // Rangée VIP au fond de la salle
    seats: [
      { id: "D1", number: 1, type: "VIP", status: "available" },
      { id: "D2", number: 2, type: "VIP", status: "available" },
      { id: "D3", number: 3, type: "VIP", status: "available" },
      { id: "D4", number: 4, type: "VIP", status: "occupied" },
      { id: "D5", number: 5, type: "VIP", status: "available" },
      { id: "D6", number: 6, type: "VIP", status: "available" },
    ],
  },
  {
    row: "E", // Rangée VIP au fond de la salle
    seats: [
      { id: "E1", number: 1, type: "VIP", status: "available" },
      { id: "E2", number: 2, type: "VIP", status: "available" },
      { id: "E3", number: 3, type: "VIP", status: "available" },
      { id: "E4", number: 4, type: "VIP", status: "occupied" },
      { id: "E5", number: 5, type: "VIP", status: "available" },
      { id: "E6", number: 6, type: "VIP", status: "available" },
    ],
  },
];
