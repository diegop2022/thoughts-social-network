const router = require('express').Router();

const {
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction
} = require('../../controllers/thought-controller')

router
    .route('/api/thoughts/:userId').post(addThought)

router
    .route('/api/thoughts').get(getAllThoughts)

router
    .route('/api/thoughts/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/api/thoughts/:id/reactions')
    .post(addReaction)

module.exports = router;