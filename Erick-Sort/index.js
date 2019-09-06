const array= [5,3,8,6,10];
var max = array[0];
var min = array[0];
for(i=0;i<array.length;i++){
    if(array[i]>max) max = array[i]
    if(array[i]<min) min = array[i];
}
var x = 0;
var ordered = [];
for(min;min<=max;min++){
    for(i=0;i<array.length;i++){
        if(array[i]== min){  
            ordered[x] = array[i];  
            x++   
        }
    }
}
console.log(`Arreglo desordenado: ${array}`);
console.log(`Arreglo ordenado: ${ordered}`);
