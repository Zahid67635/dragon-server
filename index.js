const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.use(cors())
app.get('/', (req, res) => {
    res.send('Server running')
})
app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news)
    }
    else {
        const selectedCategory = news.filter(category => category.category_id === id);
        res.send(selectedCategory);
    }
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.listen(port, () => console.log('aareehhh mama'))

module.exports = app;
