let commentsArr = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

function buildCommentSection(Arr) {
  const parentContainer = document.querySelector(".comment-feed");

  for (let i = 0; i < Arr.length; i++) {
    // Creat new comment container
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment");
    parentContainer.appendChild(commentContainer);

    // Create Profile picture image container
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("comment__img-container");
    commentContainer.appendChild(imgContainer);

    // // create profile image in image container
    const commentImage = document.createElement("img");
    commentImage.classList.add("comment__img");
    imgContainer.appendChild(commentImage);

    // // Create container for Comment content (comment text, header)
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("comment__content-container");
    commentContainer.appendChild(contentContainer);

    // Create containter for header content (name, date)
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("comment__content-header");
    contentContainer.appendChild(headerContainer);

    // // Create containter for comment content (comment text)
    const commentTextContainer = document.createElement("div");
    commentTextContainer.classList.add("comment__content-text");
    contentContainer.appendChild(commentTextContainer);

    // // Create containter for header content (name, date)
    const commentName = document.createElement("h4");
    commentName.classList.add("comment__content-name");
    commentName.innerText = Arr[i]["name"];
    headerContainer.appendChild(commentName);

    // // Create containter for header content (name, date)
    const commentDate = document.createElement("h4");
    commentDate.classList.add("comment__content-name");
    commentDate.innerText = Arr[i]["date"];
    headerContainer.appendChild(commentDate);

    // // Create containter for header content (name, date)
    const commentText = document.createElement("p");
    commentText.classList.add("comment__content-text");
    commentText.innerText = Arr[i]["comment"];
    commentTextContainer.appendChild(commentText);
  }
}

buildCommentSection(commentsArr);
