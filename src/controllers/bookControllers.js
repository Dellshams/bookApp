const Book = require('../models/book');

exports.createNewBook = function (req, res) {
    Book.create({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        category: req.body.category,
        purchaseCount: req.body.purchaseCount,
        imageUrl: req.body.imageUrl,
        color: req.body.color,
        tags: req.body.tags
    }, (err, newBook) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else {
            return res.status(200).json({ message: "New book Created", newBook })
        }
    })
}

exports.fetchBooks = (req, res) => {
    Book.find({}, (err, books) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else {
            return res.status(200).json({ books })
        }
    })
}

exports.fetchBook = (req, res) => {
    Book.findById( req.params.id, (err, book) => {
        if (err) {
            return res.status(500).json({ message: err})
        } else if (!book) {
            return res.status(404).json({ message: "Book not found" })
        } else {
            return res.status(200).json({ book })
        }
    })
}

exports.updateBook = (req, res) => {
    Book.findByIdAndUpdate( req.params.id, {
        title: req.body.title,
        category: req.body.category
    }, (err, book) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else if (!book) {
            return res.status(404).json({ message: "Book not found" })
        } else {
            book.save( (err, book) => {
                if (err) {
                    return res.status(500).json({ message: err })
                } else {
                    return res.status(200).json({ message: "Book updated Successfully", book })
                }
            })
        }
    })
}

exports.deleteBook = (req, res) => {
    Book.findByIdAndDelete( req.params.id, (err, book) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else if (!book) {
            return res.status(404).json({ message: "Book not found" })
        } else{
            return res.status(200).json({ message: "Book deleted Successfully" })
        }
    })
}