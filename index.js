const express = require('express')
const routerApi = require('./routes')
const{logErrors,errorHandler,boomErrorHandler}=require('./middlewares/error.handler')
const cors = require('cors');
const path = require('path')
const app = express();
const port = 3000;
app.use(express.json());


app.use(express.static(path.join(__dirname,'public')))
require('./utils/auth')
app.use(cors())
routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port,()=>{
	console.log('Mi puerto'+port)
})

