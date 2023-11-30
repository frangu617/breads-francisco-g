const express = require('express')
const breads = express.Router();
const Bread = require('../models/bread.js')
const Baker = require('../models/baker.js')

//INDEX
breads.get('/', async (req, res) => {
    const foundBakers = await Baker.find().lean()
    const foundBreads = await Bread.find().limit(20).lean()
    res.render('index', {
        bakers: foundBakers,
        breads: foundBreads,
        title: 'Index Page'
    })
})

breads.get('/baker', (req, res) => {
    const selectedBaker = req.query.baker
    Bread.findByBaker(selectedBaker)
        .then(foundBreads => {
            res.render('index', {
                breads: foundBreads,
                title: `Breads by ${selectedBaker}`
            });
        })
        .catch(err => {
            res.send('Error page or message');
        });
});

// NEW
breads.get('/new', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            res.render('new', {
                bakers: foundBakers
            })
        })

})

// SHOW
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
        .populate('baker')
        .then(foundBread => {
            // const bakedBy = foundBread.getBakedBy()            
            res.render('show', {
                bread: foundBread
            })
        })
        .catch(err => {
            res.render('error404')
        })
})

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = undefined
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
})
breads.get('/data/seed', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            Bread.insertMany([
                {
                    name: 'Rye',
                    hasGluten: true,
                    image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    baker: foundBakers[0]._id
                },
                {
                    name: 'French',
                    hasGluten: true,
                    image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                    baker: foundBakers[2]._id
                },
                {
                    name: 'Gluten Free',
                    hasGluten: false,
                    image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
                    baker: foundBakers[3]._id
                },
                {
                    name: 'Pumpernickel',
                    hasGluten: true,
                    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
                    baker: foundBakers[0]._id
                }
            ])
                .then(createdBreads => {
                    res.redirect('/breads')
                })
        })

})
//UPDATE
breads.put('/:id', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedBread) => {
            console.log(updatedBread)
            res.redirect(`/breads/${req.params.id}`)
        })
        .catch(err => {
            res.render('error404')
        })

})
//EDIT
breads.get('/:id/edit', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            Bread.findById(req.params.id)
                .then(foundBread => {
                    res.render('edit', {
                        bread: foundBread,
                        bakers: foundBakers
                    });
                })
        })

        .catch(err => {
            res.render('error404')
        })
})

// DELETE
breads.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id)
        .then((deletedBread) => {
            res.status(303).redirect('/breads')
        })
    // .catch(err => {
    //     res.status(303).redirect('/breads')
    // })
})


module.exports = breads