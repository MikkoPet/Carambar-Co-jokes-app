const express = require('express');
const app = express();

const path = require('path');
const jokeRoutes = require('./routes/jokeRoutes');
/* const setUpSwagger = require('./swagger/swagger');
 */
const PORT = process.env.PORT || 3000;

//config
setUpSwagger(app);

//middleware
app.use(express.json());
/* app.use(require('cors'));
 */

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.use('/api/jokes', jokeRoutes);

app.use(require('express').static('./'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});