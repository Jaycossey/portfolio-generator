/*
 *  prompts: "Enter Your Name:"
            "Enter profile photo"
 *          "Enter your 'about me' section"
 *          "Enter your 3 favorite Hex Color Codes" // prompt this for each color code in descending order of favorites
 *          "Enter your github url"
 *          "Enter your linked in"
 *          "Enter your email"
 *          "Enter your Primary Project Name"
 *          "Primary project description"
 *          "Primary project screenshot url"
 *          "Primary project repo url"
 *          "Enter your Secondary Project Name"
 *          "Secondary project description"
 *          "Secondary project screenshot url"
 *          "Secondary project repo url"
 *          "Enter your Tertiary Project Name"
 *          "Tertiary project description"
 *          "Tertiary project screenshot url"
 *          "Tertiary project repo url"
*/ 

const colorArray = [
    // how do I want the colors to be chosen? I could create a list of options, then choose checkbox
    // Or I could take a single hex code input then write an algorithm to automatically choose 3 shades of the chosen color
    // Or write an algorithm that takes a single hex code and then chooses complimentary colors from that.

    // Would be simpler to present a list of choices of various colors and have an algorithm to handle the shades 
    // for the color scheme.
];

const promptArray = [
    {
        type: "input",
        name: "userName",
        message: "Welcome, to get started in creating your portfolio presentation site, please follow the instructions.\nEnter your name:\n"
    },
    {
        type: "input",
        name: "aboutMe",
        message: "Enter your 'about me' description:\n"
    },
    {
        type: "input",
        name: "profilePhoto",
        message: "Enter the relative (to THIS directory) path of the profile photo you wish to use:\n"
    },
    // {
    //     type: "checkbox",
    //     name: "colorScheme",
    //     message: "Enter your color scheme by choosing 3 of the following colors:\n",
    //     choices: colorArray
    // },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:\n"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub profile url:\n"
    },
    {
        type: "input",
        name: "linkedIn",
        message: "Enter your LinkedIn profile url:\n"
    },
    {
        type: "input",
        name: "primaryName",
        message: "Enter your primary project name:\n"
    },
    {
        type: "input",
        name: "primaryDescription",
        message: "Enter a short description of your primary project:\n"
    },
    {
        type: "input",
        name: "primaryScreengrab",
        message: "Enter the image path (relative to THIS directory) of the screenshot for your primary project:\n"
    },
    {
        type: "input",
        name: "primaryUrl",
        message: "Enter the URL of your primary projects GitHub repo:\n"
    },
    {
        type: "input",
        name: "secondaryName",
        message: "Enter your secondary project name:\n"
    },
    {
        type: "input",
        name: "secondaryDescription",
        message: "Enter a short description of your secondary project:\n"
    },
    {
        type: "input",
        name: "secondaryScreengrab",
        message: "Enter the image path (relative to THIS directory) of the screenshot for your secondary project:\n"
    },
    {
        type: "input",
        name: "secondaryUrl",
        message: "Enter the URL of your secondary project GitHub repo:\n"
    },
    {
        type: "input",
        name: "tertiaryName",
        message: "Enter your tertiary project name:\n"
    },
    {
        type: "input",
        name: "tertiaryDescription",
        message: "Enter a short description of your tertiary project:\n"
    },
    {
        type: "input",
        name: "tertiaryScreengrab",
        message: "Enter the image path (relative to THIS directory) of the screenshot for your tertiary project:\n"
    },
    {
        type: "input",
        name: "tertiaryUrl",
        message: "Enter the URL of your tertiary project GitHub repo:\n"
    },
    {
        type: "input",
        name: "otherInformation",
        message: "Enter why you chose to showcase these projects, (eg:I chose these projects because...):\n"
    }
];

module.exports = promptArray;