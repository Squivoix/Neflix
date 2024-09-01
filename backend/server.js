let express = require("express");
let session = require("express-session");
let cors = require("cors");
let jwt = require("jsonwebtoken");

let app = express();

const secretKey = "secretKey";

const data = {
    users: [
        { id: 1, name: "Victor", email: "victor@email.com", password: "1234" }
    ]
}

const generateToken = (userId) => {
    return jwt.sign({ userId }, secretKey, {expiresIn: 60 * 60});
}

app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUnitialized: false
}))

app.post("/login", (req, res) => {
    console.log(req.body);
    let loggedIn = false;
    let loggedUser;

    data.users.forEach((user) => {
        if (req.body.email == user.email && req.body.password == user.password) {
            loggedIn = true;
            loggedUser = user;
        }
    })

    if (loggedIn) {
        const sessionData = req.session;
        const token = generateToken(loggedUser.id);

        sessionData.loggedIn = true;
        sessionData.userId = loggedUser.id;

        res.send({
            sessionId: token
        });
    } else {
        res.send("Error");
    }
})

app.listen(8080);