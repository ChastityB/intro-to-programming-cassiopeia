//make messages section invisible on start
let messageSelection = document.getElementById("messages");
messageSelection.style.display = "none";

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
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> wrote: <span>${message}</span> &nbsp`; //this means the character is a non-breaking space aka will not break into a new line in the html

  //Display the messages section
  messageSelection.style.display = "block";

  //remove button
  let removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");
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

  //edit button way 1
  let editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.setAttribute("type", "button");
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

  //edit button way 2
  // let editButton = document.createElement("button");
  // editButton.innerText = "edit";
  // editButton.setAttribute("type", "button");
  // editButton.addEventListener("click", (edit) => {
  //   edit.preventDefault();
  //   let parent = editButton.parentNode;
  //   if (editButton.textContent == "edit") {
  //     let editMessage = newMessage.querySelector("span");
  //     let input = document.createElement("textarea");
  //     input.value = editMessage.textContent;
  //     parent.insertBefore(input, editMessage);
  //     parent.removeChild(editMessage);
  //     editButton.textContent = "save";
  //   } else if (editButton.textContent == "save") {
  //     let input = newMessage.querySelector("textarea");
  //     let editedMessage = document.createElement("span");
  //     editedMessage.textContent = input.value;
  //     parent.insertBefore(editedMessage, input);
  //     parent.removeChild(input);
  //     editButton.textContent = "edit";
  //   }
  // });

  //Append necessary materials
  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});
