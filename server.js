const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

//routes
app.get('/', (req, res) => {
  res.send('Hello from earth');
});

app.get('/blog', (req, res) => {
  res.send('Hello blog yoyoyo');
});

mongoose
  .connect(
    'mongodb+srv://sam:Yo12345@cluster0.yo98g58.mongodb.net/food?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(3000, () => {
      console.log(`Node API is running on port 3000`);
    });
    console.log('connected to DB');
  })
  .catch((error) => {
    console.log(error);
  });
