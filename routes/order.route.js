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

// handle delete method

router.delete('/:id', (req, res) => {
    const orderId = req.params.id
    const order = currentOrders.find(order => order.id == orderId)
    if(!order) {
        return res.json(400).json({"error": [`No order n°: ${orderId} found`]})
    } else {
        currentOrders = currentOrders.filter(order => order.id != orderId)
        res.sendStatus(204)
    }
})

// handle new order creation

router.post('', (req, res) => {
    let newOrder = req.body
    if(!newOrder) {
        return res.status(400).json({"error": ["New order information are required"]})
    }
    
    if(!newOrder.table || !newOrder.items.length) {
        return res.status(400).json({"error": ["Both table and items are required"]})
    }
    let table = new Number(newOrder.table)
    if (isNaN(table)) {
        return res.status(400).json({"error": "Table number are invalid"})
    }
    newOrder.id = currentOrders.length ? currentOrders.at(-1).id : 1
    newOrder.created_at = new Date()
    newOrder.status = 'en_attente'
    currentOrders.push(newOrder)
    return res.status(201).json(newOrder)
})


module.exports = router