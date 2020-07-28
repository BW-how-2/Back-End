const supertest = require('supertest')

const server = require('../api/server')
const db = require('../data/db-config')


describe('Creator end point tests', function () {
    describe('Creator tests', function () {
        beforeEach(async () => {
            await db('howto').truncate()
            await db('users').truncate()
        })
        it('POST creator/ should return status 201 and respond with json', async () => {
            let token = ''
            await supertest(server)
                .post('/api/auth/register')
                .send({ username: 'test', password: 'test', role: 2 })
                .then(async result => token = result.body.token)
            await supertest(server)
                .post('/api/auth/login')
                .send({ username: 'test', password: 'test' })
                .then(async result => token = result.body.token)
            return supertest(server)
                .post('/api/auth/howto/creator')
                .set({ authorization: token })
                .send({ name: 'test 2', description: 'test', steps: 'test', category: 'test' })
                .then(res => {
                    expect(res.status).toBe(201)
                    expect(res.type).toMatch(/json/i)
                })
        })
        it('PUT creator/1 should return status 200 and respond with json', async () => {
            let token = ''
            await supertest(server)
                .post('/api/auth/register')
                .send({ username: 'test', password: 'test', role: 2 })
                .then(async result => token = result.body.token)
            await supertest(server)
                .post('/api/auth/login')
                .send({ username: 'test', password: 'test' })
                .then(async result => token = result.body.token)
            await supertest(server)
                .post('/api/auth/howto/creator')
                .send({ name: 'test 3', description: 'test', steps: 'test', category: 'test' })
                .set({ authorization: token })
            return supertest(server)
                .put('/api/auth/howto/creator/1')
                .send({ id: 1, name: 'test updated', description: 'test', steps: 'test', category: 'test' })
                .set({ authorization: token })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                })
        })
        it('DELETE creator/1 should return status 200 and respond with json', async () => {
            let token = ''
            await supertest(server)
                .post('/api/auth/register')
                .send({ username: 'test', password: 'test', role: 2 })
                .then(async result => token = result.body.token)
            await supertest(server)
                .post('/api/auth/login')
                .send({ username: 'test', password: 'test' })
                .then(async result => token = result.body.token)
            await supertest(server)
                .post('/api/auth/howto/creator')
                .send({ name: 'test 1', description: 'test', steps: 'test', category: 'test' })
                .set({ authorization: token })
            return supertest(server)
                .delete('/api/auth/howto/creator/1')
                .set({ authorization: token })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i)
                })
        })
    })
})