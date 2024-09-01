let express = require("express");
let session = require("express-session");
let cors = require("cors");
let jwt = require("jsonwebtoken");

let app = express();

const secretKey = "secretKey";

app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUnitialized: false
}))

const data = {
    users: [
        { id: 1, name: "Victor", email: "victor@email.com", password: "1234" }
    ]
}

app.listen(8080);