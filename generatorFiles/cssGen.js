// assign current hex code color -- NEEDS A RETHINK!!!! HAVE THIS SET BACKGROUND COLOR THEN USE CARDS TO HANDLE THE REMAINING STYLES
const assignHex = (color) => {
    // designate hex codes (digits only) 
    switch(color) {
        case 'Green':
            return '088211';
        case 'Red':
            return '922750';
        case 'Purple':
            return '683265';
        case 'Black':
            return '000';
        case 'White':
            return 'FFF';
        case 'Yellow':
            return '939216';
        case 'Blue':
            return '095399';
        default:
            return 'ADADAD';
    }
}

const cssGen = (color) => {
    // handle custom color schemes with switch statement
    const bgColor = assignHex(color);

    return `
    :root {
        --bg-color: ${bgColor};
    }
    
    body {
        border-size: border-box;
        text-align: center;
        background-color: var(--bg-color);
        color: var(--black);
        padding: 50px;
        font-family: monospace;
    }
    
    /* PROFILE STYLES --------------------------------- */
    
    .aboutCont {
        border: 8px outset white;
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
        border: 6px solid green;
        background-color: black;
        border-radius: 50%;
    }
    
    div {
        border: 2px solid red;
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
        /* justify-content: center; */
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
        /* border: 2px solid white; */
    }
    
    .title {
        height: 40px;
        border-radius: 10px;
    }
    
    .image {
        border: 2px solid black;
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