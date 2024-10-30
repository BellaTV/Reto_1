//Reto 01:

// Desencripta el mensaje de Ada Lovelace y descubre la inspiración que te tiene reservada: ^[()`~^*/?`[()^+`-~()#[$()/~()%\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\{()*~¡[$[{()¡[()?=[]`\¬]()¿()[{;+[$__~()`~]=\]+~

//se agrega una barra invertida(\) al lado de la que se encuentra en el mensaje para poder recorrer la cadena
const mensajeEncriptado = '^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~'

console.log('Mensaje encriptado:', mensajeEncriptado);

//caracteres conocidos
const caracteres = {
    '?':'a',
    '[':'e',
    '\\': 'i',
    '~':'o',
    '+':'u',
    '¬':'ó',
};

//funcion para remplazar los caracteres con las letras conocidas inicialmente
const desencriptarMensaje = (mensajeEncriptado) => {
    let mensajeDesencriptado = '';
    for (let i=0; i<mensajeEncriptado.length; i++){
        let caracter = mensajeEncriptado[i];
        if (caracteres[caracter]){
             mensajeDesencriptado += caracteres[caracter];
        }else{
            mensajeDesencriptado += caracter;
        }    
    }
    return mensajeDesencriptado;
};

const mensajeDesencriptado = desencriptarMensaje(mensajeEncriptado);

// funcion para remplazar las pistas que vamos encontrando
const reemplazarPista = (mensaje, pistas) => {
    pistas.forEach(({encriptado, desencriptado})=> {
        mensaje = mensaje.split(encriptado).join(desencriptado);
    });
    return mensaje;
};

const pistas = [
        { encriptado: '()', desencriptado: ' ' },
        { encriptado: '$', desencriptado: 'r' },
        { encriptado: '%', desencriptado: 'b' },
        { encriptado: '=', desencriptado: 't' },
        { encriptado: '__', desencriptado: 'z' },
        { encriptado: '^', desencriptado: 'm' },
        { encriptado: '-', desencriptado: 'h' },
        { encriptado: '{', desencriptado: 's' },
        { encriptado: ']', desencriptado: 'n' },
        { encriptado: '`', desencriptado: 'c' },
        { encriptado: '*', desencriptado: 'p' },
        { encriptado: '/', desencriptado: 'l' },
        { encriptado: '!', desencriptado: 'j' },
        { encriptado: ';', desencriptado: 'f' },
        { encriptado: '¡', desencriptado: 'd' },
        { encriptado: '¿', desencriptado: 'y' },
        { encriptado: '}', desencriptado: 'q' },
        { encriptado: '#', desencriptado: 'v' }
];

const mensajeRevelado = reemplazarPista(mensajeDesencriptado, pistas)

console.log('Mensaje desencriptado:', mensajeRevelado);

