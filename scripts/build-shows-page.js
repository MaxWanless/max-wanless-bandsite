let showsArr = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

function buildShowSection(Arr) {
  const parentContainer = document.querySelector(".shows");

  const showsTable = createElement(parentContainer,"showsTable","shows__table","div");

  const showsHeaderRow = createElement(showsTable,"showsHeaderRow","shows__table-tr--header","div");

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
    createShow(Arr[i].date, Arr[i].venue, Arr[i].location);
  }
}

buildShowSection(showsArr);

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
    date
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
