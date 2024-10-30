const mensajeEncriptado = '^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~'

const caracteres = {
    '?':'a',
    '[':'e',
    '\\': 'i',
    '~':'o',
    '+':'u',
    '¬':'ó',
};

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

const reemplazarPista = (mensaje, pista, reemplazo) => {
    return mensaje.split(pista).join(reemplazo);
  };
  

const mensajeDesencriptado = desencriptarMensaje(mensajeEncriptado);
console.log('Mensaje desencriptado:', mensajeDesencriptado);

const intento2 = reemplazarPista(mensajeDesencriptado,'$', 'r' );
const intento3 = reemplazarPista(intento2, '%', 'b');
const intento4 = reemplazarPista(intento3, '=', 't');
const intento5 = reemplazarPista(intento4, '__', 'z' );
const intento6 = reemplazarPista(intento5, '^', 'm');
const intento7 = reemplazarPista(intento6, '-', 'h');
const intento8 = reemplazarPista (intento7, '()', '  ');
const intento9 = reemplazarPista (intento8, '{', 's');
const intento10 = reemplazarPista (intento9, ']', 'n');
const intento11 = reemplazarPista (intento10, '`', 'c');
const intento12 = reemplazarPista (intento11, '*', 'p');
const intento13 = reemplazarPista (intento12, '/', 'l');
const intento14 = reemplazarPista (intento13, '!', 'j');
const intento15 = reemplazarPista (intento14,';', 'f' );
const intento16 = reemplazarPista (intento15, '¡', 'd');
const intento17 = reemplazarPista (intento16, '¿', 'y');
const intento18 = reemplazarPista (intento17, '}', 'q');
const intento19 = reemplazarPista (intento18, '#', 'v');
console.log('Mensaje desencriptado:',intento19);