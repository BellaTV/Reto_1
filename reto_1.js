const mensajeEncriptado = '^[()`~^*/?`[()^+`-~()#[$()/~()%\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\{()*~¡[$[{()¡[()?=[]`\¬]()¿()[{;+[$__~()`~]=\]+~'

const caracteres = {
    '()' :' ',
    '?':'a',
    '[':'e',
    '\\' : 'i', 
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

const intento2 = reemplazarPista(mensajeDesencriptado,'$[?`t', 'react' );
const intento3 = reemplazarPista(intento2, 'g\=-+%', 'GitHub');
const intento4 = reemplazarPista(intento3, '__', 'z' )
console.log(intento4)