const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json('hello from express');
});

module.exports router;