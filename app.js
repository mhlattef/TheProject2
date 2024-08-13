import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import pg from "pg";


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

app.listen(port);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// const db = new pg.Client({
//     user: "postgres",
//     host: "localhost",
//     database: "hello_world",
//     password: "password",
//     port: 5432,
// });
// db.connect();

const db = new pg.Client({
    user: "postgres",
    host: "database-1.cfiki8kaiax8.us-east-1.rds.amazonaws.com",
    database: "postgres",
    password: "password2",
    port: 5432,
});
db.connect();

// const result = await db.query("SELECT fname from users")

// db.query("INSERT INTO users_1 (fname, lname, email, item, filelink, entry_time) VALUES ('qqqq', 'aaaa', 'qzana@mm.com', 'vvvveedd', 'http://vjid.sss.com', CURRENT_TIMESTAMP)")


app.get("/",  (req, res) => {
    res.render(__dirname + "/index.ejs")
    // console.log(result)
});

app.post("/submitform", (req, res) => {
    const fnamesub = req.body['fnamein'];
    const lnamesub = req.body['lnamein'];
    const emailsub = req.body['emailin'];
    const itemsub = req.body['itemin'];
    const filenamesub = req.body['filenamein'];

    const timesub = "CURRENT_TIMESTAMP";
    // const filelinksub = req.body['filelink'];


    db.query(`INSERT INTO users_1 (fname, lname, email, item, filename, entrytime) VALUES ('${fnamesub}', '${lnamesub}', '${emailsub}', '${itemsub}', '${filenamesub}', ${timesub})`);
    // db.query("INSERT INTO users_1 (fname, lname, email, item, entry_time) VALUES ('qqqq', 'aaaa', 'qzana@mm.com', 'vvvveedd', CURRENT_TIMESTAMP)")
    res.render(__dirname + "/index.ejs")


    console.log(timesub)
  })