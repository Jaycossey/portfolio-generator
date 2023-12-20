// array to store color options for the user.
const colorArray = [
    "Green",
    "Red",
    "Purple",
    "Black",
    "White",
    "Yellow",
    "Blue"
];

// prompt storage
const promptArray = [
    {
        // USERNAME
        type: "input",
        name: "userName",
        message: "Welcome, to get started in creating your portfolio presentation site, please follow the instructions.\nEnter your name:\n"
    },
    {
        // ABOUT ME SECTION
        type: "input",
        name: "aboutMe",
        message: "Enter your 'about me' description:\n"
    },
    {
        // JOB TITLE / PROFESSION
        type: "input",
        name: "jobTitle",
        message: "Enter your current Profession / Job Title:\n"
    },
    {
        // PROFILE PHOTO
        type: "input",
        name: "profilePhoto",
        message: "Enter the relative (to THIS directory) path of the profile photo you wish to use:\n"
    },
    {
        // COLOR SCHEME
        type: "list",
        name: "colorScheme",
        message: "Enter your color scheme by choosing 3 of the following colors:\n",
        choices: colorArray
    },
    {
        // EMAIL ADDRESS
        type: "input",
        name: "email",
        message: "Enter your email address:\n"
    },
    {
        // GITHUB PROFILE 
        type: "input",
        name: "github",
        message: "Enter your GitHub profile url:\n"
    },
    {
        // LINKED IN PROFILE
        type: "input",
        name: "linkedIn",
        message: "Enter your LinkedIn profile url:\n"
    },
    {
        // PRIMARY PROJECT NAME
        type: "input",
        name: "primaryName",
        message: "Enter your primary project name:\n"
    },
    {
        // PROJECT DESCRIPTION
        type: "input",
        name: "primaryDescription",
        message: "Enter a short description of your primary project:\n"
    },
    {
        // PRIMARY SCREENSHOT
        type: "input",
        name: "primaryScreengrab",
        message: "Enter the image path (relative to THIS directory) of the screenshot for your primary project:\n"
    },
    {
        // PRIMARY GITHUB REPO / DEPLOYED LINK
        type: "input",
        name: "primaryUrl",
        message: "Enter the URL of your primary projects GitHub repo:\n"
    },
    {
        // SEC PROJECT NAME
        type: "input",
        name: "secondaryName",
        message: "Enter your secondary project name:\n"
    },
    {
        // PROJECT DESCRIPTION
        type: "input",
        name: "secondaryDescription",
        message: "Enter a short description of your secondary project:\n"
    },
    {
        // TERT SCREENSHOT
        type: "input",
        name: "secondaryScreengrab",
        message: "Enter the image path (relative to THIS directory) of the screenshot for your secondary project:\n"
    },
    {
        // TERT GITHUB REPO / DEPLOYED LINK
        type: "input",
        name: "secondaryUrl",
        message: "Enter the URL of your secondary project GitHub repo:\n"
    },
    {
        // TERT PROJECT NAME
        type: "input",
        name: "tertiaryName",
        message: "Enter your tertiary project name:\n"
    },
    {
        // PROJECT DESCRIPTION
        type: "input",
        name: "tertiaryDescription",
        message: "Enter a short description of your tertiary project:\n"
    },
    {
        // TERT SCREENSHOT
        type: "input",
        name: "tertiaryScreengrab",
        message: "Enter the image path (relative to THIS directory) of the screenshot for your tertiary project:\n"
    },
    {
        //  TERTGITHUB REPO / DEPLOYED LINK
        type: "input",
        name: "tertiaryUrl",
        message: "Enter the URL of your tertiary project GitHub repo:\n"
    },
    {
        // FURTHER INFORMATION
        type: "input",
        name: "otherInformation",
        message: "Enter why you chose to showcase these projects, (eg:I chose these projects because...):\n"
    }
];

// export prompts
module.exports = (promptArray, colorArray);