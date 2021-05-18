const express = require('express');
require('dotenv').config();
const dbSetup = require('./database/setup');
const bookRoutes = require('./routes/bookRoutes');
const { PORT } = process.env;

const app = express();
app.use(express.json({ extended: false}));
app.use(express.urlencoded({ extended: false}));

app.use(bookRoutes);
dbSetup();

const port = process.env.PORT || PORT;
app.listen(port,() => console.log(`app running on port ${port}`));