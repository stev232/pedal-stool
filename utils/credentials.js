const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Define a route that renders the Handlebars template
app.get('/', (req, res) => {
  const context = {
    isLoggedIn: req.session.isLoggedIn, // or however you're storing the user's login status
    username: req.session.username // or any other user data you want to display
  };
  res.render('home', context);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});