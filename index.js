
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
    console.log(req.cookies)

    res.render('index')
})
app.get('/api/link', async (req, res) => {
    console.log(req.cookies.pathname)
    res.status(200).send(req.cookies.pathname)
})
const pathArr = ['/catalog', '/:id', '/admin/orders', '/admin/orders/:id', '/admin/orders/info', '/admin/orders/add', '/admin/products', '/admin/products/:id', '/admin/products/add', '/admin/contacts']
pathArr.forEach((path) => {
    app.get(path, async (req, res) => {
        console.log(req.params.id)
        if (path.includes(':id')) {
            res.cookie('pathname', path.replace(':id', req.params.id), { path: '/api/link' }).redirect('/')
            return
        }

        console.log('hi')
        res.cookie('pathname', path, { path: '/api/link' }).redirect('/')

    })
})
app.use(express.json());
app.use("/api/products", useCollection(express.Router(), 'products', 'name', 'categories', 'brands', 'volumes', 'content', 'maxPrice', 'minPrice', 'brandId', 'categoryId', 'quantity', 'description', 'images'))
    .use("/api/categories", useCollection(express.Router(), 'categories', 'title'))
    .use("/api/brands", useCollection(express.Router(), 'brands', 'title'))
    .use("/images", require("./js/images"))
    .use("/api/basket", require("./js/basket"))
    .use("/api/order", require("./js/order"))
    .use("/api/status", useCollection(express.Router(), 'status', 'title'))
    .use("/api/admin", require("./js/admin"))
    .use("/api/deliveries", useCollection(express.Router(), 'deliveries', 'title', 'price'))
    .use("/api/contacts", useCollection(express.Router(), 'contacts', 'header', 'content'))




if (process.env.NODE_ENV === "production") {
    app.listen(process.env.APP_PORT, process.env.APP_IP)
    console.log("The project is running...")

} else {
    const port = process.env.APP_PORT || 3000

    app.listen(port, () => {

        console.log((`  Listening on http://localhost:${port}`))
    })
}
