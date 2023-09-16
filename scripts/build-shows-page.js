const baseURL = "https://project-1-api.herokuapp.com"
const apiKey = "?api_key=d7303870-e255-47ec-b639-d4e3097cac65"

const showsEndpoint = "/showdates"

const main = document.querySelector("main");
const showsTable = document.createElement("div");

// creates the shows section, title, and table header container
const createShowsLayout = () => {

    const showsSection = document.createElement("section");
    showsSection.setAttribute("class", "shows");
    main.appendChild(showsSection);

    const showsTitle = document.createElement("h2");
    showsTitle.setAttribute("class", "shows__title");
    showsTitle.innerText = "Shows";
    showsSection.appendChild(showsTitle);

    showsTable.setAttribute("class", "shows__table");
    showsSection.appendChild(showsTable);

    const showsHeaderContainer = document.createElement("div");
    showsHeaderContainer.setAttribute("class", "shows__table-header-container");
    showsTable.appendChild(showsHeaderContainer);

    // loop that creates all the table headers inside table header container
    for (let i = 0; i < 3; i++) {
        const showsTableHeader = document.createElement("h3");
        showsTableHeader.setAttribute("class", "shows__table-header");
        switch (i) {
            case 0:
                showsTableHeader.classList.add("shows__table-header--date");
                showsTableHeader.innerText = "DATE";
                break;
            case 1:
                showsTableHeader.innerText = "VENUE";
                break;
            case 2:
                showsTableHeader.innerText = "LOCATION";
                break;
            default:
                break;
        }
        showsHeaderContainer.appendChild(showsTableHeader);
    }
}
const displayShow = (show) => {
    const showsCard = document.createElement("div");
    showsCard.setAttribute("class", "shows__card");
    showsTable.appendChild(showsCard);

    // loop that creates all the card-headers and card-text
    for (let i = 0; i < 3; i++) {
        const showsCardHeader = document.createElement("p");
        showsCardHeader.setAttribute("class", "shows__card-header");
        const showsCardText = document.createElement("p");
        showsCardText.setAttribute("class", "shows__card-text");
        switch (i) {
            case 0:
                showsCardHeader.innerText = "DATE";
                showsCardText.classList.add("shows__card-text--bold");
                const timestamp = show.date;
                const showTimestamp = new Date(timestamp);
                const year = showTimestamp.getFullYear();
                const month = showTimestamp.getMonth() + 1;
                const day = showTimestamp.getDate();
                const formattedDate = `${month}/${day}/${year}`
                showsCardText.innerText = formattedDate;
                break;
            case 1:
                showsCardHeader.innerText = "VENUE";
                showsCardText.innerText = show.place;
                break;
            case 2:
                showsCardHeader.innerText = "LOCATION";
                showsCardText.innerText = show.location;
                break;
            default:
                break;
        }
        showsCard.appendChild(showsCardHeader);
        showsCard.appendChild(showsCardText);
    }

    // adds a button to the shows card
    const showsButton = document.createElement("button");
    showsButton.setAttribute("class", "shows__button");
    showsButton.innerText = "BUY TICKETS";
    showsCard.appendChild(showsButton);

    //adds a divider to the shows table
    const showsDivider = document.createElement("div");
    showsDivider.setAttribute("class", "shows__divider")
    showsTable.appendChild(showsDivider);

    const showsDividerMobile = document.createElement("div");
    showsDividerMobile.setAttribute("class", "shows__divider--mobile")
    showsTable.appendChild(showsDividerMobile);
}

// creates all the show cards which are separated by a divider
const displayAllShows = (showsArray) => {
    showsArray.forEach((show) => {
        displayShow(show)
    })
}

// function that adds a click listener to shows card to apply  and track "selected show"
const addSelectShowListener = () => {
    // selects all shows__card elements
    const showsCardsElements = document.querySelectorAll(".shows__card");

    // create a variable to keep track of selected card
    let selectedCard = null;

    // adds listener that removes previously selected class, adds currently selected, updates tracking of selected card
    for (let i = 0; i < showsCardsElements.length; i++) {
        showsCardsElements[i].addEventListener("click", () => {
            if (selectedCard !== null) {
                selectedCard.classList.remove("shows__card--selected"); // Remove the class from the previously selected card.
            }
            showsCardsElements[i].classList.add("shows__card--selected");
            selectedCard = showsCardsElements[i]; // Update the selected card.
        });
    }
}

const getAllShows = () => {
    const showsArray = []
    const showsRequest = axios.get(`${baseURL}${showsEndpoint}${apiKey}`)
    showsRequest.then((shows) => {
        shows.data.forEach(show => {
            showsArray.push(show)
        })

        displayAllShows(showsArray)
        addSelectShowListener()
    })
}

createShowsLayout()
getAllShows()