const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsItems = document.querySelector("#ingredients");
const liElements = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  return li;
});
ingredientsItems.append(...liElements);
console.log(ingredientsItems);
