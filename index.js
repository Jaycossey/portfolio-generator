// GLOBALS ----------------------------------------------------------------------------------

// dependency references
const inquirer = require('inquirer');
const fs = require('fs');
// custom imports
const promptData = require('./promptData');
const testData = require('./testData');
const generateHTML = require('./generatorFiles/htmlGen');

// assign answers to object
const assignData = (data) => {
    // console.log(data);
    const htmlStruct = generateHTML(data.userName, data.jobTitle);
    fs.writeFile(`${data.userName}.html`, htmlStruct, (err) => {
        if(!err) {
            console.log("SUCCESS!, Your files are in the local directory");
        } else {
            console.error(err);
        }
    })
};

// prompt user for data
const runPrompts = () => {
    inquirer
        .prompt(promptData)
        .then((data) => {
            assignData(data);
        })
        .catch((err) => {
            console.error(err);
        });
};

// runPrompts();
assignData(testData);