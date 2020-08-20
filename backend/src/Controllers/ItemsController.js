const itemsService = require('../Services/itemsService')

/**
* @swagger
* /ice-cream:
*   post:
*     tags:
*       — Ice Cream
*     summary: This should create a new ice cream.
*     description: This is where you can give some background as to why this route is being created or perhaps reference a ticket number.
*     consumes:
*       — application/json
*     parameters:
*       — name: body
*       in: body
*       schema:
*         type: object
*         properties:
*           flavor:
*           type: string
*     responses: 
*       200:
*         description: Receive back flavor and flavor Id.
*/
module.exports = {
    async show(req, res) {
        try {            
            var result = await itemsService.GetAll()

            return res.json(result)

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    }
}