//cuadrado
console.group();
function perimetrocuadrado(ladocuadrado){
    return ladocuadrado * 4
}
function areacuadrado(ladocuadrado){
    return ladocuadrado * ladocuadrado
}
console.groupEnd();
//tiangulo
console.group();
function perimetriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areatiangulo(base, altura){
    return (base * altura) / 2;
} 
console.groupEnd();

//circulo
console.group();
const PI = Math.PI;
function diametro(radio){
    return radio * 2;
}
function circunferencia(radio){
    var diametro = diametro(radio);
    return diametro * PI
}
function areaciculo(radio){
    return (radio * radio) * PI
} 
console.groupEnd();


function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    perimetro = perimetrocuadrado(value);
    alert(perimetro)
}