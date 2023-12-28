
// GLOBALS --------------------------------------------------
const ROOT_DIV = document.getElementById('root');
const CONTACT_LINKS = ["https://github.com/Jaycossey", "https://www.linkedin.com/in/ian-j-scott/", "jaycossey@live.com"];
const PROJECT_TITLES = ["README Generator", "Portfolio Generator", "P&L Tunes"];
const PROJECT_IMAGES = [];
const PROJECT_DESCRIPTIONS = ["JS program to help automate README generation.", "Node project to automate portfolio generation, showcasing a total of 3 projects for employers.", "Website for a music review company"];
const PROJECT_LINKS = ["https://github.com/Jaycossey/readme-generator", "https://github.com/Jaycossey/portfolio-generator", "https://github.com/Jaycossey/pandl-reviews"];

// PROFILE CONTAINER 
const profile = () => {
    const parentDiv = document.createElement('div');
    parentDiv.className = "aboutCont";

    const nameJobEl = document.createElement('h1');
    nameJobEl.className = "titleName";
    nameJobEl.innerText = "Ian - JavaScript Developer"; // THIS WILL NEED CHANGE

    const profilePic = document.createElement('img');
    profilePic.classList = "profileImg";
    profilePic.alt = "Profile Picture of Ian"; // THIS WILL NEED CHANGE

    const aboutText = document.createElement('p');
    aboutText.innerText = "This is generic test data"; // THIS WILL NEED CHANGE

    const otherInfo = document.createElement('p');
    otherInfo.innerText = "This is test data, I want to speed up testing of this current project to aid my development.";

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
    titleDiv.innerText = PROJECT_TITLES[rank];

    const screenGrabDiv = createDiv('image');
    // NEED TO ADD IN IMAGE TEMPLATES HERE ---------------!!!!!!
    const textDiv = createDiv('text');
    textDiv.innerText = PROJECT_DESCRIPTIONS[rank];
    
    const urlDiv = createDiv('url');
    const anchor = document.createElement('a');
    anchor.innerText = PROJECT_LINKS[rank];
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
    let i = 0;
    const footer = createDiv('footer');

    const iconArr = ['<i class="fa-brands fa-github"></i>', '<i class="fa-brands fa-linkedin"></i>', '<i class="fa-solid fa-envelope"></i>'];

    iconArr.forEach((element) => {
        const aEl = document.createElement('a');
        aEl.classList = "iconAnchor";
        aEl.innerHTML = element;
        aEl.href = CONTACT_LINKS[i];
        aEl.target = "_blank";
        aEl.rel = "noopener noreferrer";
        aEl.setAttribute('crossorigin', 'anonymous');
        footer.append(aEl);
        i++;
    });

    ROOT_DIV.append(footer);
}


profile();
createPortfolio();
contact();
        
    