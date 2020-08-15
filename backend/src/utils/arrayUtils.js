module.exports = {

    async FirstArrayContainAllSecond(firstArray, secondArray) {

        return secondArray.every(ai => firstArray.includes(ai));
    }

}