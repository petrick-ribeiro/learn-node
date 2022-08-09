import express from "express";
import books from "./booksRoutes.js";
import authors from "./authorRoutes.js";
import publishers from "./publishersRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ title: 'Library' });
  })

  app.use(
    express.json(),
    books,
    authors,
    publishers
  )
}

export default routes
