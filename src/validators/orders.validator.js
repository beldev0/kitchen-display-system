const { z } = require('zod')
const validStatus = ["en_attente", "en_preparation", "servee"]

const ordersValidator = {
    create : z.object({
        table: z.int().positive(),
        items : z.array(z.string()).min(1),
        status : z.enum(validStatus).default('en_attente')
    }),
    update : z.object({
        status : z.enum(validStatus)
    })
}

module.exports = ordersValidator