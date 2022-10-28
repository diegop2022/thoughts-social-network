const router = require('express').Router();

const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller')

router
    .route('/api/users')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/api/users/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)
    .post(addFriend)

router
    .route('/api/users/:id/friends/:friendId')
    .delete(removeFriend);

module.exports = router;