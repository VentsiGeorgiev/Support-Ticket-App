const router = require('express').Router({ mergeParams: true });

const { protect } = require('../middleware/auth');
const { getNotes, addNote } = require('../controllers/noteController');

router.route('/').get(protect, getNotes).post(protect, addNote);

module.exports = router;