// GLOBALS ---------------------------------------
const ROOT_DIV = document.getElementById('root');

// PROFILE CONTAINER 
const profile = () => {
    // This section needs a container to handle an intro section
    // I need a parent div,
    // H1 with name and job title
    // p element with the about me text 
    // p element with other information on why I chose these
    // projects
    //
    // Use standard DOM manip, this section will be changing very
    // little in generation, ie - less data to handle and linear

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
console.log("Test Linked");
document.onload = profile();


// PROJECT CONTAINER >
const createDiv = (type) => {
    const div = document.createElement('div');
    div.className = type;

    return div;
}

const generateCard = (parent) => {
    const card = createDiv('card');

    const titleDiv = createDiv('title');
    const screenGrabDiv = createDiv('image');
    const textDiv = createDiv('text');
    const urlDiv = createDiv('url');

    card.append(titleDiv, screenGrabDiv, textDiv, urlDiv);

    parent.append(card);
}

const createProfile = () => {
    const sectionDiv = createDiv('section');
    
    for (let i = 0; i < 3; i++) {
        const card = generateCard(sectionDiv);
        sectionDiv.append(card);
    }

    ROOT_DIV.append(sectionDiv);
}

document.onload = createProfile();

// CREATE CARDS, USE DOM FOR ALL, the MVP is a portfolio site, 
// not anything too fancy within, the previews wont be anything 
// ott

const otherInfo = () => {

}