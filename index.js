//FUNCIONES 

const iva = x => x * 0.21;
const suma = (a,b) => a + b;


function codigoPostal(numero,localidad){
    this.numero = numero;
    this.localidad = localidad;
}
const localidades = [ ];
localidades.push(new codigoPostal(1714 , "Ituzaingo"));
localidades.push(new codigoPostal(1712 , "Moron"));
localidades.push(new codigoPostal(1715 , "Leloir"));

function cracionDeProductos(nombre,precio){
    this.nombre = nombre
    this.precio = precio
}

const productos = [];
productos.push(new cracionDeProductos("Proteina", 1500  ));
productos.push(new cracionDeProductos("Creatina", 6500  ));
productos.push(new cracionDeProductos("Pre Entreno", 2500  ));

function calculadorDePrecio(ubicacion, resultado) {
        switch (ubicacion.numero) {
            case 1714:
                let ituzaingo = 500;
                let precioTotal = suma(resultado.precio, iva(resultado.precio))
                console.log(`El precio total del prodcuto es: ${precioTotal} y el costo del envio a ${ubicacion.localidad} es: $${ituzaingo} `);
                break;
            
            case 1712:
                let moron = 600;
                let precioTotal1 = suma(resultado.precio, iva(resultado.precio))
                console.log(`El precio total del prodcuto es: ${precioTotal1} y el costo del envio a ${ubicacion.localidad} es: $${moron} `);
                break;
            
            case 1715:
                let leloir = 700;
                let precioTotal2 = suma(resultado.precio, iva(resultado.precio))
                console.log(`El precio total del prodcuto es: ${precioTotal2} y el costo del envio a ${ubicacion.localidad} es: $${leloir} `);
                break;
        }
    }                


//ALGORITMO

let producto = prompt('ingrese un nombre del producto :');
const resultado = productos.find((el) => el.nombre === producto)
const verdad = productos.some((el) => el.nombre === producto)
    if (verdad == true && resultado.precio > 0) {
        if(resultado.precio < 5000){
            let codigoPostal = parseInt(prompt("ingrese un codigo postal: (1714 , 1712 , 1715)"));
            const ubicacion = localidades.find((el) => el.numero === codigoPostal)
            calculadorDePrecio(ubicacion, resultado)
        } 
        else{
            console.log( 'El envio es gratis')
            console.log( 'Precio total del prducto :' + resultado.precio)
        }
    }
else{
    console.log('No se ingreso ningun producto')
}