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
    --bg-color: #${bgColor};
}

body {
    background-color: var(--bg-color);
    color: var(--black);
}

    `;
}

module.exports = cssGen;