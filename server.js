const express = require('express');
const app = express();

const path = require('path');
const jokeRoutes = require('./routes/jokeRoutes');
const setUpSwagger = require('./swagger');

const PORT = process.env.PORT || 3000;

//config
setUpSwagger(app);

//middleware
app.use(express.json());
const cors = require('cors');
app.use(cors());
const corsOptions = {
    origin: 'http://localhost:3000/',
    'Access-Control-Allow-Origin': '*',
    optionsSuccessStatus: 200
    }


app.get('/', cors(corsOptions), (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.use('/api/jokes', jokeRoutes);

app.use(require('express').static('./'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});