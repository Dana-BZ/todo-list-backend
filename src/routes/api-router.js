const express = require('express');
const router = express.Router();

const todoRouter = require('./todo-router');

// api router
router.use('/todos', todoRouter);

// handling all api errors
router.use((error, req, res, next) => {
    if (error) {
        res.json({
            status: 'ERROR',
            error: error
        });
    } else {
        next();
    }
});


module.exports = router;
