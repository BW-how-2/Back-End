const supertest = require('supertest')

const server = require('../api/server')
const db = require('../data/db-config')


describe('how-To end point tests', function () {
    describe('GET tests', function () {
        beforeEach(async () => {
            await db('howto').truncate()
            await db('users').truncate()
        })
        it('GET howto/ should return status 200 and respond with JSON', async () => {
            let token = ''
            await supertest(server)
                .post('/api/auth/register')
                .send({ username: 'test', password: 'test', role: 2 })
                .then(async result => token = result.body.token)
            return supertest(server)
                .get('/api/auth/howto')
                .set({ authorization: token })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                })
        })
        it('GET howto/1 should return status 200 and respond with json', async () => {
            let token = ''
            await supertest(server)
                .post('/api/auth/register')
                .send({ username: 'test', password: 'test', role: 2 })
                .then(async result => token = result.body.token)
            await supertest(server)
                .post('/api/auth/login')
                .send({ username: 'test', password: 'test' })
                .then(async result => token = result.body.jwt_token)
            await supertest(server)
                .post('/api/auth/howto/creator')
                .send({ name: 'test', description: 'test', steps: 'test', category: 'test' })
                .set({ authorization: token })
            return supertest(server)
                .get('/api/auth/howto/1')
                .set({ authorization: token })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                })
        })
    })
})