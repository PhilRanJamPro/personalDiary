const entryForm = document.getElementById("entryForm");
const entriesSection = document.querySelector("#entries");
const entryTextbox = document.querySelector(".entry-textbox");
const entriesNav = document.querySelector(".entries-nav");
const entryTitle = document.querySelector(".entry-title");


let count = 1;
let current = new Date();

function addEntryToDom(event) {
  event.preventDefault();
  const entryDiv = document.createElement("div");
  entryDiv.className = "single-entry";
  val = entryTitle.value
  entryDiv.innerHTML = val.bold() +": "+entryTextbox.value;
  entryDiv.style.display = "none";
  entriesSection.appendChild(entryDiv);
  entryTextbox.value = "";



  const displayEntryButton = document.createElement("button");
  displayEntryButton.className = "display-entry-button";
  displayEntryButton.innerText = current.toLocaleString();
  entriesNav.appendChild(displayEntryButton);

  displayEntryButton.addEventListener("click", function () {
    const allEntries = document.querySelectorAll(".single-entry");
    for (let index = 0; index < allEntries.length; index++) {
      allEntries[index].style.display = "none";
    }
    entryDiv.style.display = "block";
  });

  count++;
}

entryForm.addEventListener("submit", addEntryToDom);
