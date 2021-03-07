class Summary {
  constructor(
    title = "Unknown",
    researcher = "Unknown",
    summary = "Unknown",
  ) {
    this.title = title;
    this.researcher = researcher;
    this.summary = summary;  
  }
}

let myList = [];

function addToList(newSummary) {
  if (myList.some((summary) => summary.title === newSummary.title)) return false;

  myList.push(newSummary);
  saveLocal();

  return true;
}

function removeFromList(summaryTitle) {
  myList = myList.filter(i => i.title !== summaryTitle)
  saveLocal();
}


const form = document.querySelector(".add-summary");
form.addEventListener("submit", addSummary);

function addSummary(e) {
  e.preventDefault();
  
  if (addToList(getListFromInput())) {
    updateListGrid();
  } else {
    alert('Error! Item already exists.');
  }
}

function getListFromInput() {
  const title = document.querySelector("#title").value;
  const researcher = document.querySelector("#researcher").value;
  const summary = document.querySelector("#summary").value;
  
  return new Summary(title, researcher, summary);
}

const listGrid = document.querySelector(".cards");

function updateListGrid() {
  resetGrid();
  for (let element of myList) {
    createListCard(element);
  }
}

function createListCard(sum) {
  const listCard = document.createElement("div");
  const title = document.createElement("h3");
  const researcher = document.createElement("h3");
  const summary = document.createElement("p");

  listCard.classList.add('card');

  title.textContent = sum.title;
  researcher.textContent = sum.researcher;
  summary.textContent = sum.summary;

  listCard.appendChild(title);
  listCard.appendChild(researcher);
  listCard.appendChild(summary);
  listGrid.appendChild(listCard);
}

function resetGrid() {
  listGrid.innerHTML = "";
}



function saveLocal() {
  localStorage.setItem("myList", JSON.stringify(myList));
}