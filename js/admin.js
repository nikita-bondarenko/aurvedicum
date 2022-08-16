const router = require('express').Router()
const collection = 'sessions'
const db = require('../db/index')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const randomid = require("random-id")
const path = require('path')
const fs = require('fs')
const crypto = require('crypto')
const { totalDelete } = require('../db/index')
const hash = (d) => crypto.createHash('sha512').update(d).digest('hex')
// const username = 'aurvedicum'
// const password = hash('nitay')

// db.totalDelete('contacts', { delete: 'true' })
const deleteSession = async () => {
    const sessions = await db.get('sessions')
    Object.keys(sessions).forEach(key => {
        if ((Date.now() - sessions[key].changed / 1000 * 60 * 60 * 24) > 7)
            db.deleteSession(key)
    })
}
setInterval(() => {
    deleteSession()
}, 1000 * 60 * 60 * 24)


router.post('/login', async (req, res) => {
    if (!req.body.login || !req.body.password) {
        res.sendStatus(400)
        return
    }
    const password = hash(req.body.password)

    try {
        const user = await db.getUser(req.body.login)
        if (!user) {
            res.sendStatus(400)
            return
        }
        const sessionId = await db.createSession(user.id)
        if (user.password !== password) {
            res.sendStatus(400)
            return
        }
        res.status(200).json({ sessionId })
    } catch (err) {
        console.error(err)
        res.sendStatus(400)
        return

    }
})

router.get('/logout', async (req, res) => {
    const { sessionId } = req.query
    await db.deleteSession(sessionId)
    res.sendStatus(200)
})

router.get('/', async (req, res) => {
    const { sessionId } = req.query
    db.getUserBySesssionId(sessionId).then(() => {
        db.touchSession(sessionId)

        res.send(true)
    }).catch(() => {
        res.send(false)
    })

})





module.exports = router
// const DB = {
//     users: [{ _id: randomid(), username, password }],
//     sessions: {},
// }

// const findUserByUsername = async (username) => DB.users.find((u) => u.username === username)

// const findUserBySessionId = async (sessionId) => {
//     const userId = DB.sessions[sessionId];
//     if (!userId) {
//         return
//     }
//     return DB.users.find((u) => u._id === userId)
// }

// const createSession = async (userId) => {
//     const sessionId = randomid();
//     DB.sessions[sessionId] = userId;
//     return sessionId;

// }

// const deleteSession = async (sessionId) => {
//     delete DB.sessions[sessionId]
// }

// app.use(cookieParser())

// const auth = () => async (req, res, next) => {

//     if (!req.cookies['sessionId']) {
//         return next()
//     }

//     const user = findUserBySessionId(req.cookies['sessionId'])
//     req.user = user
//     req.sessionId = req.cookies['sessionId']
//     next()
// }



// app.get("/", auth(), async (req, res) => {
//     res.render('index', {
//         user: req.user,
//         authError: req.query.authError === 'true' ? 'Логин или пароль введены неверно' : req.query.authError
//     })
// })

// app.post("/login", bodyParser.urlencoded({ extended: false }), async (req, res) => {
//     const { username, password } = req.body;
//     const hashPass = hash(password)
//     const user = await findUserByUsername(username);
//     if (!user || user.password !== hashPass) {
//         return res.redirect('/?authError=true')
//     }
//     const sessionId = await createSession(user._id)
//     res.cookie('sessionId', sessionId, { httpOnly: true }).redirect("/")
// })

// app.get("/logout", auth(), async (req, res) => {
//     if (!req.user) {
//         return res.redirect("/")
//     }
//     await deleteSession(req.sessionId);
//     res.clearCookie('sessionId').redirect('/')
// })
