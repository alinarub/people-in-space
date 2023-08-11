const peopleInSpace = document.querySelector("[data-js='people-in-space']");
const listContainer = document.createElement("ul");
document.body.append(listContainer);

async function getPeopleInSpace() {
  const response = await fetch("http://api.open-notify.org/astros.json");

  const data = await response.json();

  console.log("data: ", data);
  peopleInSpace.textContent = data.number;
  console.log(data.people);

  data.people.forEach((person) => {
    const names = document.createElement("li");
    names.textContent = person.name;
    listContainer.append(names);
  });

  // data.people (an array)
  // loop over them (using forEach)
  // for each item in the array use
  // document.createElement("li")
  // add the name of the person to the element
  // append element to the dom
}

getPeopleInSpace();
