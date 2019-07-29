const db = require('../database/dbConfig');
const request = require('supertest');
const userPeople = require('../models/UsersModel');
const server = require('../server')

describe('POST /', () => {

    beforeEach(async () => {
        await db('users')
        .truncate();
    })

    // This test will make sure content can be added, as well as error and success
    // messages work.
    describe('Add new user', () => {

        it('should add a new user', async () => {
            // first see if this user exists
            let doesUserExist = await db('users')
                    .where({first_name: "Frank"})
                    expect(doesUserExist).toHaveLength(0)

            await userPeople.add({first_name: "Dwezil", last_name: "Zappa", email: "dz@you.com"})

            doesUserExist = await db('users')
                    .where({first_name: "Dwezil"})
                    expect(doesUserExist).toHaveLength(1)
        })

        it('should output a 400 error due to insufficient content', async () => {
            // last_name and email are required.  This should return a 400 error
            let newUser = {first_name: "Frank"}

            const res = await request(server)
                        .post('/add')
                        .send(newUser)
                         expect(res.statusCode)
                        .toEqual(400);
        }) // End of 400 check

        it('should output a 201 created code', async () => {
            // All required info will be sent
            let newUser = {first_name: "Frank", last_name: "Marino", email: "fm@you.com"}

            const res = await request(server)
                        .post('/add')
                        .send(newUser)
                         expect(res.statusCode)
                        .toBe(201)
        }) // End of 201 check

    });
    
})