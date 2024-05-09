const express = require('express')
const app = express()
const port = 3000


// 解析 application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
// 解析 application/json
  app.use(express.json());


  app.get('/', (req, res) => {
    res.render('index')
  })

  app.post('/', (req, res) => {

  })

  app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
  })