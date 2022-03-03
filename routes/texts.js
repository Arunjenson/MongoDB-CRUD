const express = require('express')
const router = express.Router()
const Text = require('../models/text')


router.get('/', async (req, res) => {
    try {
        const texts = await Text.find()
        res.json(texts)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const text = await Text.findById(req.params.id)
        res.json(text)
    } catch (err) {
        res.send('Error ' + err)
    }
})


router.post('/', async (req, res) => {
    const text = new Text({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try {
        const a1 = await text.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const text = await Text.findById(req.params.id)
        text.sub = req.body.sub
        const a1 = await text.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }

})

module.exports = router