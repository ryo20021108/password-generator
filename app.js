const express = require('express')
const app = express()
const port = 3000
const { engine } = require('express-handlebars')

//使用靜態檔案
app.use(express.static('/public'))
// 解析 application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// 解析 application/json
app.use(express.json());
//載入express-handlebars
app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')




app.get('/', (req, res) => {
  res.render('index')
})

// app.post('/', (req, res) => {

// })

app.listen(port, () => {
console.log(`express server is running on http://localhost:${port}`)
})