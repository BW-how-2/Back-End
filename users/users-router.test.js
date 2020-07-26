const supertest = require('supertest')

const server = require('../api/server')
const db = require('../data/db-config')


describe('User end point tests', function () {
    describe('Get tests', function () {
        beforeEach(async () => {
            await db('howto').truncate()
            await db('users').truncate()
        })
        it('GET users/ should return status 200 and response should be JSON', async () => {
            let token = ''
            await supertest(server)
                .post('/api/auth/register')
                .send({ username: 'test', password: 'test', role: 2 })
                .then(async result => token = result.body.token)
            return supertest(server)
                .get('/api/auth/users')
                .set({ authorization: token })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                })
        })
        it('GET users/1 should return status 200 and response should be JSON', async () => {
            let token = ''
            await supertest(server)
                .post('/api/auth/register')
                .send({ username: 'test', password: 'test', role: 2 })
                .then(async result => token = result.body.token)
            return supertest(server)
                .get('/api/auth/users/1')
                .set({ authorization: token })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                })
        })
    })
    describe('PUT & DELETE tests', function () {
        it('PUT users/1 should return status 200, response should be JSON and respond when user is updated', async () => {
            let token = ''
            await supertest(server)
                .post('/api/auth/register')
                .send({ username: 'test', password: 'test', role: 2 })
                .then(async result => token = result.body.token)
            await supertest(server)
                .put('/api/auth/users/1')
                .send({ username: 'testupdate', password: 'test', role: 2 })
                .set({ authorization: token })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                    expect(res.body).toMatchObject({ Message: "Updated User" })
                })
        })
        it('DELETE users/1 should return status 200, response should be JSON and respond when user has been deleted', async () => {
            let token = ''
            await supertest(server)
                .post('/api/auth/register')
                .send({ username: 'test', password: 'test', role: 2 })
                .then(async result => token = result.body.token)
            await supertest(server)
                .delete('/api/auth/users/1')
                .set({ authorization: token })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                    expect(res.body).toMatchObject({ Removed: "User with id: 1" })
                })
        })
    })
})