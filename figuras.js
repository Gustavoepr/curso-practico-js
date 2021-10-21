//cuadrado
console.group("cuadrado");
function perimetrocuadrado(ladocuadrado){
    return ladocuadrado * 4
}
function areacuadrado(ladocuadrado){
    return ladocuadrado * ladocuadrado
}
console.groupEnd();
//tiangulo
console.group("triangulo");
function perimetriangulo(lado1, lado2, base){
    return pertriangulo = lado1 + lado2 + base;
}
function areatiangulo(base, altura){
    return (base * altura) / 2;
} 
console.groupEnd();

//circulo
console.group("circulo");
const PI = Math.PI;
function diametro(radio){
    return radio * 2;
}
function circunferencia(radio){
    var diametro = radio * 2;
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

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = Number(input.value);

    const areadelcuadrado = areacuadrado(value);
    alert(areadelcuadrado);
}

function CalcularPerimetroTriangulo(){
    const input1 = document.getElementById("Lado-1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("Lado-2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("Base");
    const value3 = Number(input3.value);

    if (value1 === value2 && value1 != value3){
        var perIsosceles = (2 * value1) + value3
        alert("Es un triangulo isosceles")
        alert(perIsosceles)
    } else{
        alert("No es un triangulo isosceles");
        var perimetro = perimetriangulo(value1, value2, value3);
    alert(perimetro)
    }   
}

function CalcularAreaTriangulo(){
    const input1 = document.getElementById("Lado-1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("Lado-2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("Base");
    const value3 = Number(input3.value);

    if (value1 === value2 && value1 != value3){
        alert("Es un triangulo isosceles")
        const h = (value3 / 2)**2;
        const cateto = (value1)**2
        const height = Math.sqrt(Number(cateto) - Number(h));
        alert(height)
    } else{
        alert("No es un triangulo isosceles");
        //var perimetro = perimetriangulo(value1, value2, value3);
    //alert(perimetro)
    }   

    //var arTriangulo = areatiangulo(value1, value2);
    //alert(arTriangulo)
}

function CalcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = Number(input.value);

    var perCirculo = circunferencia(value);
    alert(perCirculo);
}

function CalcularAreaCiculo(){
    const input = document.getElementById("InputRadio");
    const value = Number(input.value);

    var arCirculo = areaciculo(value);
    alert(arCirculo);
}

