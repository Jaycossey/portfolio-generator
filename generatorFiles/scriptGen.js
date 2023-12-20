// functions to handle js file writing (need to create a test template for this, planning is important)

const scriptGen = (data) => {
    // TEST FUNCTIONALITY AND ASSIGN VARIABLES HERE!!!!
    return `
console.log("Hello, World!\n", ${data});
    `;
};

module.exports = scriptGen;