require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(typeof PORT === 'string' ? parseInt(PORT) : PORT, (req, res) => {
    console.log(`Server is running on ${PORT}`);
});
