const request = require('supertest')
const app = require('../../src/index.js')
const db = require('../../src/Models/Survivor')

describe('Survivor Routes', () => {

    afterAll(async () => {
      await db.destroy({
        where: {},
        truncate: true
      }),
      await db.sequelize.close()
    }),

    it('should create a new survivor', async () => {
      var data = {
        name: "testing",
        age: 21,
        latitude: "-1111111",
        longitude: "-222222"
      };

      const res = await request(app)
        .post('/survivors')
        .send(data)

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('id')
    }),

    it('shouldnt create a duplicate survivor', async () => {
      var data = {
        name: "testing",
        age: 21,
        latitude: "-1111111",
        longitude: "-222222"
      };

      const res = await request(app)
        .post('/survivors')
        .send(data)

      expect(res.statusCode).toEqual(400)
      expect(res.body).toHaveProperty('error')
    })

})