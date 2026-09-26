const validStatus = {"en_attente" : 1, "en_preparation":2, "servee":3}

function orderService(orderRepository) {
    return {
        getAllOrders : (status='') => {
            
            return orderRepository.getAllOrders(status)
        },

        getOrderById : (id) => {
            const order = orderRepository.getOrderById(id)
            if (order) return order
            throw new Error(`Order ${id} not found.`)
        },

        updateOrderStatus : (id, status) => {
            const order = orderRepository.getOrderById(id)
            if(!order) throw new Error(`Order ${id} not found`)
            const fromStatus = validStatus[order.status]
            const toStatus = validStatus[status]
            if(fromStatus > toStatus) {
                throw new Error(`We are here to upgrade not down grade. Haaa`)
            }
            return orderRepository.updateOrderStatus(id, status)
        },

        deleteOrder : (id) => {
            if(orderRepository.deleteOrder(id)) {
                return true
            } else {
                throw new Error(`Orde ${id} not found.`)
            }
        },

        createOrder : (data) => {
            return orderRepository.createOrder(data)
        }
    }
}

module.exports = orderService