
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
let texto8 = prompt("Ingresa texto")
function palindromo(textoP) {    
let as = textoP.toLowerCase().replace(/[^a-z0-9]/g, "");
return as === as.split("").reverse().join("");
}
if(palindromo(texto8) == true){
console.log("El texto ingresado es un palíndromo"); 
}
else if(palindromo(texto8) == false){
console.log("El texto ingresado NO es un palíndromo"); 
}

}



function Persona(nombre, edad, genero){
    this.nombre = nombre
    this.edad = edad
    this.genero = genero
}

Persona.prototype.obtDetalle = function(){
    console.log(this.nombre)
    console.log(this.edad)
    console.log(this.genero)
}

function Estudiante(nombre, edad, genero, curso,grupo){
    Persona.call(this, nombre, edad, genero)
    this.curso = curso
    this.grupo = grupo
} 

Estudiante.prototype = Object.create(Persona.prototype)
Estudiante.prototype.constructor = Estudiante

function eje9(){    
let p1 = new Persona("Persona1", 20, "Masculino");
let e1 = new Estudiante("Estudiante1", 18, "Femenino", "1º", "A");
console.log(p1.obtDetalle())
console.log(e1.obtDetalle())
}

let p3 = new persona("Profesor")
persona.prototype.obtDetalle=function(nombre, edad, genero, asignatura, nivel){
this.nombre = nombre
this.edad= edad
this.genero= genero
this.asignatura = asignatura
this.nivel = nivel
p3.asignar()
}


function eje10(){
let a210 = 0, a310 = 0, a410=0, a510=0, a610=0, a710=0, a810=0,a910=0, a1010=0, a1110=0, a1210 = 0
for (i=36000;i--;i<0)
{
let dado1 = Math.floor(Math.random()*6)+1
let dado2 = Math.floor(Math.random()*6)+1
let suma = dado1 + dado2
let array10 = [0,0,0,0,0,0,0,0,0,0,0,0]
console.log(suma)
if(suma==2){
a210++
}
else if (suma==3){
a310++
}
else if (suma==4){
a410++
}
else if (suma==5){
a510++
}
else if (suma==6){
a610++
}
else if (suma==7){
a710++
}
else if (suma==8){
a810++
}
else if (suma==9){
a910++
}
else if (suma==10){
a1010++
}
else if (suma==11){
a1110++
}
else if (suma==12){
a1210++
}

}

}
