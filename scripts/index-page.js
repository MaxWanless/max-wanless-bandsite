//Insert API key as a string into this variable
const api_key = "db929eb2-0379-4372-9686-78554ac854bf";

//Call reload comments function to build initial comment section
reloadComments();

//Call Axios to retrieve comment data
function reloadComments() {
  axios
    .get(`https://project-1-api.herokuapp.com/comments/?api_key=${api_key}`)
    .then((response) => {
      buildCommentSection(response.data);
    }).catch((error)=>{
      console.log(error)
    });
}

// Loop through each comment in array and call createComment routine for each
function buildCommentSection(Arr) {
  Arr = Arr.sort((a, b) => b.timestamp - a.timestamp);
  resetCommentSection();
  Arr.forEach((comment) => {
    createComment(comment);
  });
  deleteButtonlistners();
  likeButtonListners();
}

// Post new comment to axios API
const commentform = document.querySelector(".form");
commentform.addEventListener("submit", (SubmitEvent) => {
  SubmitEvent.preventDefault();
  if (
    SubmitEvent.target.name.value.length > 0 &&
    SubmitEvent.target.comment.value.length > 0
  ) {
    const newComment = {
      name: SubmitEvent.target.name.value,
      comment: SubmitEvent.target.comment.value,
    };
    axios
      .post(
        `https://project-1-api.herokuapp.com/comments/?api_key=${api_key}`,
        newComment
      )
      .then((response) => {
        SubmitEvent.preventDefault();
        reloadComments();
        SubmitEvent.target.reset();
        SubmitEvent.target.name.classList.remove("form__text-input--error");
        SubmitEvent.target.comment.classList.remove("form__text-input--error");
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    if (
      SubmitEvent.target.name.value.length <= 0 &&
      SubmitEvent.target.comment.value.length <= 0
    ) {
      SubmitEvent.target.name.classList.add("form__text-input--error");
      SubmitEvent.target.comment.classList.add("form__text-input--error");
    } else if (SubmitEvent.target.comment.value.length <= 0) {
      SubmitEvent.target.comment.classList.add("form__text-input--error");
    } else {
      SubmitEvent.target.name.classList.add("form__text-input--error");
    }
  }
});

//Create comment function
function createComment(obj) {
  // Select Comment feed section to create comment section in
  const parentContainer = document.querySelector(".comment-feed");
  // Creat main comment container
  const commentContainer = createElement(parentContainer, "comment", "div");
  // Create profile picture image container
  const imgContainer = createElement(
    commentContainer,
    "comment__img-container",
    "div"
  );
  // create profile image in image container
  const commentImage = createElement(imgContainer, "comment__img", "div");
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
  // Create name element in header container
  const commentName = createElement(
    headerContainer,
    "comment__header-text--bold",
    "h4",
    obj.name
  );

  // Create date element in header container
  const commentDate = createElement(
    headerContainer,
    "comment__header-text--time",
    "p",
    timeSince(obj.timestamp)
  );
  //Create comment text element in comment text container
  const commentText = createElement(
    commentTextContainer,
    "comment__content-text",
    "p",
    obj.comment
  );

  // Create interaction container
  const commentinterationContainer = createElement(
    contentContainer,
    "comment__interaction-container",
    "div"
  );

  //Create Like count
  const likeCount = createElement(
    commentinterationContainer,
    "comment__interaction-text",
    "p",
    `Likes: ${obj.likes}`
  );
  //Create Like button
  const likeButton = createElement(
    commentinterationContainer,
    "comment__interaction-button--like",
    "button",
    "👍",
    obj.id
  );

  //Create delete button
  const deleteButton = createElement(
    commentinterationContainer,
    "comment__interaction-button--delete",
    "button",
    "🚫",
    obj.id
  );
}

// Function for creating elements
function createElement(parent, className, elementType, data, id) {
  const child = document.createElement(elementType);
  child.classList.add(className);
  if (data != null) {
    child.innerText = data;
  } else {
  }
  if (id != null) {
    child.setAttribute("id", id);
  } else {
  }
  parent.appendChild(child);
  return child;
}

//Calculate time since post and return timestamp updates on next comment section reload
function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) {
    if (interval < 2) {
      return Math.floor(interval) + " year  ago";
    } else {
      return Math.floor(interval) + " years  ago";
    }
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    if (interval < 2) {
      return Math.floor(interval) + " month  ago";
    } else {
      return Math.floor(interval) + " months  ago";
    }
  }
  interval = seconds / 86400;
  if (interval > 1) {
    if (interval < 2) {
      return Math.floor(interval) + " day  ago";
    } else {
      return Math.floor(interval) + " days  ago";
    }
  }
  interval = seconds / 3600;
  if (interval > 1) {
    if (interval < 2) {
      return Math.floor(interval) + " hour  ago";
    } else {
      return Math.floor(interval) + " hours  ago";
    }
  }
  interval = seconds / 60;
  if (interval > 1) {
    if (interval < 2) {
      return Math.floor(interval) + " minute  ago";
    } else {
      return Math.floor(interval) + " minutes  ago";
    }
  }
  interval = seconds;
  if (interval > 30) {
    return " 30 seconds  ago";
  }
  return "Just now";
}

// Clear comment section on reload
function resetCommentSection() {
  const parentContainer = document.querySelector(".comment-feed");
  const commentList = document.querySelectorAll(".comment");
  commentList.forEach((comment, index) => {
    parentContainer.removeChild(commentList[index]);
  });
}

//Comment deleting function
function deleteButtonlistners() {
  const deleteButtons = document.querySelectorAll(
    ".comment__interaction-button--delete"
  );
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = event.currentTarget.id;
      axios
        .delete(
          `https://project-1-api.herokuapp.com/comments/${id}/?api_key=${api_key}`
        )
        .then((response) => {
          reloadComments();
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });
}

//Comment liking function
function likeButtonListners() {
  const likeButtons = document.querySelectorAll(
    ".comment__interaction-button--like"
  );
  likeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = event.currentTarget.id;
      axios
        .put(
          `https://project-1-api.herokuapp.com/comments/${id}/like/?api_key=${api_key}`
        )
        .then((response) => {
          reloadComments();
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });
}
