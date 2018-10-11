//Definir la matriz o arreglo con los datos
var lista = new Array('Computadoras', 'Telefonos', 'Componentes', 'Accesorios', 'Rines');
//Función iniciar desde donde se controlarán los manejadores de evento
//a utilizar
function iniciar(){
 //Creando el controlador de evento para el evento
 //doble clic sobre los elementos del cuadro de lista
 var lista = document.getElementById("lstprod");
 //Cargando los datos en el cuadro de lista al cargar la página
 cargarLista();
 if(lista.addEventListener){
 lista.addEventListener("dblclick", function(){
 cargarTexto(this.options[this.selectedIndex].text);
 }, false);
 }
 else if(lista.attachEvent){
 lista.attachEvent("ondblclick", function(){
 cargarTexto(this.options[this.selectedIndex].text);
 });
 }

 //Capturando el campo de texto sobre el que se ingresan los deportes
 //mediante pulsasión de tecla
 var texto = document.getElementById("txtbuscador");
 if(texto.addEventListener){
 texto.addEventListener("keyup", buscar, false);
 }
 else if(texto.attachEvent){
 texto.attachEvent("onkeyup", buscar);
 }
 }


function cargarLista() {
 // Cargamos el combo
 for(x=0;x<lista.length;x++)
 document.frmsearchprod.lstprod[x] = new Option(lista[x]);
}


function cargarTexto(elemento){
 if(elemento!=null && elemento!=undefined && elemento!=""){
 var str = document.getElementById("txtbuscador").value;
 if(elemento == "Computadoras") location.href= "cat1.html";
else if(elemento == "Telefonos") location.href= "cat2.html";
else if(elemento == "Componentes") location.href= "cat3.html";
else if(elemento == "Accesorios") location.href= "cat4.html";
else if(elemento == "Rines") location.href= "cat5.html";	
}
}




function buscar() {
 limpiarLista();
 // Se obtiene el valor del texto
  var str = document.getElementById("txtbuscador").value;
 // Crear la expresión regular
 var expr = new RegExp("^" + str,"i");
 // Recorrer la lista. Si la expresión regular es OK
 y = 0;
 for(x=0;x<lista.length;x++) {
 if(expr.test(lista[x])) {
 document.frmsearchprod.lstprod[y] = new Option(lista[x]);
 y++;
 }
 }
}




function limpiarLista() {
 for(x=document.frmsearchprod.lstprod.length;x>=0;x--)
 document.frmsearchprod.lstprod[x] = null;
}


//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
 window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 window.attachEvent("onload", iniciar);
}





/*var lista = new Array('Computadoras', 'Telefonos', 'Componentes', 'Accesorios', 'Rines');

function iniciar(){

 var lista = document.getElementById("lstprod");

 cargarLista();


 if(lista.addEventListener){
 lista.addEventListener("dblclick", function(){
 cargarTexto(this.options[this.selectedIndex].text);
 }, false);
 }
 else if(lista.attachEvent){
 lista.attachEvent("ondblclick", function(){
 cargarTexto(this.options[this.selectedIndex].text);
 });
 }


 var texto = document.getElementById("txtbuscador");
 if(texto.addEventListener){
 texto.addEventListener("keyup", buscar, false);
 }
 else if(texto.attachEvent){
 texto.attachEvent("onkeyup", buscar);
 }

 }


function cargarLista() {

 for(x=0;x<lista.length;x++)
 document.frmsearchprod.lstprod[x] = new Option(lista[x]);
}

function cargarTexto(elemento){
 if(elemento!=null && elemento!=undefined && elemento!="")
 document.frmsearchprod.txtbuscador.value = elemento;

if(elemento == "Computadoras") location.href= "cat1.html";
else if(elemento == "Telefonos") location.href= "cat2.html";
else if(elemento == "Componentes") location.href= "cat3.html";
else if(elemento == "Accesorios") location.href= "cat4.html";
else if(elemento == "Rines") location.href= "cat5.html";
}


function buscar() {
 limpiarLista();
 var str = document.getElementById("txtbuscador").value;
 var expr = new RegExp("^" + str,"i");

 y = 0;
 for(x=0;x<lista.length;x++) {
 if(expr.test(lista[x])) {
 document.frmsearchprod.lstprod[y] = new Option(lista[x]);
 y++;
 }
 }
}


function limpiarLista() {
 for(x=document.frmsearchprod.lstprod.length;x>=0;x--)
 document.frmsearchprod.lstprod[x] = null;
}

if(window.addEventListener){
 window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 window.attachEvent("onload", iniciar);
}*/