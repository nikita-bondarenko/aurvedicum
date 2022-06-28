
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const express = require("express")
const nunjucks = require("nunjucks")
const randomid = require("random-id")
const path = require('path')
const fs = require('fs')

const useCollection = require('./js/collection.js')
const app = express()


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

// app.post('/api/upload/delete', bodyParser.urlencoded({ extended: false }), async (req, res) => {
//     const dir = path.relative(__dirname, req.body.url)

//     console.log(dir);
//     fs.unlink(dir, (err) => {
//         if (err) {
//             console.log('Failed')
//             res.sendStatus(400)
//             return
//         }
//         res.sendStatus(204)
//         console.log('Successful')
//     })
// });

app.use("/api/products", useCollection(express.Router(), 'products', 'name', 'categories', 'brands', 'volumes', 'content', 'maxPrice', 'minPrice', 'quantity', 'description', 'images'))
    .use("/api/categories", useCollection(express.Router(), 'categories', 'title'))
    .use("/api/brands", useCollection(express.Router(), 'brands', 'title'))
// .use("/api/basket")
// .use("/api/order")
// app.use('/images', express.static(path.join(__dirname, 'images')))
// app.use('/api', require('./js/upload'))

express.Router().get('/login', async (res, req) => {
    console.log(req.body)
})

app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

const DB = {
    users: [{ _id: randomid(), username: "admin", password: "pwd007", books: 0 }],
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
    const user = await findUserBySessionId(req.cookies['sessionId'])
    req.user = user
    req.sessionId = req.cookies['sessionId']
    next()
}

app.post("/api/add-book", auth(), async (req, res) => {
    if (!req.user) {
        return res.sendStatus(401)
    }
    const user = await findUserByUsername(req.user.username)
    user.books += 1;
    res.json({ books: user.books })
})

app.get("/", auth(), (req, res) => {
    res.render('index', {
        user: req.user,
        authError: req.query.authError === 'true'
    })
})

app.post("/login", bodyParser.urlencoded({ extended: false }), async (req, res) => {
    const { username, password } = req.body;
    const user = await findUserByUsername(username);
    if (!user || user.password !== password) {
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
