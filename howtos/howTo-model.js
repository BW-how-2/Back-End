const db = require('../data/db-config')

module.exports = {
    getHowTos,
    getHowTo,
    addHowTo,
    updateHowTo,
    deleteHowTo
}

function getHowTos() {
    return db('howto')
}

function getHowTo(id) {
    return db('howto')
        .where({ id })
        .first()
}


function addHowTo(howTo) {
    return db('howto').insert(howTo, 'id')
}

function updateHowTo(changes, id) {
    return db('howto')
        .where({ id })
        .update(changes)
}

function deleteHowTo(id) {
    return db('howto')
        .where({ id })
        .del(id)
}