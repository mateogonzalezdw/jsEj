
function eje(){
    let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
for(let i=0;i<12;i++){
console.log(meses[i])
}
}

function eje2(){
    var valores = [true, 5, false, "hola", "adios", 2];
if(valores[3]>valores[4])
{
console.log(valores[4]+" es mayor a "+valores[3])
console.log(valores[0])
console.log(valores[1]+valores[5])
console.log(valores[1]-valores[5])
console.log(valores[1]*valores[5])
console.log(valores[1]/valores[5])
console.log(valores[1]**valores[5])
}
else if(valores[3]<valores[4])
{
    console.log(valores[3]+" es mayor a "+valores[4])
    console.log(valores[2])    
}
}

function eje3(){
    var numero1 = 5;
var numero2 = 8;
if(numero1<numero2) {
console.log(numero1+" no es mayor que "+ numero2);
}
if(numero2>0) {
console.log(numero2+ " es positivo");
}
if(numero1>0) {
console.log(numero1+ " es negativo o distinto de cero");
}
if(numero1+1<numero2) {
console.log("Incrementar en 1 unidad el valor de "+ numero1+" no lo hace mayor o igual que "+ numero2);
}
}

function eje4(){
 
    let DNI = prompt("Ingrese su DNI")
   
 if(DNI<0||DNI>99999999){
    alert("El número no es válido")
 }
 else{
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];
        let DNIletra  


 console.log(DNI%23)
 DNIletra = letras[(DNI%23)]
 console.log(DNIletra)


let letraC = prompt("Calcula la letra")
if (letraC=DNIletra)
{
console.log("El número de y la letra del DNI son correctos")
}
else
{
console.log("La letra que ha indicado no es correcta")
}
 }
}

function eje5(){
    let N = prompt("Ingresa un número")
    for(i=N; i--;i>0)
    {
    console.log(N*(N-1))
    }
    }
    
function eje6(){
    let numero6 = prompt("Ingresa un número")
if (numero6 % 2 == 0){
    console.log("El número es par")
}
else{
    console.log("El número es impar")
}
}    

function eje7(){
 let texto7 = prompt("Ingresa texto")

 if(texto7 == texto7.toLowerCase()){
    console.log("El texto está en minúsculas")
 }
 else if(texto7 == texto7.toUpperCase())
 {
    console.log("El texto está en mayúsculas")
 }
 else{
    console.log("El texto está en minúsculas y mayúsculas")
 }

}
function eje8(){
let text = prompt("Ingresa texto")
}


function eje9(){
    
}
function eje10(){
}
