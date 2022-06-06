//Codigo cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// Codigo Triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
//     );

//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El area del triangulo es: " + areaTriangulo + "cm2");
console.groupEnd();

// Codigo Circulo
console.group("Circulos");

// Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio){
    return radio * 2;
} 
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
//console.log("PI mide: " + PI);

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;

}
//console.log("La perimetro mide: " + circunferenciaCirculo + "cm");

// Area
function areaCirculo(radio){
    return (radio * radio) * PI
} 
//console.log("El area del circulo mide: " + areaCirculo + "cm2");

console.groupEnd();


//INTERACTUAMOS CON EL HTML

//cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloLado2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTrianguloBase");
    const value3 = Number(input3.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloLado2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTrianguloBase");
    const value3 = Number(input3.value);
    const input4 =document.getElementById("InputTrianguloAltura");
    const value4 = Number(input4.value);
    const area = areaTriangulo(value3, value4);
    alert(area);

}
//Circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadioCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert("La circunferencia es " + perimetro + "cm");
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadioCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert("el AREA DEL Circulo es " + area + "cm2");
}