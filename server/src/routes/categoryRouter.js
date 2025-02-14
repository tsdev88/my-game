const categoryRouter = require('express').Router();
const { Category } = require('../../db/models');

categoryRouter.get('/', async (req, res) => {
    try {
        const response = await Category.findAll()
        res.json(response);
    } catch (e) {
        console.error(e)
        res.status(500).send({error: e})
    }
})

module.exports = categoryRouter;
