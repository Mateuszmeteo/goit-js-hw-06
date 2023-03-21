const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



//  const newLi = document.createElement(ingredients)

const listNew = document.querySelector("#ingredients")
// (.ingredients)

let listItem = document.createElement("li")
// listItem.textContent = "oooopop"

ingredients.forEach((e) => {
  listItem = document.createElement("li");
  listItem.textContent = e;
  listItem.classList.add("item");
  listNew.append(listItem);

});


console.log(listItem)