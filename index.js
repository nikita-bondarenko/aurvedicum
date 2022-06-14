
const express = require("express")
const nunjucks = require("nunjucks")

const app = express()

nunjucks.configure("views", {
    autoscape: true,
    express: app,
})



app.set("view engine", "njk")

app.use(express.json())
app.use("/api/products", require("./products"))

app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

app.get("/", (req, res) => {
    res.render('index', {
        user: req.user,
        authError: req.query.authError === 'true'
    })
})

const port = process.env.APP_PORT || 3000


app.listen(port, () => {

    console.log((`  Listening on http://localhost:${port}`))

})