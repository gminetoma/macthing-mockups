class Bee {
  constructor(name, specie, age) {
    this.name = name;
    this.specie = specie;
    this.age = age;
  }
}

const bees = [
  new Bee("Theo", "Bumblebee", "23 days"),
  new Bee("Gargi", "Carpenter bee", "1 year"),
  new Bee("Ahbi", "Honey bee", "4 months"),
  new Bee("Bruno", "Mason bee", "11 weeks"),
  new Bee("Caramia", "Sweat bee", "1 month"),
];

const fillTable = () => {
  const table = document.querySelector("#table-bee");
  const tBody = document.createElement("tbody");

  for (const bee of bees) {
    const row = document.createElement("tr");
    for (const key in bee) {
      const cell = document.createElement("td");
      cell.innerText = bee[key];
      row.appendChild(cell);
    }
    tBody.appendChild(row);
  }
  table.appendChild(tBody);
};

window.addEventListener("load", (event) => {
    fillTable();
})