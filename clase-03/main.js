//ejercicio REAR UN ALGORITMO UTILIZANDO UN CICLO


var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for (var i = 0; i <= dias.length -1; i++) {
   if (i == 6) {
       console.log("Llegaste vivio al final de la semana!!!")
   }
   
    else if (i % 2 ==0 && i!=0) {
    console.log(dias[i])
   }
}
///////////////////////////////////////////////////////////
