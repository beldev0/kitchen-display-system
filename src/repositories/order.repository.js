function orderRepository() {
    let lastId = 2

    let currentOrders = [
        {
            "id": 1,
            "table": 4,
            "items": ["Burger Deluxe", "Frites"],
            "status": "en_attente",
            "created_at": "2026-09-25T12:00:00Z"
        },
        {
            "id": 2,
            "table": 4,
            "items": ["Burger Deluxe", "Frites"],
            "status": "en_attente",
            "created_at": "2026-09-25T12:00:00Z"
        }
    ]

    return {
        getAllOrders : (status='') => {
            if(status) {
                return currentOrders.filter(order.status === status)
            }
            return currentOrders
        },

        getOrderById(id) {
            const order = currentOrders.find(order => order.id == id)
            return order ? order : null
        },
        updateOrderStatus(id, status) {
            const index = currentOrders.findIndex(order => order.id == id)
            currentOrders[index].status = status
            return currentOrders[index]
        },
        deleteOrder(id) {
            const index = currentOrders.findIndex(order => order.id == id)
            if (index === -1) {
                return null
            } 
            currentOrders.splice(index, 1)
            return true
        }, 
        createOrder(data) {
            const newOrder = {
                id: lastId++,
                ...data,
                "created_at" : new Date()
            }
            currentOrders.push(newOrder)
            return newOrder
        }
    }
}


module.exports = orderRepository