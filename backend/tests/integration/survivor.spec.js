const request = require('supertest')
const app = require('../../src/index.js')

describe('Survivor Create Route', () => {
  it('should show return user created', async () => {
    const res = await request(app).post('/survivors').send({
      name: 'Test',
      age: 12,
      latitude: '00000000000',
      longitude: '1111111111',
    })
    expect(res.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('id')
  })
})