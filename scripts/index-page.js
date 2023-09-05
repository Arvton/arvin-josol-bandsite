const commentsArray = [
    {
        username: "Miles Acosta",
        date: "12/20/2020",
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },

    {
        username: "Emilie Beach",
        date: "01/09/2021",
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },

    {
        username: "Connor Walton",
        date: "02/17/2021",
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    }
];

// variable for the section where elements need to be added.
// will need for:
// 1. displaying all comments
// 2. clearing all comments
const commentsDisplay = document.querySelector(".comments__display");

//  function that creates one comment with needed CSS selectors
const displayComment = (arrayItem) => {
    const commentsCard = document.createElement("div");
    commentsCard.setAttribute("class", "comments__card")
    commentsDisplay.appendChild(commentsCard);

    const commentsAvatar = document.createElement("div");
    commentsAvatar.setAttribute("class", "comments__avatar");
    commentsCard.appendChild(commentsAvatar);

    const commentsContentContainer = document.createElement("div");
    commentsContentContainer.setAttribute("class", "comments__content-container")
    commentsCard.appendChild(commentsContentContainer);

    const commentsData = document.createElement("div");
    commentsData.setAttribute("class", "comments__data");
    commentsContentContainer.appendChild(commentsData);

    const commentsUsername = document.createElement("p");
    commentsUsername.setAttribute("class", "comments__username");
    commentsUsername.innerText = arrayItem.username;
    commentsData.appendChild(commentsUsername);

    const commentsDate = document.createElement("p");
    commentsDate.setAttribute("class", "comments__timestamp");
    commentsDate.innerText = arrayItem.date;
    commentsData.appendChild(commentsDate);

    const commentsText = document.createElement("p");
    commentsText.setAttribute("class", "comments__text");
    commentsText.innerText = arrayItem.text;
    commentsContentContainer.appendChild(commentsText);

    const commentsDivider = document.createElement("div");
    commentsDivider.setAttribute("class", "comments__divider");
    commentsDisplay.appendChild(commentsDivider);
}

// function that loops through the array of comments and displays each comment object
const displayAllComments = (commentsArray) => {
    for (let i = commentsArray.length - 1; i >= 0; i--) {
        displayComment(commentsArray[i]);
    }
}

// displays all default comments
displayAllComments(commentsArray);

// add a form submit listener
const submitForm = document.querySelector(".comments__form")
submitForm.addEventListener("submit", (event) => {
    // prevents page refresh on submit
    event.preventDefault();
    // grabs name and comment from the form
    const nameInput = document.getElementById("input-name");
    const commentInput = document.getElementById("input-comment");
    // creates a formatted date using current date
    const fullDate = new Date();
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth() + 1;
    const day = fullDate.getDate();
    const formattedDate = `${month}/${day}/${year}`;
    // pushes name, comment, and formatted date to comment array
    const newComment = {
        username: nameInput.value,
        date: formattedDate,
        text: commentInput.value
    }
    commentsArray.push(newComment);
    // clears all comments
    commentsDisplay.innerText = "";
    // displays all comments including new one
    displayAllComments(commentsArray);
    // resets the form
    submitForm.reset();
})