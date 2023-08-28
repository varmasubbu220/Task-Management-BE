const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
//database connection
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to database");
});

const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
