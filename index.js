const express = require('express');
require('dotenv').config();
//crear servidor express
const app = express();

//Acceso al directorio público
app.use(express.static('public'));


//Rutas
app.use('/api/auth',require('./routes/auth'));
//configurar el puerto
app.listen(process.env.PORT, ()=>{
console.log(`Backend corriendo en el puerto ${process.env.PORT}`);
})
