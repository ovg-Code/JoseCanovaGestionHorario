const express = require('express')
const routerApi = require('./routes')
const cors = require('cors')
const{logErrors,errorHandler,boomErrorHandler}=require('./middlewares/error.handler')
const cors = require('cors');
const app = express();
const port = 3000;
app.use(express.json());
<<<<<<< HEAD

app.get('/',(req,res)=>{ 
=======
app.use(cors());
app.get('/',(req,res)=>{
>>>>>>> 4473b2679aebd8142687763c023e206e3e1ed5d3

	res.send('Iniciando server')

})
require('./utils/auth')
app.use(cors())
routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port,()=>{
	console.log('Mi puerto'+port)
})

