import books from "../models/Book.js"

class BookController {
  // GETs
  static listBooks = (req, res) => {
    books.find()
      .populate(['author', 'publisher'])
      // .populate('publisher')
      .exec((err, books) => {
        res.status(200).json(books);
      })
  }

  static listBookById = (req, res) => {
    const id = req.params.id;

    books.findById(id)
      .populate('author', 'name')
      .populate('publisher', 'name')
      .exec((err, books) => {
        if (err) {
          res.status(400).send({ message: `${err.message} - ID not found.` });
        } else {
          res.status(200).send(books);
        }
      })
  }

  // POSTs
  static addBook = (req, res) => {
    let book = new books(req.body);
    book.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err} - Fail to create a new book.` });
      } else {
        res.status(201).send(book.toJSON());
      }
    })
  }

  // PUTs
  static updateBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Book sucessfully updated.' });
      } else {
        res.status(500).send({ message: err.message });
      }
    })
  }

  // DELETEs
  static removeBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Book sucessfully removed.' });
      } else {
        res.status(500).send({ message: err.message });
      }
    })
  }

  // Querys
  static searchBooksByPublisher = (req, res) => {
    const id = req.query.id; // Will find by Publisher ID

    books.find({ 'publisher': id }, {}, (err, books) => {
      res.status(200).send(books);
    })
  }

}

export default BookController;
