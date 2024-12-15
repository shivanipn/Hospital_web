const express = require('express')
const app = express()
const port = 4400
const web = require("./Routes/web")
const DataConnect = require("./DB/DataConnect")
const cors = require('cors')
DataConnect()

app.use(cors())
app.use(express.json())
app.use('/api',web)

app.listen(port,()=>{
    console.log(`server is working ${port}`)
})