const questionRouter = require('express').Router();
const { Question } = require('../../db/models');

questionRouter.get('/music', async (req, res) => {
    try {
        const resp = await Question.findAll({
            where: {
                categoryId: 1
            }
        })
        res.json(resp);
    } catch (e) {
        console.error(e)
        res.status(500).send({error: e.message})
    }
})

questionRouter.get('/sport', async (req, res) => {
    try {
        const resp = await Question.findAll({
            where: {
                categoryId: 2
            }
        })
        res.json(resp);
    } catch (e) {
        console.error(e)
        res.status(500).send({error: e})
    }
})

questionRouter.get('/science', async (req, res) => {
    try {
        const resp = await Question.findAll({
            where: {
                categoryId: 3
            }
        })
        res.json(resp);
    } catch (e) {
        console.error(e)
        res.status(500).send({error: e})
    }
})

questionRouter.get('/react', async (req, res) => {
    try {
        const resp = await Question.findAll({
            where: {
                categoryId: 4
            }
        })
        res.json(resp);
    } catch (e) {
        console.error(e)
        res.status(500).send({error: e})
    }
})

questionRouter.get('/javascript', async (req, res) => {
    try {
        const resp = await Question.findAll({
            where: {
                categoryId: 5
            }
        })
        res.json(resp);
    } catch (e) {
        console.error(e)
        res.status(500).send({error: e})
    }
})

module.exports = questionRouter
