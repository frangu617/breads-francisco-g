const express = require('express')
const Baker = require('../models/baker')
const baker = express.Router()
const bakerSeedsData = require('../models/baker_seed')

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedsData)
        .then(res.redirect('/breads'))
})
//show
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate({
            path: 'breads',
            options: { limit: 5 }})
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})
//delete
baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id)
        .then(deletedBaker => {
            res.status(303).redirect('/breads')
        })
})

module.exports = baker