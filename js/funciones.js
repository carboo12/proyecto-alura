alert("Bienvenidos al Incriptador y Desincriptador de mensajes")

function mensajes(m){
    alert(m);
}

function vacio(){
    mensajes("Caja de texto Vacia Favor LLenarla");
    document.getElementById("textingreso").focus();
}

function limpiar(){
    document.getElementById("textingreso").value = "";
}
function limpiar2(){
    document.getElementById("areaingreso").value = "";
}

function ocultar(element){
    document.getElementById(element).style.display = "none";
}

function desocultar(elemento){
    document.getElementById(elemento).style.display = "block";
}


function frirar(){    
    var ingresar = document.getElementById("textingreso").value.toLowerCase();
    var texto =  document.getElementById("areaingreso").value;
    if(ingresar != ""){
        ocultar("imagendedatos");
        desocultar("areaingreso");
        desocultar("btncopiar");
        var cifrador = ingresar.replace(/e/igm,"enter");
        var cifrador = cifrador.replace(/o/igm,"ober");
        var cifrador = cifrador.replace(/i/igm,"imes");
        var cifrador = cifrador.replace(/a/igm,"ai");
        var cifrador = cifrador.replace(/u/igm,"ufat");
        document.getElementById("areaingreso").innerHTML = cifrador;    
        limpiar();  
        mensajes("Cifrado");
    } else if (ingresar=="" && texto!="") {
        mensajes("Favor Dale al Boton Copiar")
    } else {       
        vacio(); 
        desocultar("imagendedatos");
        ocultar("areaingreso");
        ocultar("btncopiar");
    }       
}

function copiar(){    
    var texto =  document.getElementById("areaingreso").value;
    var ingresar = document.getElementById("textingreso").value;
    if(texto != ""){
        document.getElementById("textingreso").value = texto;
        limpiar2();
        mensajes("Mensaje Copiado");
    }else if (texto=="" && ingresar!="") {
        mensajes("Favor Dale al Boton Cifrar o Desifrar")
    }else {
        mensajes("No se puede copiar por que el elemeto se encuetra vacio");
        desocultar("imagendedatos");
        ocultar("areaingreso");
        ocultar("btncopiar");
    }    
}

function desifrar(){
    var desi = document.getElementById("textingreso").value.toLowerCase();
    var texto =  document.getElementById("areaingreso").value;
    if(desi != ""){
        ocultar("imagendedatos");
        desocultar("areaingreso");
        desocultar("btncopiar");
        var desiarea = desi.replace(/enter/igm,"e");
        var desiarea = desiarea.replace(/ober/igm,"o");
        var desiarea = desiarea.replace(/imes/igm,"i");
        var desiarea = desiarea.replace(/ai/igm,"a");
        var desiarea = desiarea.replace(/ufat/igm,"u");
        document.getElementById("areaingreso").value = desiarea;
        limpiar();
        mensajes("Mensaje Desifrado");
    }else if (desi=="" && texto!="") {
        mensajes("Favor Dale al Boton Copiar")
    } else{
        vacio();
        desocultar("imagendedatos");
        ocultar("areaingreso");
        ocultar("btncopiar");
    }    
}
        
