const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors(
  {
    origin:[""],
    methods:["POST","GET"],
    credentials:true
  }
));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/clicked-data', require('./routes/clickedData'));
app.use('/api/data',require('./routes/data'));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
