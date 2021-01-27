function inicializa(){

}

var mochila = [];



function compra(objeto){
    if(objeto==1){
        mochila.push('Espada');

    }
    else{
        mochila.push('Pocion');

    }
    muestraInventario();
}
function muestraInventario(){
for (let i = 0; i < mochila.length; i++) {
    console.log(i+'-'+ mochila[i]);

}
}
function vender(){
    mochila.pop()
    muestraInventario();
}







