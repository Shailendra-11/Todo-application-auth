const http = require("http")





http.createServer((req , resp)=>{
   resp.end("hello")
}).listen(6200)