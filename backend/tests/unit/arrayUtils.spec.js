const request = require('supertest')
const app = require('../../src/index.js')
const arrayUtils = require('../../src/utils/arrayUtils')

describe('Array Utils', () => {

    it('should contains all values from second array', async () => {
        const firstArray = [1, 2, 3]
        const secondtArray = [1, 3]

        const result = await arrayUtils.FirstArrayContainAllSecond(firstArray, secondtArray)

        expect(result).toEqual(true)
    }),

    it('should not contains all values from second array', async () => {
        const firstArray = [1, 2]
        const secondtArray = [1, 3]

        const result = await arrayUtils.FirstArrayContainAllSecond(firstArray, secondtArray)

        expect(result).toEqual(false)
    })
})