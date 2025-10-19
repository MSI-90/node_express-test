require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(typeof PORT === 'string' ? parseInt(PORT) : PORT, (req, res) => {
    console.log(`Server is running on ${PORT}`);
});
