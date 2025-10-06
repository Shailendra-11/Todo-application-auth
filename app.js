const express = require("express")
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})





app.listen(700 ,()=>{
 console.log("this is start server")
})