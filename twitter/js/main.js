
var eventoBoton = document.getElementById("boton");
  eventoBoton.addEventListener("click",agregarLista);

function agregarLista(){
  var textoTarea = document.getElementById("listaTarea").value;
  //textoTarea = document.createTextNode("texto");
  if(textoTarea == 0) {
    alert("Ingresa un texto");
  }else{
    var texto = document.createTextNode(textoTarea);  //convierto a nodo el valor de mi textoTarea
    var listaUl = document.getElementById("listaUl");
    var lista = document.createElement("li"); //creé mis etiquetas <li></li>
    var check = document.createElement("input");
    check.setAttribute("type","checkbox"); //creé mi checkbox
    var spanTrash = document.createElement("span");
    spanTrash.setAttribute("class", "glyphicon glyphicon-trash");  // icono de bote de Basura para eliminar mi texto
    lista.appendChild(check);  //para mi checkbox
    lista.appendChild(texto); //para mi texto segudo del checkbox
    lista.appendChild(spanTrash);  //para el icono trash que va a eliminar
    listaUl.appendChild(lista);  //para lo que va a contener lo antaerior, la casilla.rrrrrrrrrrrrr
    
    boton.addEventListener("click",quitarLi);
    spanTrash.addEventListener("click",quitarLi);

    function quitarLi(e){
      li =e.target.parentElement,
      li.parentElement.removeChild(li);
    }
  }
}














// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("input").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li)
//   }
//   document.getElementById("input").value = "";

//   // var span = document.createElement("SPAN");
//   // var txt = document.createTextNode("\u00D7");
//   // span.className = "close";
//   // span.appendChild(txt);
//   // li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }