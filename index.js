// GLOBALS ----------------------------------------------------------------------------------

// dependency references
const inquirer = require('inquirer');
const fs = require('fs');
// custom imports
const promptData = require('./promptData');
const testData = require('./testData');

// assign answers to object
const assignData = (data) => {
    console.log(data);
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