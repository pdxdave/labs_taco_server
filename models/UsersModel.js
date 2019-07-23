// bring in db
const db = require('../database/dbConfig')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find(){
    return db('users')
}

function findById(id){
    return db('users')
    .where({id})
    .first();
}

async function add(newPost){
    const [id] = await db('users')
    .insert(newPost)
    return findById(id)
}

function update(id, change){
    return db('users')
    .where({id})
    .update(change)
}

async function remove(id){
    return db('users')
    .where({id})
    .del()
}