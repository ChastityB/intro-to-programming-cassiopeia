let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copywright = document.createElement("p");
copywright.innerHTML = `Chastity ${thisYear}`;
footer.appendChild(copywright);
let skills = ["Javascript", "Python", "SQL", "Java", "Pandas", "Numpy"];
let skillsSelection = document.getElementById("skills");
let skillsList = skillsSelection.querySelector("ul");

for (let i in skills) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
