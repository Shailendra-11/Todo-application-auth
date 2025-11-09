import express from 'express'
import mongoose from 'mongoose'
const app = express()

async function main() {
     try {
          await mongoose.connect('mongodb+srv://shailendrarai1110:prince%401110@prince.whitp1n.mongodb.net/Student');
          // console.log("success")
     } catch (error) {
          console.log("error connect to database", error)
     }
}

main()

app.listen(700, () => {
     console.log("this is start server")
})