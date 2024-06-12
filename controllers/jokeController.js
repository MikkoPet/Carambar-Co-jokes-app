const { Sequelize, Joke } = require('../models');

const getAllJokes = async(req, res) => {
    try {
        const jokes = await Joke.findAll();
        res.json(jokes);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const getRandomJoke = async (req, res) => {
    try {
        const joke = await Joke.findOne({order: Sequelize.literal('RANDOM()')});
        if (joke) {
            res.json(joke);
        } else {
            res.status(404).json({message: 'Cannot find any jokes'})
        }
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const getJokeById = async (req, res) => {
    try {
        const { id } = req.params;
        const joke = await Joke.findByPk(id);

        if (joke) {
            res.json(joke);
        } else {
            res.status(404).json({message: 'Cannot find joke at the specified ID'});
        }
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
        }
};

const createNewJoke = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const newJoke = await Joke.create({ question, answer });
        res.status(201).json(newJoke);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
};

module.exports = {
    getAllJokes,
    getRandomJoke,
    getJokeById,
    createNewJoke,
};