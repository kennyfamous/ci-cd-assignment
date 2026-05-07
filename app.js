const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
res.send(`
<h1>CI/CD Assignment-Deployment succesfull-Kenny-Famous</h1>
<p>Website deployed successfully using GitHub Actions and AWS EC2.</p>
`);
});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});