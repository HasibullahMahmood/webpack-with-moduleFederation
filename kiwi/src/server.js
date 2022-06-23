const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/static', express.static(path.resolve(__dirname, '..', 'dist')));

app.get('/', (req, res, next) => {
	const pathToHtml = path.resolve(__dirname, '..', 'dist', 'kiwi.html');
	const htmlContent = fs.readFileSync(pathToHtml, 'utf8');
	res.send(htmlContent);
});

const PORT = 9002;
app.listen(PORT, () => {
	console.log(`The server is successfully running on http://localhost:${PORT}`);
});
