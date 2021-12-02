require("dotenv").config()
const express = require("express")

const server = express(); // express invoked as a function

server.get("/api/users", (req, res) => {
    res.json([
        { id: 1, username: "foo" },
        { id: 2, username: "bar" },
        { id: 3, username: "baz" },
    ])
})

// Heroku won't like hardcoded port
const PORT = process.env.PORT || 8080 // implement a fallback port

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})