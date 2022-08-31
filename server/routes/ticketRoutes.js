const router = require('express').Router();

const { getTickets, getTicket, createTicket, updateTicket, deleteTicket } = require('../controllers/ticketController');
const { protect } = require('../middleware/auth');

router.route('/')
    .get(protect, getTickets)
    .post(protect, createTicket);

router.route('/:id')
    .get(protect, getTicket)
    .delete(protect, deleteTicket)
    .put(protect, updateTicket);

module.exports = router;