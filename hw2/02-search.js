// Add your code here

const userInput = document.getElementById("userInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");
const noResults = document.getElementById("noResults");

searchBtn.addEventListener("click", handleClick);

function handleClick() {
  const query = userInput.value;
  console.log(query);
  const search = searchCharacter(query);
  display(search, query);
}

function display(characters, query) {
  results.innerHTML = "";
  if (characters.length === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
    characters.forEach((character) => {
      const card = createCard(character, query);
      results.appendChild(card);
    });
  }
}

function createCard(character, query) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("col-5", "d-inline-flex", "justify-content-end");
  //cardDiv.classList.add("col-5", "d-inline-flex", "align-items-center");

  const card = document.createElement("div");
  card.classList.add("card", "h-100");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = highlightSearch(character.name, query);

  const birthYear = document.createElement("p");
  birthYear.classList.add("card-text");
  birthYear.textContent = `Birth Year: ${character.birth_year}`;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(birthYear);

  card.appendChild(cardBody);
  cardDiv.appendChild(card);

  return cardDiv;
}

function highlightSearch(text, query) {
  const regex = new RegExp(query, "gi");
  return text.replace(
    regex,
    '<span style="background-color: yellow;">$&</span>'
  );
}
