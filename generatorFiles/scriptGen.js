// functions to handle js file writing (need to create a test template for this, planning is important)

const scriptGen = (data) => {
    const {} = data;
    // TEST FUNCTIONALITY AND ASSIGN VARIABLES HERE!!!!
    return `
console.log("Hello, ${data.userName}");
    `
};

module.exports = scriptGen;