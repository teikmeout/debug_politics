const officialRouter = require('express').Router();
const { getOfficialsByAddress } = require('../services/official.js')

officialRouter.route('/:address')
  .get(getOfficialsByAddress, (req, res, next) => res.json(res.officials))

module.exports = officialRouter;
