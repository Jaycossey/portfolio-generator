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

    <!-- Custom Scripts -->
    <script src="scripts.js"></script>
</body>
</html>
    `
};


module.exports = generateHTML;