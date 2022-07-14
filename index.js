
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const express = require("express")
const nunjucks = require("nunjucks")
const randomid = require("random-id")
const path = require('path')
const fs = require('fs')
const crypto = require('crypto')
const hash = (d) => crypto.createHash('sha512').update(d).digest('hex')
const username = 'aurvedicum'
const password = hash('nitay')
const useCollection = require('./js/collection.js')
const app = express()
app.use(express.static("public"));
nunjucks.configure("views", {
    autoscape: true,
    express: app,
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.set("view engine", "njk")
app.use(express.json());
app.use("/api/products", useCollection(express.Router(), 'products', 'name', 'categories', 'brands', 'volumes', 'content', 'maxPrice', 'minPrice', 'brandId', 'categoryId', 'quantity', 'description', 'images'))
    .use("/api/categories", useCollection(express.Router(), 'categories', 'title'))
    .use("/api/brands", useCollection(express.Router(), 'brands', 'title'))
    .use("/images", require("./js/images"))
app.use("/api/basket", require("./js/basket"))
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

const DB = {
    users: [{ _id: randomid(), username, password }],
    sessions: {},
}

const findUserByUsername = async (username) => DB.users.find((u) => u.username === username)

const findUserBySessionId = async (sessionId) => {
    const userId = DB.sessions[sessionId];
    if (!userId) {
        return
    }
    return DB.users.find((u) => u._id === userId)
}

const createSession = async (userId) => {
    const sessionId = randomid();
    DB.sessions[sessionId] = userId;
    return sessionId;

}

const deleteSession = async (sessionId) => {
    delete DB.sessions[sessionId]
}

app.use(cookieParser())

const auth = () => async (req, res, next) => {

    if (!req.cookies['sessionId']) {
        return next()
    }

    const user = findUserBySessionId(req.cookies['sessionId'])
    req.user = user
    req.sessionId = req.cookies['sessionId']
    next()
}


app.get("/", auth(), async (req, res) => {
    res.render('index', {
        user: req.user,
        authError: req.query.authError === 'true' ? 'Логин или пароль введены неверно' : req.query.authError
    })
})

app.post("/login", bodyParser.urlencoded({ extended: false }), async (req, res) => {
    const { username, password } = req.body;
    const hashPass = hash(password)
    const user = await findUserByUsername(username);
    if (!user || user.password !== hashPass) {
        return res.redirect('/?authError=true')
    }
    const sessionId = await createSession(user._id)
    res.cookie('sessionId', sessionId, { httpOnly: true }).redirect("/")
})

app.get("/logout", auth(), async (req, res) => {
    if (!req.user) {
        return res.redirect("/")
    }
    await deleteSession(req.sessionId);
    res.clearCookie('sessionId').redirect('/')
})

if (process.env.NODE_ENV === "production") {
    app.listen(process.env.APP_PORT, process.env.APP_IP)
    console.log("The project is running...")

} else {
    const port = process.env.APP_PORT || 3000

    app.listen(port, () => {

        console.log((`  Listening on http://localhost:${port}`))
    })
}
