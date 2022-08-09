let showsArr = [];
const api_key = "db929eb2-0379-4372-9686-78554ac854bf";

axios
  .get(`https://project-1-api.herokuapp.com/showdates/?api_key=${api_key}`)
  .then((response) => {
    showsArr = response.data;
    buildShowSection(showsArr);
    console.log(response.data);
  });

function buildShowSection(Arr) {
  const parentContainer = document.querySelector(".shows");

  const showsTable = createElement(
    parentContainer,
    "showsTable",
    "shows__table",
    "div"
  );
  const showsHeaderRow = createElement(
    showsTable,
    "showsHeaderRow",
    "shows__table-tr--header",
    "div"
  );

  // Create header subtitles
  let subTitleArr = ["DATE", "VENUE", "LOCATION", ""];
  for (let i = 0; i < subTitleArr.length; i++) {
    const showsHeaderTd = createElement(
      showsHeaderRow,
      "showsHeaderTd",
      "shows__table-td--header",
      "div",
      subTitleArr[i]
    );
  }
  for (let i = 0; i < Arr.length; i++) {
    createShow(Arr[i].date, Arr[i].place, Arr[i].location);
  }
  createTableEventListners()
}

function createShow(date, venue, locatiton) {
  const parentContainer = document.querySelector(".shows__table");

  const showTableRow = createElement(
    parentContainer,
    "showTableRow",
    "shows__table-tr",
    "div"
  );

  const showTableRowDateHeader = createElement(
    showTableRow,
    "showTableRow",
    "shows__table-td--mobile",
    "div",
    "DATE"
  );


  const showTableRowDateData = createElement(
    showTableRow,
    "showTableRow",
    "shows__table-td",
    "div",
    formatDate(date)
  );

  const showTableRowVenueHeader = createElement(
    showTableRow,
    "showTableRow",
    "shows__table-td--mobile",
    "div",
    "VENUE"
  );

  const showTableRowVenueData = createElement(
    showTableRow,
    "showTableRow",
    "shows__table-td",
    "div",
    venue
  );

  const showTableRowLocationHeader = createElement(
    showTableRow,
    "showTableRow",
    "shows__table-td--mobile",
    "div",
    "LOCATION"
  );

  const showLocation = createElement(
    showTableRow,
    "showLocation",
    "shows__table-td",
    "div",
    locatiton
  );

  const shoeHeaderButton = createElement(
    showTableRow,
    "showHeaderButton",
    "shows__button",
    "button",
    "BUY TICKETS"
  );
}

function createElement(parent, childName, className, elementType, Data) {
  const child = document.createElement(elementType);
  child.classList.add(className);
  if (Data != null) {
    child.innerText = Data;
  } else {
  }
  parent.appendChild(child);
  return child;
}

 function createTableEventListners(){
// Highlight clicked on row
let showsTableRowArr = document.querySelectorAll(".shows__table-tr");
console.log(showsTableRowArr);
for (let i = 0; i < showsTableRowArr.length; i++) {
  showsTableRowArr[i].addEventListener("click", (event) => {
    let selectedIndex = i;
    for (let j = 0; j < showsTableRowArr.length; j++) {
      if (selectedIndex === j) {
        event.currentTarget.classList.add("shows__table-tr--selected");
      } else {
        showsTableRowArr[j].classList.remove("shows__table-tr--selected");
      }
    }
  });
}}

//Function for formatting Date from time stamp
function formatDate(timestamp) {
  let postDate = new Date(timestamp);
  let day = String(postDate.getDate()).padStart(2, "0");
  let month = String(postDate.getMonth() + 1).padStart(2, "0");
  let year = postDate.getFullYear();
  postDate = day + "/" + month + "/" + year;
  return postDate;
}
