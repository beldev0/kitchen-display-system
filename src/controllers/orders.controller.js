function orderController(orderService) {
    return {
        getAllOrders: (req, res) => {
            const orders = orderService.getAllOrders(req.query?.status)
            return res.status(200).json({ "orders": orders })
        },

        getOrderById: (req, res, next) => {
            try {
                const order = orderService.getOrderById(req.params.id)
                return res.json({"order": order})
            } catch(err) {
                next(err)
            }
        },

        updateOrderStatus : (req, res, next) => {
            try {
                const order = orderService.updateOrderStatus(
                    req.params.id,
                    req.body.status
                )
                return res.json({"order": order})
            } catch(err) {
                next(err)
            }
        },

        deleteOrder : (req, res, next) => {
            try {
                if(orderService.deleteOrder(req.params.id)) {
                    res.sendStatus(204)
                }
            } catch (err) {
                next(err)
            }
        },

        createOrder : (req, res) => {
            const newOrder = orderService.createOrder(req.body)
            return res.status(201).json({"data": newOrder})
        }
    }
}

module.exports = orderController