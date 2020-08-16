module.exports = {

    async FirstArrayContainAllSecond(firstArray, secondArray) {

        const result = secondArray.every(ai => firstArray.includes(ai));

        return result
    }

}