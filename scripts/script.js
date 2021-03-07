function Summary() {
  constructor(
    title = "Unknown",
    author = "Unknown",
    summary = "Unknown",
  ) 
    this.title = title;
    this.author = author;
    this.summary = summary;  
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

// get summary func?


function saveLocal() {
  localStorage.setItem("myList", JSON.stringify(myList));
}


const form = document.querySelector(".add-summary");
form.addEventListener("submit", addSummary);

function addSummary(e) {
  e.preventDefault();
  

}