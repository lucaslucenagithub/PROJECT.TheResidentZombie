const request = require('supertest')
const app = require('../../src/index.js')
const db = require('../../src/Models/Survivor')

describe('Survivor Routes', () => {

  afterAll(async () => {
    await db.destroy({
      where: {},
      truncate: true
    })

    await db.sequelize.close()
  }),

    it('should create a new survivor', async () => {
      var data = {
        name: "testing",
        age: 21,
        password: '123456',
        latitude: "-1111111",
        longitude: "-222222",
        items: [
          { id: 1, amount: 2 },
          { id: 2, amount: 2 },
          { id: 3, amount: 2 }
        ]
      }

      const res = await request(app)
        .post('/survivors')
        .send(data)

      expect(res.statusCode).toEqual(200)
    }),

    it('shouldnt create a duplicate survivor', async () => {
      var data = {
        name: "testing",
        age: 21,
        password: '123456',
        latitude: "-1111111",
        longitude: "-222222",
        items: [
          { id: 1, amount: 2 },
          { id: 2, amount: 2 },
          { id: 3, amount: 2 }
        ]
      };

      const res = await request(app)
        .post('/survivors')
        .send(data)

      expect(res.statusCode).toEqual(400)
      expect(res.body).toHaveProperty('message')
    }),

    it('should update a survivor coords', async () => {
      var data = {
        id: 1,
        latitude: "-1111111",
        longitude: "-222222"
      };

      const res = await request(app)
        .put('/survivors/coords')
        .send(data)

      expect(res.statusCode).toEqual(200)
    }),

    it('should infect a survivor', async () => {

      const res = await request(app)
        .post('/survivors/1/infect')

      expect(res.statusCode).toEqual(200)
    })

})