// Add your code here
const input = document.getElementById("userInput");
const bodyText = document.getElementById("bodytext");

input.addEventListener("input", handleInput);

function handleInput() {
  const searchText = input.value.trim();
  const regex = new RegExp(
    searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    "gi"
  );
  const highlightedText = bodyText.innerHTML.replace(/<\/?span[^>]*>/g, "");
  bodyText.innerHTML = highlightedText.replace(
    regex,
    (match) => `<span style="background-color: yellow">${match}</span>`
  );
}
