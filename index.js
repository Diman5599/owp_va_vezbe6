const express = require('express');
const {getRandString} = require('./rand.js')
const posts = require('./posts.js')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('pages/index');
})

app.get('/kadeti', (req, res) => {
    res.render('pages/kadeti', {myTitle: "ВА | Кадети", myPosts: posts.getKdPosts()});
})

app.get('/staresine', (req, res) => {
    res.render('pages/staresine', {myTitle: "ВА | Старешине", myPosts: posts.getStPosts()});
})

const port = process.env.SERVER_PORT
const host = process.env.SERVER_HOST

app.listen(port, host)

console.log(`Listening on http://${host}:${port}`)