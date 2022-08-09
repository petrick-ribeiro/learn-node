import publishers from "../models/Publisher.js"

class PublisherController {
  // GETs
  static listPublishers = (req, res) => {
    publishers.find((err, publishers) => {
      res.status(200).json(publishers);
    })
  }

  static listPublisherById = (req, res) => {
    const id = req.params.id;

    publishers.findById(id, (err, publishers) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - ID not found.` });
      } else {
        res.status(200).send(publishers);
      }
    })
  }

  // POSTs
  static addPublisher = (req, res) => {
    let publisher = new publishers(req.body);
    publisher.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err} - Fail to create a new publisher.` });
      } else {
        res.status(201).send(publisher.toJSON());
      }
    })
  }

  // PUTs
  static updatePublisher = (req, res) => {
    const id = req.params.id;

    publishers.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Publisher sucessfully updated.' });
      } else {
        res.status(500).send({ message: err.message });
      }
    })
  }

  // DELETEs
  static removePublisher = (req, res) => {
    const id = req.params.id;

    publishers.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Publisher sucessfully removed.' });
      } else {
        res.status(500).send({ message: err.message });
      }
    })
  }


}

export default PublisherController;
