#  Kitchen Manager API

## Project Overview

This is a Node.js & Express.js practice project designed to get comfortable with REST API principles, routing, HTTP status codes, and in-memory data handling.

It is a simple Kitchen Display System (KDS) API that exposes endpoints to manage food orders in a restaurant kitchen.

---

## Features & Endpoints

### 1. Create an Order
* **`POST /orders`**
* **Payload:** 
  ```json
  {
    "table": 4,
    "items": ["Burger Deluxe", "Frites"]
  }

* **Response:** Returns the created order object enriched with a unique `id`, default `status` ("en_attente"), and `created_at` timestamp.

---

### 2. Read Orders

* **`GET /orders`**
* Returns a list of all orders.
* **Query Params:** Filter orders by status (e.g., `GET /orders?status=en_attente`).


* **`GET /orders/:id`**
* Returns the details of a single order by its ID (returns `404` if not found).



---

### 3. Update Order Status

* **`PATCH /orders/:id/status`**
* **Payload:**
```json
{
  "status": "en_preparation"
}
```

* Updates the status of the specified order.

---

### 4. Cancel/Delete an Order

* **`DELETE /orders/:id`**
* Removes the order matching the provided ID from the system (returns `404` if not found).

---

## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Storage:** In-Memory Array (No database)

