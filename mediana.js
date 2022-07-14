function calcularMediana (lista){
    let listaOrdenada = lista.sort(
        function (a ,b){
            return a - b;
        }
    )
    const mitadLista = parseInt(listaOrdenada.length / 2);
    let mediana;

    if (esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElementos;
    } 
    else {
        mediana = listaOrdenada[mitadLista];
    }
    return mediana;
}

function esPar (numero){
    if(numero % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}



function calcularMediaAritmetica (lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promediolista = sumaLista / lista.length;
        return promediolista;
}
    






// function calcularMediaAritmetica(lista){
//     const sumaLista = lista.reduce(
//         function (valorAcumulado = 0, nuevoElemento){
//             return valorAcumulado + nuevoElemento;
//         }
//     );

// // const lista1 = [ 
// //     100, 
// //     200, 
// //     500, 
// //     10, 
// // ];

// function caldularMediana (lista){
//     let listaOrdenada = lista.sort(function(a,b) => a -b);
//     const mitadLista1 = parseInt(listaOrdenada.length/2);

//     let mediana;

//     if listaOrdenada.length % 2 === 0){
//         const elemento1 = listaOrdenada[mitadLista];
//         const elemento2 = listaOrdenada[mitadLista - 1];
//         const promedioElementos = (elemento1 + elemento2) / 2;
//         mediana = promedioElementos;
//     } else {
//         mediana = listaOrdenada[mitadLista];
//     }
//         return mediana;
// }


// function esPar(numerito){
//     if (numerito % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// let mediana;

// if(esPar(lista1.length)){
//     const elemento1 = lista1[mitadLista1 - 1];
//     const elemento2 = lista1[mitadLista1];
//     const promedioElemento1y2 = calcularMediaAritmetica([
//         elemento1,
//         elemento2,
//     ]);
//     mediana = promedioElemento1y2;
// } else{
//     mediana = lista1[mitadLista1];
// }
// }
