const request = require('supertest')
const app = require('../../src/index.js')
const db = require('../../src/Models/Item')

describe('Items Routes', () => {

    afterAll(async () => {
        await db.sequelize.close()
    }),

    it('should return all registers', async () => {
        const res = await request(app)
            .get('/items')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('id')
    })
})