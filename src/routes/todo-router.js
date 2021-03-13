const express = require('express');
const router = express.Router();

// todos router
const todos = [
    { id: 1, text: 'clean the kitchen', isCompleted: true },
    { id: 2, text: 'eat', isCompleted: false },
];

// GET /todos
router.get('/', async (req, res) => {
    ``;
});

// POST /todos
router.post('/', async (req, res) => {

});

// PUT /todos/:id
router.put('/:id', async (req, res) => {
    const { id } = req.params;
});

// DELETE /todos/:id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
});

module.exports = router;
