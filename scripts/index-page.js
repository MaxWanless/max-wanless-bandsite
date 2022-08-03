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

// Build Comment section from array
function buildCommentSection(Arr) {
  const parentContainer = document.querySelector(".comment-feed");
  for (let i = 0; i < Arr.length; i++) {
    createComment(Arr[i].name, Arr[i].comment, Arr[i].date, false);
  }
}

buildCommentSection(commentsArr);

// Add New comment
const commentform = document.querySelector(".comment-section__form");
commentform.addEventListener("submit", (SubmitEvent) => {
//   if (
//     SubmitEvent.target.name.value != "" &&
//     SubmitEvent.target.comment.value != ""
//   ) {
    SubmitEvent.preventDefault();
    const newComment = {};
    let postDate = new Date();
    let day = String(postDate.getDate()).padStart(2, "0");
    let month = String(postDate.getMonth() + 1).padStart(2, "0");
    let year = postDate.getFullYear();

    postDate = day + "/" + month + "/" + year;
    newComment.name = SubmitEvent.target.name.value;
    newComment.comment = SubmitEvent.target.comment.value;
    newComment.date = postDate;

    createComment(newComment.name, newComment.comment, newComment.date, true);
    commentform.reset();
//   } else {
//     SubmitEvent.preventDefault();
//     if (SubmitEvent.target.name.value != "") {
//       SubmitEvent.target.name.style.border = "1px solid red";
//     } else if(SubmitEvent.target.comment.value != "") {
//       SubmitEvent.target.comment.style.border = "1px solid red";
//     }
//   }
});

function createComment(name, comment, date, newComment) {
  const parentContainer = document.querySelector(".comment-feed");
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
  contentContainer.classList.add("comment__content");
  commentContainer.appendChild(contentContainer);

  // Create containter for header content (name, date)
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("comment__content-header-container");
  contentContainer.appendChild(headerContainer);

  // // Create containter for comment content (comment text)
  const commentTextContainer = document.createElement("div");
  commentTextContainer.classList.add("comment__content-text-container");
  contentContainer.appendChild(commentTextContainer);

  // // Create containter for header content (name, date)
  const commentName = document.createElement("h4");
  commentName.classList.add("comment__content-name");
  commentName.innerText = name;
  headerContainer.appendChild(commentName);

  // // Create containter for header content (name, date)
  const commentDate = document.createElement("h4");
  commentDate.classList.add("comment__content-name");
  commentDate.innerText = date;
  headerContainer.appendChild(commentDate);

  // // Create containter for header content (name, date)
  const commentText = document.createElement("p");
  commentText.classList.add("comment__content-text");
  commentText.innerText = comment;
  commentTextContainer.appendChild(commentText);

  if (newComment === true) {
    parentContainer.insertBefore(
      commentContainer,
      parentContainer.childNodes[0]
    );
  } else {
  }
}
