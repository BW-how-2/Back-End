const express = require('express')

const router = express.Router()

const HowTos = require('./howTo-model')

router.post('/', (req, res) => {
    const newHowTo = req.body
    HowTos.addHowTo(newHowTo)
        .then(howto => {
            res.status(201).json(newHowTo)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error adding the how-to' })
        })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body
    HowTos.getHowTo(id)
        .then(howto => {
            if (howto) {
                HowTos.updateHowTo(changes, id)
                    .then(updatedHowTo => {
                        res.status(200).json({ Message: `Updated How-to id: ${id}` })
                    })
            } else {
                res.status(404).json({ errorMessage: 'Could not find How-to with that id' })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Failed to update How-To' })
        })
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    await HowTos.deleteHowTo(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ Removed: `How-to with id: ${id}` })
            } else {
                res.status(404).json({ errorMessage: 'Could not find How-to with that id' })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error deleting how-to' })
        })
})

module.exports = router;