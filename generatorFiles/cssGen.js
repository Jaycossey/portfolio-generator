// setup template for CSS file and styles
// this CSS file, will target all styles 
// the document is structured in a single parent 'root' div
// const colorArray = require('../generatorData/promptData');

// assign current hex code color
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
            return '444444';
        case 'White':
            return '999999';
        case 'Yellow':
            return '939216';
        case 'Blue':
            return '095399';
        default:
            return '999897';
    }
}

// assign various shades of color
const assignShades = (currentHex) => {
    let dupeHex = currentHex;
    const len = dupeHex.length;

    console.log(dupeHex);
    console.log(len);

    /**
     * THIS IS WHERE BUG 1 is, basically dupeHex is a string, so .length should work
     * but the calculations would require type int - write console logs for each step and figure out why this
     * isnt working correctly. 
     */
    // loop through the text
    for (let i = 0; i < len; i += 2) {
        console.log("tick", i);
        console.log(dupeHex[i]);

        if (dupeHex[i] <= 5 && dupeHex[i] >= 0) {
            currentHex[i] -= 2;
            // console.log(dupeHex[i]);
        } else if (dupeHex[i] >= 1 && dupeHex[i] <= 5) {
            dupeHex[i] -= 1;
        } else {
            break;
        }
    }

    const newHex = Number(dupeHex);
    console.log("New dupeHex:", newHex);
    return dupeHex;
    // return newHexcode for each shade
}

// assign color scheme, determine color
const assignScheme = (color) => {
    const currentHex = assignHex(color);

    const scheme = {
        mainColor: currentHex,
        darkShade: assignShades(currentHex),
        midShade: assignShades(this.darkShade),
        lightShade: assignShades(this.midShade)    
    };

    console.log(scheme);
    return scheme;
}

const cssGen = (color) => {
    // handle custom color schemes with switch statement
    const colorScheme = assignScheme(color);

    return `
:root {
    --main-color: #${colorScheme.mainColor};
    --dark-shade: #${colorScheme.darkShade};
    --mid-shade: #${colorScheme.midShade};
    --light-shade: #${colorScheme.lightShade};
}

body {
    background-color: var(--light-shade);
    color: var(--main-color);
}

    `;
}

assignScheme("Green");

module.exports = cssGen;