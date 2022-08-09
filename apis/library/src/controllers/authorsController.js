import authors from "../models/Author.js"

class AuthorController {
  // GETs
  static listAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    })
  }

  static listAuthorById = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (err, authors) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - ID not found.` });
      } else {
        res.status(200).send(authors);
      }
    })
  }

  // POSTs
  static addAuthor = (req, res) => {
    let author = new authors(req.body);
    author.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err} - Fail to create a new author.` });
      } else {
        res.status(201).send(author.toJSON());
      }
    })
  }

  // PUTs
  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Author sucessfully updated.' });
      } else {
        res.status(500).send({ message: err.message });
      }
    })
  }

  // DELETEs
  static removeAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Author sucessfully removed.' });
      } else {
        res.status(500).send({ message: err.message });
      }
    })
  }

}

export default AuthorController;
