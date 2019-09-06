//Creamos un vector desordenado
var unOrdered = [9, 4, 10, 8, 2, 4];


//Sacamos el valor máximo y el valor mínimo
var max = unOrdered[0];
var min = unOrdered[0];

for (i = 0; i < unOrdered.length; i++) {
  if (unOrdered[i] > max) max = unOrdered[i];
  if (unOrdered[i] < min) min = unOrdered[i];
}

console.log(`Max number = ${max}`);
console.log(`Min number = ${min}`);


//Creamos un nuevo vector del minimo al máximo
var newArray = [];
var x = min;

for(i=0;i<=max-min;i++){
    newArray[i] = x++;
}

console.log(newArray);


//Creamos un contador de los campos y lo inicializamos en 0
var count = [];

for(i=0;i<newArray.length;i++){
  count[i] = 0;
}

console.log(count);


//Contamos las veces que se repite el número
for(i=0;i<newArray.length;i++){
  for(y=0;y<unOrdered.length;y++){
    if(newArray[i] == unOrdered[y]){
      count[i]++;
    }
  }
}

console.log(count);


//Contamos la suma de las veces que se repite el numero
var sumCount = [...count];

for(i = 1; i<sumCount.length;i++){
  sumCount[i] = sumCount[i] + sumCount[i-1];
}
console.log(sumCount);


//Creamos un arreglo ordenado, ya al fin resolvemos el ejercicio
var ordened =  []

for(i=0;i<unOrdered.length;i++){
  for(y=0;y<newArray.length;y++){
    if(unOrdered[i] == newArray[y]){
      ordened[sumCount[y]-1] = newArray[y];
      sumCount[y]--;
    }
  }
}
console.log(ordened)