const express = require('express');
const redis = require('../redis')
const router = express.Router();

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  let added_todos = await redis.getAsync("added_todos")
  if (!added_todos) {
    await redis.setAsync('added_todos', 0)
    added_todos = 0
  }
  res.send({ added_todos: Number(added_todos), unnecessary_change: true })
})

module.exports = router;
