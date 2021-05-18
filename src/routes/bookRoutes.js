const express = require('express');
const router = express.Router()
const bookCtrl = require('../controllers/bookControllers');

router.post('/books', bookCtrl.createNewBook)

router.get('/books', bookCtrl.fetchBooks)

router.get('/books/:id', bookCtrl.fetchBook)

router.put('/books/:id', bookCtrl.updateBook)

router.delete('/books/:id', bookCtrl.deleteBook)

module.exports = router;