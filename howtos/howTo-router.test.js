const supertest = require('supertest')

const server = require('../api/server')
const db = require('../data/db-config')


describe('how-To end point tests', function () {
    describe('GET tests', function () {
        beforeAll(async () => {
            await db('howto').truncate()
            await db('users').truncate()
        })
        it('howto/ should return status 200', async () => {
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
        // it('howto/1 should return status 200', function () {
        //     return supertest(server)
        //         .get('/api/auth/howto/1')
        //         .then(res => {
        //             expect(res.status).toBe(200)
        //         })
        // })
        it('howto/1 should return json', function () {
            return supertest(server)
                .get('/api/auth/howto/1')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })
    })
})