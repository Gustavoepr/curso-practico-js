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
    return pertriangulo = lado1 + lado2 + base;
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
    
    var perimetro = perimetrocuadrado(value);
    alert(perimetro)
}

function CalcularPerimetroTriangulo(){
    const input1 = document.getElementById("Lado-1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("Lado-2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("Base");
    const value3 = Number(input3.value);

    var perimetro = perimetriangulo(value1, value2, value3);
    alert(perimetro)
}