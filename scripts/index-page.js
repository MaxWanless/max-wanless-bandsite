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
  // fix with proper logic
  parentContainer.innerHTML = null;
  for (let i = 0; i < Arr.length; i++) {
    createComment(Arr[i].name, Arr[i].comment, Arr[i].date);
  }
}
// Generate comment section for original array
buildCommentSection(commentsArr);

// Add New comment event handler
const commentform = document.querySelector(".form");
commentform.addEventListener("submit", (SubmitEvent) => {
  SubmitEvent.preventDefault();

  if (
    SubmitEvent.target.name.value.length > 0 &&
    SubmitEvent.target.comment.value.length > 0
  ) {
    //Create new comment object and fill with data
    const newComment = {};
    let postDate = new Date();
    let day = String(postDate.getDate()).padStart(2, "0");
    let month = String(postDate.getMonth() + 1).padStart(2, "0");
    let year = postDate.getFullYear();
    postDate = day + "/" + month + "/" + year;
    newComment.name = SubmitEvent.target.name.value;
    newComment.date = postDate;
    newComment.comment = SubmitEvent.target.comment.value;
    // Add New comment to Array and re-run build comment section function
    commentsArr.unshift(newComment);
    buildCommentSection(commentsArr);
    commentform.reset();
  } else {
  }
});

function createComment(name, comment, date) {
  const parentContainer = document.querySelector(".comment-feed");

  // Creat main comment container
  const commentContainer = createElement(
    parentContainer,
    "comment",
    "div"
  );

  // Create profile picture image container
  const imgContainer = createElement(
    commentContainer,
    "comment__img-container",
    "div"
  );

  // create profile image in image container
  const commentImage = createElement(
    imgContainer,
    "comment__img",
    "div"
  );


  // Create container for Comment content (comment text, header)
  const contentContainer = createElement(
    commentContainer,
    "comment__content",
    "div"
  );

  // Create containter for header content (name, date)
  const headerContainer = createElement(
    contentContainer,
    "comment__header-container",
    "div"
  );

  // Create containter for comment content (comment text)
  const commentTextContainer = createElement(
    contentContainer,
    "comment__text-container",
    "div"
  );

  // Create containter for header content (name, date)
  const commentName = createElement(
    headerContainer,
    "comment__header-text--bold",
    "h4",
    name
  );

  // Create containter for header content (name, date)
  const commentDate = createElement(
    headerContainer,
    "comment__header-text",
    "p",
    date
  );

  //Create containter for header content (name, date)
  const commentText = createElement(
    commentTextContainer,
    "comment__content-text",
    "p",
    comment
  );
}

function createElement(parent, className, elementType, data) {
  const child = document.createElement(elementType);
  child.classList.add(className);
  if (data != null) {
    child.innerText = data;
  } else {
  }
  parent.appendChild(child);
  return child;
}
