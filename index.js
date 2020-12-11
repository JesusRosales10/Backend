const express = require('express');
require('dotenv').config();

//crear servidor express

const app = express();



//Acceso al directorio público
app.use(express.static('public'));


//Rutas
/*app.get('/', (req,res) =>{

  res.json({
    ok:true,
    msg:"Recibido"
  });
}
);*/

//configurar el puerto
app.listen(process.env.PORT, ()=>{
console.log(`Backend corriendo en el puerto ${process.env.PORT}`);
})
