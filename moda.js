function moda  (lista){
    const listaCount = {};
    
    lista.map(
        function(elemento){
            if (listaCount[elemento]){
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    
    const listaArray = Object.entries(listaCount).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
        );
        
        const moda = listaArray[listaArray.length - 1];
        return moda;
    }
    //El objetc.entries creoa un array de un objeto con array por dentro
    //.sort 
    // its like. IF (elementoA > elementoB) return 1;
           //      if elementoA == elementoB) return 0;
               // if (elementoA < elementoB) RETURN -1;
