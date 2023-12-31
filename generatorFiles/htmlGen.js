const generateHTML = (name, job) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name} - ${job}</title>

    <!-- Custom Styles -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root"></div>

    <!-- Font Awesome Script -->
    <script src="https://kit.fontawesome.com/77379d9051.js" crossorigin="anonymous"></script>
    
    <!-- Custom Scripts -->
    <script src="scripts.js"></script>
</body>
</html>    
    `
};


module.exports = generateHTML;