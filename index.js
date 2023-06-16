
function codigosPoastales(codigoPostal) {
    while (codigoPostal > 0) {
        switch (codigoPostal) {
            case 1714:
                let ituzaingo = 500;
                console.log( 'El envio es a Ituzaingo y el costo es : ' + ituzaingo);
                let total = precio + ituzaingo;
                console.log("Precio total del producto: " + total);
                break;
            
            case 1712:
                let moron = 600;
                console.log( 'El envio es a Moron y el costo es : ' + moron);
                let total1 = precio + moron;
                console.log("Precio total del producto: " + total1);
                break;
            
            case 1715:
                let leloir = 700;
                console.log( 'El envio es a Leloir y el costo es : ' + leloir);
                let total2 = precio + leloir;
                console.log("Precio total del producto: " + total2);
                break;
        }
        codigoPostal = Number(prompt("ingrese un codigo postal (1714 , 1712 , 1715)"));
    }                
}    



let precio = Number(prompt('ingrese un precio de un producto :'));

if (precio > 0) {
    if(precio < 5000){
        let codigoPostal = Number(prompt("ingrese un codigo postal (1714 , 1712 , 1715)"));
        codigosPoastales(codigoPostal);
    } 
    else{
        console.log( 'El envio es gratis')
        console.log( 'Precio total del prducto :' + precio)
    }
}
else{
    console.log('No se ingreso ningun producto')
}

