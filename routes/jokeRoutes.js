const express = require('express');

const {
    getAllJokes,
    getRandomJoke,
    getJokeById,
    createNewJoke,
} = require('../controllers/jokeController');

const router = express.Router();