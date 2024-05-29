const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    height: "172",
    birth_year: "19BBY",
  },
  {
    id: 2,
    name: "C-3PO",
    height: "167",
    birth_year: "112BBY",
  },
  {
    id: 3,
    name: "R2-D2",
    height: "96",
    birth_year: "33BBY",
  },
  {
    id: 4,
    name: "Darth Vader",
    height: "202",
    birth_year: "41.9BBY",
  },
  {
    id: 5,
    name: "Leia Organa",
    height: "150",
    birth_year: "19BBY",
  },
  {
    id: 6,
    name: "Owen Lars",
    height: "178",
    birth_year: "52BBY",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    height: "165",
    birth_year: "47BBY",
  },
  {
    id: 8,
    name: "R5-D4",
    height: "97",
    birth_year: "unknown",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    height: "183",
    birth_year: "24BBY",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    height: "182",
    birth_year: "57BBY",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    height: "188",
    birth_year: "41.9BBY",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    height: "180",
    birth_year: "64BBY",
  },
  {
    id: 13,
    name: "Chewbacca",
    height: "228",
    birth_year: "200BBY",
  },
  {
    id: 14,
    name: "Han Solo",
    height: "180",
    birth_year: "29BBY",
  },
  {
    id: 15,
    name: "Greedo",
    height: "173",
    birth_year: "44BBY",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    height: "175",
    birth_year: "600BBY",
  },
  {
    id: 17,
    name: "Wedge Antilles",
    height: "170",
    birth_year: "21BBY",
  },
  {
    id: 18,
    name: "Jek Tono Porkins",
    height: "180",
    birth_year: "unknown",
  },
  {
    id: 19,
    name: "Yoda",
    height: "66",
    birth_year: "896BBY",
  },
  {
    id: 20,
    name: "Palpatine",
    height: "170",
    birth_year: "82BBY",
  },
];

function searchCharacter(query) {
  const searchTerm = query.toLowerCase();
  return characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm)
  );
}
