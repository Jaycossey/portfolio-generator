// GLOBALS ----------------------------------------------------------------------------------

// dependency references
const inquirer = require('inquirer');
const fs = require('fs');
// const path = require('path');

// custom imports
const promptData = require('./generatorData/promptData');
const testData = require('./generatorData/testData');
const generateHTML = require('./generatorFiles/htmlGen');
const generateCSS = require('./generatorFiles/cssGen');
const generateScript = require('./generatorFiles/scriptGen');

// FUNCTION DECLARATIONS -------------------------------------------------------------------

// create files
const createFiles = (html, css, script, directory) => {    
    // create directory
    fs.mkdir(`${directory}`, (err) => {
        if (err) {
            // if error then log error
            console.error(err);
            return;
        } else {
            console.log("Directory created");
            // write files
            fs.writeFile(`./${directory}/index.html`, html, (err) => { // THIS HTML FUNCTION RUNS CORRECTLY!!!!!!
                if (!err) {
                    // log success
                    console.log("SUCCESS! Your HTML is written to the new directory!");
                } else {
                    console.log("HTML:", err);
                }
            });
            fs.writeFile(`./${directory}/styles.css`, css, (err) => {
                if (!err) {
                    console.log("SUCCESS! Your CSS is written to the new directory!");
                } else {
                    console.log("CSS:", err);
                }
            });
            fs.writeFile(`./${directory}/scripts.js`, script, (err) => { // THIS SCRIPT GENERATION WORKS CORRECTLY>>>>> NEED TO STRUCTURE IT CORRECTLY AS WELL
                if (!err) {
                    console.log("SUCCESS! Your Script is written to the new directory!");
                } else {
                    console.log("JS:", err);
                }
            });
        }
    })

}

// assign answers to object
const assignData = (data) => {
    console.log("htmlStart");
    // create a html structure
    const htmlStruct = generateHTML(data.userName, data.jobTitle);
    console.log("cssStart");
    // create css structure
    const cssStruct = generateCSS(data.colorScheme);

    console.log("jsStart");
    // create JS structure 
    const jsStruct = generateScript(data);

    console.log("structures created");

    // call filecreation
    createFiles(htmlStruct, cssStruct, jsStruct, data.userName);

    console.log("SUCCESS! ALL FILES CREATED SUCCESSFULLY!");
};

// prompt user for data
const runPrompts = () => {
    // prompt handle
    inquirer
        .prompt(promptData)
        .then((data) => {
            assignData(data);
        })
        // error handling
        .catch((err) => {
            console.error(err);
        });
};

// runPrompts();
assignData(testData);