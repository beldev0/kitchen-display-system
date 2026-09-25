const express = require('express')
const router = express.Router()

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

// handler / path : returns all exisiting orders
router.get('', (req, res) => {
    let resultat = currentOrders
    let status = req.query?.status
    if (status) {
        resultat = resultat.filter(order => order.status === status)
    }
    return res.status(200).json({ "orders": resultat })
})

// handler /id path : returns a single order

router.get('/:id', (req, res) => {
    console.log(req.params);
    const orderId = req.params.id
    const order = currentOrders.find(order => order.id == orderId)
    if (order) {
        return res.json({ "orders": [order] })
    }
    return res.json({ "error": `Order ${orderId} not found` })
})

module.exports = router