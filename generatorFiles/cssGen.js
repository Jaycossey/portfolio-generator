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
    --bg-color: rgba(${bgColor}, 0.1);
    --card-color: rgba(${bgColor}, 0.6);
    --border-color: rgba(${bgColor}, 0.4);
    --font-color: rgba(${bgColor}, 1);
}

body {
    border-size: border-box;
    text-align: center;
    background-color: var(--bg-color);
    color: var(--font-color);
    padding: 10px;
    font-family: monospace;
}

/* PROFILE STYLES --------------------------------- */

.aboutCont {
    border: 2px outset var(--border-color);
    border-radius: 10px;
    height: 200px;
    padding: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.aboutCont > img {
    content: "A";
    height: 80px;
    width: 80px;
    border: 2px solid var(--border-color);
    background-color: var(--bg-color);
    border-radius: 50%;
}

div {
    border-radius: 10px;
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
    margin: 10px;
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
    padding: 5px;
}

.title {
    height: 40px;
    border-radius: 10px;
    padding-top: 10px;
    font-size: 1.2rem;
}

.image {
    border: 2px solid var(--border-color);
    height: 50%;
    margin: 5px;
    border-radius: 15px;
}

.text {
    padding: 2px;
    font-size: 1rem;
}

.url {
    padding: 2px;
}

a:hover {
    cursor: pointer;
    transform: scale(105%);
    transition-duration: 0.5s;
}

a:active {
    transform: scale(95%);
}

a:visited {
    color: blue;
} 


/* FOOTER STYLES ----------------------------------- */
.footer {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.iconAnchor {
    margin: 50px;
}

.iconAnchor > i {
    font-size: 3rem;
}

/* MEDIA QUERIES ----------------------------------- */
@media (width > 320px) and (width < 1000px) {
    .portfolio {
        grid-template-areas: 
            'main'
            'second'
            'third';
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 1fr 1fr;
    }
} 
    `
}

module.exports = cssGen;