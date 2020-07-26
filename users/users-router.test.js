const supertest = require('supertest')

const server = require('../api/server')
const db = require('../data/db-config')


describe('User end point tests', function () {
    describe('Get tests', function () {
        beforeAll(async () => {
            await db('howto').truncate()
            await db('users').truncate()
        })
        it('user/ should return status 200', async () => {
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
    })
})