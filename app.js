import express from 'express'
import path from 'path'
const app = express()

app.get('/', (req, res) => {
  const abstPath = path.resolve("page/Home.html")
  res.sendFile(abstPath)
})

app.get('/login', (req, res) => {
  const abstPath = path.resolve("page/login.html")
  res.sendFile(abstPath)
})

app.get('/about', (req, res) => {
  const abstPath = path.resolve("page/about.html")
  res.sendFile(abstPath)
})


app.use('/' , (req, res) => {
  const abstPath = path.resolve("page/404.html")
  res.sendFile(abstPath)
})


app.listen(700 ,()=>{
 console.log("this is start server")
})