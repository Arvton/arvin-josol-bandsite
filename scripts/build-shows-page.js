const showsArray = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },

    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },

    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },

    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },

    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },

    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
]

const main = document.querySelector("main");

const showsSection = document.createElement("section");
showsSection.setAttribute("class", "shows");
main.appendChild(showsSection);

const showsTitle = document.createElement("h2");
showsTitle.setAttribute("class", "shows__title");
showsTitle.innerText = "Shows";
showsSection.appendChild(showsTitle);

const showsTable = document.createElement("div");
showsTable.setAttribute("class", "shows__table");
showsSection.appendChild(showsTable);

const showsHeaderContainer = document.createElement("div");
showsHeaderContainer.setAttribute("class", "shows__table-header-container");
showsTable.appendChild(showsHeaderContainer);

for (let i = 0; i < 3; i++) {
    const showsTableHeader = document.createElement("h3");
    showsTableHeader.setAttribute("class", "shows__table-header");
    switch (i) {
        case 0:
            showsTableHeader.setAttribute("class", "shows__table-header shows__table-header--date");
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

for (let i = 0; i < showsArray.length; i++) {
    const showsCard = document.createElement("div");
    showsCard.setAttribute("class", "shows__card");
    showsTable.appendChild(showsCard);

    const showsArrayObject = showsArray[i];
    for (let i = 0; i < 3; i++) {
        const showsCardHeader = document.createElement("p");
        showsCardHeader.setAttribute("class", "shows__card-header");
        const showsCardText = document.createElement("p");
        showsCardText.setAttribute("class", "shows__card-text");
        switch (i) {
            case 0:
                showsCardHeader.innerText = "DATE";
                showsCardText.setAttribute("class", "shows__card-text shows__card-text--bold");
                showsCardText.innerText = showsArrayObject.date;
                break;
            case 1:
                showsCardHeader.innerText = "VENUE";
                showsCardText.innerText = showsArrayObject.venue;
                break;
            case 2:
                showsCardHeader.innerText = "LOCATION";
                showsCardText.innerText = showsArrayObject.location;
                break;
            default:
                break;
        }
        showsCard.appendChild(showsCardHeader);
        showsCard.appendChild(showsCardText);
    }

    const showsButton = document.createElement("button");
    showsButton.setAttribute("class", "shows__button");
    showsButton.innerText = "BUY TICKETS";
    showsCard.appendChild(showsButton);

    const showsDivider = document.createElement("div");
    showsDivider.setAttribute("class", "shows__divider")
    showsTable.appendChild(showsDivider);

    const showsDividerMobile = document.createElement("div");
    showsDividerMobile.setAttribute("class", "shows__divider--mobile")
    showsTable.appendChild(showsDividerMobile);
}
