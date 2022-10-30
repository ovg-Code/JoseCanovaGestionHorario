const express = require('express')
const routerApi = require('./routes')
const{logErrors,errorHandler,boomErrorHandler}=require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.get('/',(req,res)=>{

	res.send('Iniciando server')

})

routerApi(app)
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port,()=>{
	console.log('Mi puerto'+port)
})

