const express = require("express")
const app = express();
const routes = require('./routes/routes')


app.use(express.urlencoded({extended:true}))

const port = 3000
app.use('/', routes)
app.listen(port, () => {
    console.log("servidor iniciado na porta" + port)
})