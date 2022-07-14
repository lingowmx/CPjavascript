// const precioOriginal = 120;
// const descuento = 18;


const coupons = [
    { name: "cool", discount: 10,},
    { name: "chido", discount: 15,},
    { name: "ultra", discount: 50},
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupons");
    const couponValue = inputCoupon.value;

  //  let descuento;
    //     switch(couponValue){
    //         case coupons [0]:
    //             descuento = 10;
    //             break;
    //         case coupons [1]:
    //             descuento = 15;
    //             break;
    //         case coupons [2]:
    //             descuento = 50;
    //             break;
    //     }

    // if(!coupons.includes(couponValue)){
    //     alert("El cupon " + couponValue + " no es valido");
    // } 
    // else if (couponValue === "cool"){
    //     descuento = 10;
    // }
    // else if (couponValue === "chido"){
    //     descuento = 15;
    // }
    // else if (couponValue === "ultra"){
    //     descuento = 50;
    // }

    
    const isCouponValueValid = function (coupon){
        return coupon.name === couponValue;
    };
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon){
        alert("El cupon " + couponValue + " no es valido");
    }
    else{
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    }

}   


// console.log({
// precioOriginal,
// descuento,
// porcentajePrecioConDescuento,
// precioConDescuento
// });