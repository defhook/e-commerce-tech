const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require("./config/connection"); 

const app = express();
const PORT = process.env.PORT || 3001;
console.log("Successful Connection"); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);
//console.log("2"); 

// sync sequelize models to the database, then turn on the server

// sequelize.sync({force: false}, () => {
//   console.log("Connect the db sucessfully "); 
// console.log("3"); 

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
// })

