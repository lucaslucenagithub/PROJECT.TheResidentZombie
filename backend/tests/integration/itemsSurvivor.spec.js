const request = require('supertest')
const app = require('../../src/index.js')
const db = require('../../src/Models/SurvivorItem')

describe('Survivor Items Routes', () => {

    afterAll(async () => {
        await db.destroy({
          where: {},
          truncate: true
        })
        
        await db.sequelize.close()
    }),

    it('should return all items of a survivor by its id', async () => {
        const res = await request(app)
            .get('/survivor/1/items')

        expect(res.statusCode).toEqual(200)
    })
})