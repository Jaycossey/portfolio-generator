// functions to handle js file writing (need to create a test template for this, planning is important)

const scriptGen = (data) => {
    const {} = data;
    // TEST FUNCTIONALITY AND ASSIGN VARIABLES HERE!!!!
    return `
// GLOBALS --------------------------------------------------
const ROOT_DIV = document.getElementById('root');
const CONTACT_LINKS = ["${data.github}", "${data.linkedIn}", "${data.email}"];
const PROJECT_TITLES = ["${data.primaryName}", "${data.secondaryName}", "${data.tertiaryName}"];
const PROJECT_DESCRIPTIONS = ["${data.primaryDescription}", "${data.secondaryDescription}", "${data.tertiaryDescription}"];
const PROJECT_LINKS = ["${data.primaryUrl}", "${data.secondaryUrl}", "${data.tertiaryUrl}"];

// IMAGE ARRAY
const PROJECT_IMAGES = ["./images/project1.png", "./images.project2.png", "./images/project3.png"]; // NOTE: Project image pathing is here, edit as needed.

// PROFILE CONTAINER 
const profile = () => {
    const parentDiv = document.createElement('div');
    parentDiv.className = "aboutCont";

    const nameJobEl = document.createElement('h1');
    nameJobEl.className = "titleName";
    nameJobEl.innerText = "${data.userName} - ${data.jobTitle}";

    const profilePic = document.createElement('img');
    profilePic.classList = "profileImg";
    profilePic.backgroundImage = "./images/profile.png";            // NOTE: This is the input for profile photo, rename file to match or edit here. 
    profilePic.alt = "Profile Picture of ${data.userName}";

    const aboutText = document.createElement('p');
    aboutText.innerText = "${data.aboutMe}";

    const otherInfo = document.createElement('p');
    otherInfo.innerText = "${data.otherInformation}";

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
    screenGrabDiv.backgroundImage = PROJECT_IMAGES[rank];

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
        
    `
};

module.exports = scriptGen;