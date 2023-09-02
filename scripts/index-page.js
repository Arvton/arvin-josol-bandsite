const commentsArray = [
    {
        username: "Miles Acosta",
        timestamp: "12/20/2020",
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },

    {
        username: "Emilie Beach",
        timestamp: "01/09/2021",
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },

    {
        username: "Connor Walton",
        timestamp: "02/17/2021",
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    }

];

const displayComment = (arrayItem) => {
    const commentsForm = document.querySelector(".comments");

    const commentsCard = document.createElement("div");
    commentsCard.setAttribute("class", "comments__card")

    commentsForm.appendChild(commentsCard);

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
    commentsDate.innerText = arrayItem.timestamp;
    commentsData.appendChild(commentsDate);

    const commentsText = document.createElement("p");
    commentsText.setAttribute("class", "comments__text");
    commentsText.innerText = arrayItem.text;
    commentsContentContainer.appendChild(commentsText);

    const commentsDivider = document.createElement("div");
    commentsDivider.setAttribute("class", "comments__divider");
    commentsForm.appendChild(commentsDivider);
}

for (let i = commentsArray.length - 1; i >= 0; i--) {
    displayComment(commentsArray[i]);
}