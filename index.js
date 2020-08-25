
console.log('Greetings from Node and index.js! 🙃');
// nunjucks   
const nunjucks = require('nunjucks');

// We need Express to act as our application server
const express = require('express');

// Let's test that Express is working as expected:
// Let's create a new App
const app = express();
nunjucks.configure({
  autoescape: true,
  express: app
});
// We want express to run on this port
const port = 3000;

app.listen(port, () => {
  console.log(`app is running here: http://localhost:${port}`);
});
// st the routing rules 
app.get('/', (request, response) => {
  response.render('./views/index.html.njk');
});

