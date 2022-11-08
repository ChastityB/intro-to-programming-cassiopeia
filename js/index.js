//make messages section invisible on start
let messageSelection = document.getElementById("messages");
messageSelection.style.display = "none";

let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copywright = document.createElement("p");
copywright.innerHTML = `Chastity &#169 ${thisYear}`;
footer.appendChild(copywright);
let skills = ["Javascript", "Python", "SQL", "Java", "Pandas", "Numpy"];
let skillsSelection = document.getElementById("skills");
let skillsList = skillsSelection.querySelector("ul");

for (let i in skills) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

let messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = event.target.name.value;
  let email = event.target.email.value;
  let message = event.target.message.value;
  console.log(`Name: ${name} Email: ${email} Message: ${message}`);

  //Display messages in list
  let messageList = messageSelection.querySelector("ul");
  let newMessage = document.createElement("li");
  newMessage.innerHTML = `<span>${message}</span>
  <p>${today.toLocaleString()} from <a href="mailto:${email}">${name}</a> &nbsp`; //this means the character is a non-breaking space aka will not break into a new line in the html

  //Display the messages section
  messageSelection.style.display = "block";

  //remove button
  let removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");
  removeButton.classList.add("removeButton");
  removeButton.addEventListener("click", (e) => {
    e.preventDefault();
    let entry = removeButton.parentNode;
    entry.remove();

    //if the messages list is empty, hide messages section
    if (messageList.childElementCount > 0) {
      messageSelection.style.display = "block";
    } else {
      messageSelection.style.display = "none";
    }
  });

  //edit button
  let editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.setAttribute("type", "button");
  editButton.classList.add("editButton");
  editButton.addEventListener("click", (event) => {
    event.preventDefault();
    newMessage.remove();
    let nameElement = document.querySelector("[name = name");
    nameElement.value = name;
    let emailElement = document.querySelector("[name = email");
    emailElement.value = email;
    let messageElement = document.querySelector("[name = message]");
    messageElement.value = message;
  });

  //Append necessary materials
  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});

// //Fetch Github Repositories
// let githubRequest = new XMLHttpRequest();
// githubRequest.open("GET", "https://api.github.com/users/ChastityB/repos");
// githubRequest.send();
// githubRequest.addEventListener("load", function callback() {
//   repositories = JSON.parse(this.response);
//   console.log(repositories);

//   //Display Repositories in list
//   let projectSection = document.getElementById("projects");
//   let projectList = projectSection.querySelector("ul");
//   for (let i = 0; i < repositories.length; i++) {
//     let project = document.createElement("li");
//     //project.innerText = repositories[i].name;
//     let projectLink = document.createElement("a");
//     projectLink.setAttribute("href", repositories[i].html_url);
//     projectLink.innerText = repositories[i].name;
//     project.appendChild(projectLink);
//     projectList.appendChild(project);
//   }
// });

//fetch github repositories using API
fetch("https://api.github.com/users/ChastityB/repos")
  .then((response) => response.json())
  .then((repositories) => {
    console.log(repositories);

    //Display Repositories in list
    projectSection = document.getElementById("projects");
    projectList = projectSection.querySelector("ul");
    for (let i = 0; i < repositories.length; i++) {
      project = document.createElement("li");
      projectLink = document.createElement("a");
      projectLink.setAttribute("href", repositories[i].html_url);
      projectLink.setAttribute("rel", "noreferrer noopener");
      projectLink.setAttribute("target", "_blank");
      projectLink.innerText = repositories[i].name;
      project.appendChild(projectLink);
      projectList.appendChild(project);
    }
  })
  .catch((error) => console.error(error));
