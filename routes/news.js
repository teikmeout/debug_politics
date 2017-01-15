const newsRouter = require('express').Router();

newsRouter.route('/stories')
  .get((req, res) => res.json({message: 'hi'}))

module.exports = newsRouter;
