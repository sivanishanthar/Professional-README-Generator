// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    // Get the project title
    {
        type: 'input',
        name: 'title',
        message: 'Enter your title of your project: ',
    },

    // Get the description
    {
        type: 'input',
        name: 'description',
        message: 'Enter description for your project: ',
    },

    //Get installation guide
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation guide for your project: ',
    },

    //Get usage of the project
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage of your project: ',
    },

    //Get the license 
    {
        type: 'list',
        name: 'license',
        message: 'Select the license from the list: ',
        choices: ['Apache 2.0 License',
            'Boost Software License 1.0',
            'BSD 3-Clause License',
            'BSD 2-Clause License',
            'CC0',
            'Eclipse Public License 1.0',
            'GNU',
            'The Organization for Ethical Source',
            'IBM Public License Version 1.0',
            'ISC License (ISC)',
            'The MIT License',
            'Mozilla Public License 2.0',
            'Open Data Commons',
            'Perl',
            'SIL',
            'Unlicense',
            'Zlib]'],
    },

    //Get contributor
    {
        type: 'input',
        name: 'contributor',
        message: 'Enter the contributors for your project: ',
    },

    //Get tests
    {
        type: 'input',
        name: 'tests',
        message: 'Enter the tests guide for your project: '
    },

    //Get email
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email: '
    },

    //Get GitHub
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username: ',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data), (err) => err ? console.error(err) : console.log('Success!');
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        
    }) 
}

// Function call to initialize app
init();
