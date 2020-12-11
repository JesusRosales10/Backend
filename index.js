const express = require('express');

//crear servidor express

const app = express();

//Rutas
app.get('/', (req,res) =>{
  console.log('Se recibio la petición en /');
  res.json({
    ok:true,
    msg:"Recibido"
  });
}
);

//configurar el puerto
app.listen(4000, ()=>{
console.log(`Backend corriendo en el puerto ${4000}`);
})
