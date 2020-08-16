const request = require('supertest')
const app = require('../../src/index.js')

describe('Authentication Routes', () => {

    it('should login successful', async () => {
        data = new {
            name: 'testing',
            password: '123456'
        }

        const res = await request(app)
            .get('/login')
            .send(data)

        expect(res.statusCode).toEqual(200)
    }),

    it('should login fail', async () => {

        data = new {
            name: 'testing',
            password: '1234567'
        }

        const res = await request(app)
            .get('/login')
            .send(data)

        expect(res.statusCode).toEqual(400)
    })
})