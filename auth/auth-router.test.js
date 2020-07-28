const supertest = require('supertest')

const server = require('../api/server')
const db = require('../data/db-config')


describe('Login/Register end point tests', function () {
    describe('POST tests', function () {
        beforeAll(async () => {
            await db('users').truncate()
        })
        it('/register should return status 201 and return JSON', function () {
            return supertest(server)
                .post('/api/auth/register')
                .send({ username: 'test', password: 'test', role: 2 })
                .then(res => {
                    expect(res.status).toBe(201)
                    expect(res.type).toMatch(/json/i)
                })
        })
        it('/login should return status 200, Welcome and return JSON', function () {
            return supertest(server)
                .post('/api/auth/login')
                .send({ username: 'test', password: 'test' })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                    expect(res.body.message).toBe('Welcome')
                })
        })
    })
})