const baseURL = "https://project-1-api.herokuapp.com"
const apiKey = "?api_key=d7303870-e255-47ec-b639-d4e3097cac65"

const commentsEndpoint = "/comments"

// variable for the section where elements need to be added.
// will need for:
// 1. displaying all comments
// 2. clearing all comments
const commentsDisplay = document.querySelector(".comments__display");

//  function that creates one comment with needed CSS selectors and expected array object contents
const displayComment = (arrayItem) => {
    const commentsCard = document.createElement("div");
    commentsCard.setAttribute("class", "comments__card")
    commentsCard.setAttribute("id", `comment-${arrayItem.id}`)
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
    commentsUsername.innerText = arrayItem.name;
    commentsData.appendChild(commentsUsername);

    const commentsDate = document.createElement("p");
    commentsDate.setAttribute("class", "comments__timestamp");

    // convert timestamp to readable date
    const timestamp = arrayItem.timestamp;
    const commentTimestamp = new Date(timestamp);
    const year = commentTimestamp.getFullYear();
    const month = commentTimestamp.getMonth() + 1;
    const day = commentTimestamp.getDate();
    const formattedDate = `${month}/${day}/${year}`
    commentsDate.innerText = formattedDate;
    commentsData.appendChild(commentsDate);

    const commentsText = document.createElement("p");
    commentsText.setAttribute("class", "comments__text");
    commentsText.innerText = arrayItem.comment;
    commentsContentContainer.appendChild(commentsText);

    commentsInteraction = document.createElement("div")
    commentsInteraction.setAttribute("class", "comments__interaction")
    commentsCard.appendChild(commentsInteraction)

    const commentsDelete = document.createElement("img")
    commentsDelete.setAttribute("src", "./assets/icons/SVG/icon-delete.svg")
    commentsDelete.setAttribute("id", `delete-${arrayItem.id}`)
    commentsInteraction.appendChild(commentsDelete)

    const commentsLike = document.createElement("img")
    commentsLike.setAttribute("src", "./assets/icons/SVG/icon-like.svg")
    commentsLike.setAttribute("id", `like-${arrayItem.id}`)
    commentsLike.setAttribute("class", "comments__like")
    commentsInteraction.appendChild(commentsLike)

    const commentsDivider = document.createElement("div");
    commentsDivider.setAttribute("class", "comments__divider");
    commentsDivider.setAttribute("id", `divider-${arrayItem.id}`)
    commentsDisplay.appendChild(commentsDivider);

    // add event listener for deleting comments
    const deleteById = document.getElementById(`delete-${arrayItem.id}`)
    deleteById.addEventListener("click", () => {
        // delete from DOM
        const deleteComment = document.getElementById(`comment-${arrayItem.id}`)
        const deleteDivider = document.getElementById(`divider-${arrayItem.id}`)
        deleteComment.remove()
        deleteDivider.remove()

        // delete from API
        const itemToDelete = `/${arrayItem.id}`
        const deleteRequest = axios.delete(`${baseURL}${commentsEndpoint}${itemToDelete}${apiKey}`)
        deleteRequest
            .then(response => {
                // not needed but nice to see API response
                console.log(response)
                console.log(`Deleted post with ID ${arrayItem.id}`);
            })
    })

    // add event listener for liking comments
    const likeById = document.getElementById(`like-${arrayItem.id}`)
    likeById.addEventListener("click", () => {
        // update the DOM
        const likedComment = document.getElementById(`like-${arrayItem.id}`)
        likedComment.classList.add("comments__like--selected")

        // update the API
        const itemToUpdate = `/${arrayItem.id}/like`
        const updateRequest = axios.put(`${baseURL}${commentsEndpoint}${itemToUpdate}${apiKey}`)
        updateRequest
            .then(response => {
                // not needed but nice to see API response and to see if the like count went up
                console.log(response)
                console.log(`Updated post with ID ${arrayItem.id}`);
            })
    })
}

// function that loops through the array of comments and displays each comment object
const displayAllComments = (commentsArray) => {
    commentsArray.forEach((comment) => {
        displayComment(comment)
    })
}

// requests comments from comments endpoint and displays all comments
const getAllComments = () => {
    const commentsRequest = axios.get(`${baseURL}${commentsEndpoint}${apiKey}`)
    commentsRequest.then((comments) => {
        const commentsArray = []
        comments.data.forEach(comment => {
            commentsArray.push(comment)
        })
        // array needs sorting since data from API isn't sorted
        commentsArray.sort((y, x) => {
            return x.timestamp - y.timestamp;
        })
        displayAllComments(commentsArray);

    })
}

// add a form submit listener
const addSubmitFormListener = () => {
    const submitForm = document.querySelector(".comments__form")
    submitForm.addEventListener("submit", (event) => {
        // prevents page refresh on submit
        event.preventDefault();
        // grabs name and comment from the form
        const nameInput = document.getElementById("input-name");
        const commentInput = document.getElementById("input-comment");
        // check for blank form
        if (nameInput.value == "" & commentInput.value == "") {
            nameInput.required = "true";
            nameInput.setAttribute("placeholder", "Please enter your name.");
            commentInput.required = "true";
            commentInput.setAttribute("placeholder", "Please enter your comment.");
            return;
        } else if (nameInput.value == "") {
            nameInput.required = "true";
            nameInput.setAttribute("placeholder", "Please enter your name.");
            return;
        } else if (commentInput.value == "") {
            commentInput.required = "true";
            commentInput.setAttribute("placeholder", "Please enter your comment.");
            return;
        } else {
            nameInput.removeAttribute("required");
            nameInput.setAttribute("placeholder", "Enter your name");
            commentInput.removeAttribute("required");
            commentInput.setAttribute("placeholder", "Add a new comment");
        }
        // create object with new comment data to post to comments API
        const newComment = {
            name: nameInput.value,
            comment: commentInput.value
        }
        // create function to post new comment to comments API
        const commentsPost = (newComment) => {
            axios.post(`${baseURL}${commentsEndpoint}${apiKey}`, newComment)
                .then(() => {
                    // clears all comments
                    commentsDisplay.innerText = "";
                    // displays all comments including new one
                    getAllComments();
                    // resets the form
                    submitForm.reset();
                })
        }
        // post new comment to API
        commentsPost(newComment)
    })
}

// call functions for the page
getAllComments()
addSubmitFormListener()