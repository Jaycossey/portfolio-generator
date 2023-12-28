

// GLOBALS --------------------------------------------------
const ROOT_DIV = document.getElementById('root');

// PROFILE CONTAINER 
const profile = () => {
    const parentDiv = document.createElement('div');
    parentDiv.className = "aboutCont";

    const nameJobEl = document.createElement('h1');
    nameJobEl.className = "titleName";
    nameJobEl.innerText = "Ian - Software Developer"; // THIS WILL NEED CHANGE

    const profilePic = document.createElement('img');
    profilePic.classList = "profileImg";
    profilePic.alt = "Profile Picture of <name></name>"; // THIS WILL NEED CHANGE

    const aboutText = document.createElement('p');
    aboutText.innerText = "Example Inner Text, change when generating" // THIS WILL NEED CHANGE

    parentDiv.append(nameJobEl, profilePic, aboutText);

    ROOT_DIV.append(parentDiv);
}


// PROJECT CONTAINER ----------------------------------------
const createDiv = (type) => {
    const div = document.createElement('div');
    div.className = type;

    return div;
}

// card generator
const generateCard = (parent, rank) => {
    const card = createDiv('card');
    card.id = "presentation" + rank;

    const titleDiv = createDiv('title');
    titleDiv.innerText = "PROJECT TITLE";

    const screenGrabDiv = createDiv('image');
    const textDiv = createDiv('text');
    textDiv.innerText = "PROJECT DESCRIPTION GOES HERE!!!!"
    
    const urlDiv = createDiv('url');
    const anchor = document.createElement('a');
    anchor.innerText = "EXAMPLE.URL.COM";
    urlDiv.append(anchor);

    card.append(titleDiv, screenGrabDiv, textDiv, urlDiv);

    parent.append(card);
}

// portfolio creation
const createPortfolio = () => {
    const sectionDiv = createDiv('section');
    sectionDiv.className = "portfolio";

    for (let i = 0; i < 3; i++) {
        generateCard(sectionDiv, i);
    }

    ROOT_DIV.append(sectionDiv);
}



// FOOTER CONTAINER ----------------------------------------
const contact = () => {
    const footer = createDiv('footer');

    const iconArr = ['<i class="fa-brands fa-github"></i>', '<i class="fa-brands fa-linkedin"></i>', '<i class="fa-solid fa-envelope"></i>'];

    iconArr.forEach((element) => {
        const aEl = document.createElement('a');
        aEl.classList = "iconAnchor";
        aEl.innerHTML = element;
        footer.append(aEl);
    });

    ROOT_DIV.append(footer);
}


profile();
createPortfolio();
contact();
    