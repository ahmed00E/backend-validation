const express = require("express")
const app = express()
const port = 5000

const valid = require("./valid.json")

// app.get('/' (req, res) => {
//   res.json(valid)
// })


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })