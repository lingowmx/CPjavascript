// CUADRADO
const perimetroCuadrado = lado => lado * 4;
const areaCuadrado = lado => lado * lado;

//TRIANGULO
const perimetroTriangulo = (base, ladoA, ladoB) => base + ladoA + ladoB;
const areaTriangulo = (base, altura) => (base * altura) / 2;

//CIRCULO
const diametroCirculo = radio => radio * 2;
const PI = Math.PI;
const perimetroCirculo = radio => diametroCirculo(radio) * PI;
const areaCirculo = radio => (radio * radio) * 2;

//INTERACCION CON HTML
//CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert (perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert (area);
}

//TRIANGULO
function calcularPerimetroTriangulo(){
    const inputLadoA = document.getElementById("inputLadoA");
    const valueA = Number(inputLadoA.value);
    const inputLadoB = document.getElementById("inputLadoB");
    const valueB = Number(inputLadoB.value);
    const inputBase = document.getElementById("inputBase");
    const valueBase = Number(inputBase.value);
    const perimetro = perimetroTriangulo(valueBase, valueA, valueB);
    alert("El perimetro del triangulo es " + perimetro);
}
function calcularAreaTriangulo(){
    const baseTriangulo = document.getElementById("inputBase");
    const valueBase = Number(inputBase.value);
    const inputAltura = document.getElementById("inputAltura");
    const valueAltura = Number(inputAltura.value);
    const area = areaTriangulo(valueBase, valueAltura);
    alert("El area del triangulo es " + area);

    // function altura(lado1, lado2, base){
    //     if(lado1 === lado2 && lado1 != base){
    //         // alert("Es un triangulo isoceles");
    //         const alturaTriangulo = Math.sqrt(lado1**2 - base**2 / 4);
    //         // console.log(altura)
    //     } else {
    //         alert ("no es")
    //     }
    // }
}

//CIRCULO
function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputRadio");
    const valueRadio = Number(inputRadio.value);
    const diametro = diametroCirculo(valueRadio);
    const perimetro = perimetroCirculo(valueRadio);
    alert ("El perimetro o circunferencia del circulo es " + perimetro);
}
function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputRadio");
    const valueRadio = Number(inputRadio.value);
    const diametro = diametroCirculo(valueRadio);
    const area = areaCirculo(valueRadio);
    alert ("El area del circulo es " + area);
}
