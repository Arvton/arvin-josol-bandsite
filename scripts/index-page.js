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
commentsUsername.innerText = "Connor Walton";
commentsData.appendChild(commentsUsername);

const commentsDate = document.createElement("p");
commentsDate.setAttribute("class", "comments__timestamp");
commentsDate.innerHTML = "02/17/2021";
commentsData.appendChild(commentsDate);

const commentsText = document.createElement("p");
commentsText.setAttribute("class", "comments__text");
commentsText.innerText = "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence.Let us appreciate this for what it is and what it contains.";
commentsContentContainer.appendChild(commentsText);

const commentsDivider = document.createElement("div");
commentsDivider.setAttribute("class", "comments__divider");
commentsForm.appendChild(commentsDivider);
