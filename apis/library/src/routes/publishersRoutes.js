import express from "express";
import PublisherController from "../controllers/publishersController.js";

const router = express.Router();

router
  .get('/publishers', PublisherController.listPublishers)
  .get('/publishers/:id', PublisherController.listPublisherById)
  .post('/publishers', PublisherController.addPublisher)
  .put('/publishers/:id', PublisherController.updatePublisher)
  .delete('/publishers/:id', PublisherController.removePublisher)

export default router;
