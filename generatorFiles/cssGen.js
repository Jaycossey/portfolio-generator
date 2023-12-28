// assign current hex code color -- NEEDS A RETHINK!!!! HAVE THIS SET BACKGROUND COLOR THEN USE CARDS TO HANDLE THE REMAINING STYLES
const assignHex = (color) => {
    // designate hex codes (digits only) 
    switch(color) {
        case 'Green':
            return '65, 174, 16';
        case 'Red':
            return '130, 13, 13';
        case 'Purple':
            return '144, 16, 174';
        case 'Black':
            return '0, 0, 0';
        case 'White':
            return '255, 255, 255';
        case 'Yellow':
            return '229, 176, 16';
        case 'Blue':
            return '17, 159, 204';
        default:
            return '173, 173, 173';
    }
}

const cssGen = (color) => {
    // handle custom color schemes with switch statement
    const bgColor = assignHex(color);

    return `
:root {
    --bg-color: rgba(${bgColor}, 1);
    --card-color: rgba(${bgColor}, 0.8);
    --border-color: rgba(${bgColor}, 0.6);
    --font-color: rgba(${bgColor}, 1);
}

body {
    border-size: border-box;
    text-align: center;
    background-color: var(--bg-color);
    color: var(--font-color);
    padding: 50px;
    font-family: monospace;
}

/* PROFILE STYLES --------------------------------- */

.aboutCont {
    border: 8px outset var(--border-color);
    height: 200px;
    padding: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.aboutCont > img {
    content: "\A";
    height: 60px;
    width: 60px;
    border: 6px solid var(--border-color);
    background-color: var(--bg-color);
    border-radius: 50%;
}

div {
    border: 2px solid var(--border-color);
}

.section {
    height: 600px;
    display: grid;
}


/* PORTFOLIO STYLES ------------------------------ */

.portfolio {
    display: grid;
    gap: 20px;
    grid-template-areas: 
        'main main'
        'second third';
    grid-template-rows: 3fr 2fr;
    grid-template-columns: 1fr 1fr;
}

.portfolio > .card:first-child {
    grid-area: main;
    height: 100%;
}

.portfolio > .card:nth-child(2) {
    grid-area: second;
}

.portfolio > .card:nth-child(3) {
    grid-area: third;
}


.card {
    height: 200px;
}

.title {
    height: 40px;
    border-radius: 10px;
}

.image {
    border: 2px solid var(--border-color);
    height: 50%;
    margin: 5px;
    border-radius: 15px;
}

.text {
    font-size: 1rem;
}

.url {

}

a:hover {
    cursor: pointer;
}

a:active {

}

a:visited {

} `
}

module.exports = cssGen;