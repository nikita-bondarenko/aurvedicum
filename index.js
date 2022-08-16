
const cookieParser = require("cookie-parser")
const db = require('./db/index')

const express = require("express")
const nunjucks = require("nunjucks")
const crypto = require('crypto')
const hash = (d) => crypto.createHash('sha512').update(d).digest('hex')
const useCollection = require('./js/collection.js')

const app = express()
app.use(cookieParser())

app.use(express.static("public"));
nunjucks.configure("views", {
    autoscape: true,
    express: app,
})
deleteBadProducts = async () => {
    const products = await db.get('products')
    products.forEach(product => !product.name ? db.delete('products', product.id) : 1)
}

deleteBadProducts()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.set("view engine", "njk")

app.get('/', async (req, res) => {
    res.render('index')
})

const pathArr = ['/', '/catalog', '/news', '/news/:id', '/articles', '/articles/:id', '/:id', '/admin/orders', '/admin/orders/:id', '/admin/orders/info', '/admin/orders/add', '/admin/products', '/admin/products/:id', '/admin/products/add', '/admin/contacts', '/admin/contacts.:id', '/admin/articles', '/admin/articles/add', '/admin/news', '/admin/news/add', '/admin/news/:id', '/admin/articles/:id', '/admin/additions', '/admin/additions/:id', '/admin/additions/add']
pathArr.forEach((path) => {
    app.get(path, async (req, res) => {
        res.render('index')
    })
})
app.use(express.json());
app.use("/api/products", useCollection(express.Router(), 'products', 'recomend', 'name', 'categories', 'brands', 'volumes', 'content', 'maxPrice', 'minPrice', 'brandId', 'categoryId', 'quantity', 'description', 'images'))
    .use("/api/categories", useCollection(express.Router(), 'categories', 'title'))
    .use("/api/brands", useCollection(express.Router(), 'brands', 'title'))
    .use("/images", require("./js/images"))
    .use("/api/basket", require("./js/basket"))
    .use("/api/order", require("./js/order"))
    .use("/api/status", useCollection(express.Router(), 'status', 'title'))
    .use("/api/admin", require("./js/admin"))
    .use("/api/deliveries", useCollection(express.Router(), 'deliveries', 'title', 'price'))
    .use("/api/contacts", useCollection(express.Router(), 'contacts', 'header', 'body', 'phone'))
    .use("/api/articles", useCollection(express.Router(), 'articles', 'filename', 'header', 'body'))
    .use("/api/news", useCollection(express.Router(), 'news', 'filename', 'header', 'body'))
    .use("/api/additions", useCollection(express.Router(), 'additions', 'header', 'body'))


if (process.env.NODE_ENV === "production") {
    app.listen(process.env.APP_PORT, process.env.APP_IP)
    console.log("The project is running...")

} else {
    const port = process.env.APP_PORT || 3000

    app.listen(port, () => {

        console.log((`  Listening on http://localhost:${port}`))
    })
}
