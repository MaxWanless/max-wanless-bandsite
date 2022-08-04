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
//Buy Tickets

function buildShowSection(Arr) {
  const parentContainer = document.querySelector(".shows");

  // create container for show section title
  const showTitleContainer = document.createElement("div");
  showTitleContainer.classList.add("shows__title-container");
  parentContainer.appendChild(showTitleContainer);

  // create show section title
  const showTitle = document.createElement("h2");
  showTitle.classList.add("shows__title");
  showTitle.innerText = "SHOWS";
  showTitleContainer.appendChild(showTitle);

  // create shows list section container
  const showsListContainer = document.createElement("div");
  showsListContainer.classList.add("shows__list-container");
  parentContainer.appendChild(showsListContainer);

  // create Sub header container
  const showsHeaderContainer = document.createElement("div");
  showsHeaderContainer.classList.add("shows__header-container");
  showsListContainer.appendChild(showsHeaderContainer);

  // Create header subtitles
  let subTitleArr = ["DATE", "venue", "LOCATION"];
  for (let i = 0; i < subTitleArr.length; i++) {
    const showHeaderSubTitle = document.createElement("h4");
    showHeaderSubTitle.classList.add("shows__sub-title");
    showHeaderSubTitle.innerText = subTitleArr[i];
    showsHeaderContainer.appendChild(showHeaderSubTitle);
  }

  const showHeaderButton = document.createElement("button");
  showHeaderButton.classList.add("shows__sub-title");
  showHeaderButton.innerText = "BUY TICKETS";
  showsHeaderContainer.appendChild(showHeaderButton);

  for (let i = 0; i < Arr.length; i++) {
    createShow(Arr[i].date, Arr[i].venue, Arr[i].location);
  }
}

buildShowSection(showsArr);
function createShow(date, venue, locatiton) {
  const parentContainer = document.querySelector(".shows__list-container");

  // Create container for show element
  const showContainer = document.createElement("div");
  showContainer.classList.add("show__container");
  parentContainer.appendChild(showContainer);

  // Create subt title for Mobile
  const showDateSubTitle = document.createElement("h4");
  showDateSubTitle.classList.add("show__container-sub-title");
  showDateSubTitle.innerText = "DATE";
  showContainer.appendChild(showDateSubTitle);

  // Create date for Mobile
  const showDate = document.createElement("h5");
  showDate.classList.add("shows__date");
  showDate.innerText = date;
  showContainer.appendChild(showDate);

  // Create subt title for Mobile
  const showVenueSubTitle = document.createElement("h4");
  showVenueSubTitle.classList.add("show__container-sub-title");
  showVenueSubTitle.innerText = "VENUE";
  showContainer.appendChild(showVenueSubTitle);

  // Create Venu for Mobile
  const showVenue = document.createElement("h5");
  showVenue.classList.add("shows__date");
  showVenue.innerText = venue;
  showContainer.appendChild(showVenue);

  // Create subt title for Mobile
  const showLocationSubTitle = document.createElement("h4");
  showLocationSubTitle.classList.add("show__container-sub-title");
  showLocationSubTitle.innerText = "LOCATION";
  showContainer.appendChild(showLocationSubTitle);

  // Create Venu for Mobile
  const showLocation = document.createElement("h5");
  showLocation.classList.add("shows__date");
  showLocation.innerText = locatiton;
  showContainer.appendChild(showLocation);

  const showHeaderButton = document.createElement("button");
  showHeaderButton.classList.add("shows__sub-title");
  showHeaderButton.innerText = "BUY TICKETS";
  showContainer.appendChild(showHeaderButton);
}
