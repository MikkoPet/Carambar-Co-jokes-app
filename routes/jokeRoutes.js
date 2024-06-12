const express = require('express');

const {
    getAllJokes,
    getRandomJoke,
    getJokeById,
    createNewJoke,
} = require('../controllers/jokeController');

const router = express.Router();

router.get('/', getAllJokes);
router.get('/random', getRandomJoke);
router.get('/:id', getJokeById);
router.post('/', createNewJoke);

module.exports = router;