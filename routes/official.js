const officialRouter = require('express').Router();
const getOfficialByAddress = require('../services/official.js')

officialRouter.route('/:address')
  .get(getOfficialByAddress, (req, res, next) => res.json({message: 'hi'}))

module.exports = officialRouter;
