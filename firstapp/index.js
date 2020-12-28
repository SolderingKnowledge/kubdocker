const express = require("express");
const redis = require("redis");
const process = require("process")

const app = express();

const client = redis.createClient({
    // name of the server: https://redis.com in our case we called it redis-server
    host: "redis-server",
    port: 6379
});

client.set("visits", 0);

app.get("/", (req, res)=> {
    // process.exit(1);
    client.get("visits", (err, visits)=> {
        res.send("Number of visits is" + visits);
        client.set("visits", parseInt(visits) +1 );
    });
});

const PORT = 8081

app.listen(PORT, ()=> {
    console.log(`Listening on port:${PORT}` );
})