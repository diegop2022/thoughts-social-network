const router = require('express').Router();

const {
    addThought
} = require('../../controllers/thought-controller')

router
    .route('/api/thoughts/:id').post(addThought)