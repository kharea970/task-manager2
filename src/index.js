const express = require('express')
require('./db/mongoose') //file will run automatically
const User = require('./models/user')
const Task = require('./models/task');


const app = express();
app.use(express.json())
const port = process.env.PORT



const userRouter = require('./routers/user')
app.use(userRouter)

const taskRouter = require('./routers/task')
app.use(taskRouter)

app.listen(port,()=>{
    console.log("server is up on port " + port)
})


