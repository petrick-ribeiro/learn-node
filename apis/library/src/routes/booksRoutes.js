import express from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

router
  .get('/books', BookController.listBooks)
  .get('/books/search', BookController.searchBooksByPublisher)
  .get('/books/:id', BookController.listBookById)
  .post('/books', BookController.addBook)
  .put('/books/:id', BookController.updateBook)
  .delete('/books/:id', BookController.removeBook)

export default router;
