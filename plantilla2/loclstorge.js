/*if(typeof(Storage)!= "undefined"){
    alert("Localstorage permitido");
    
} else{
    alert("Localstorage no soportado");
}*/

function guardarData(){
 var usu =   localStorage.usua = document.getElementById('usu').value;
 var cont=   localStorage.contra = document.getElementById('psw').value;
 var ev=     localStorage.evalcon= document.getElementById('psw2').value;
var ema=    localStorage.email= document.getElementById('ema').value;
var tel=    localStorage.telephone = document.getElementById('tel').value;
  if(usu != /^(?:[\u00c0-\u01ffa-zA-Z'-]){2,}(?:\s[\u00c0-\u01ffa-zA-Z'-]{2,})+$/i){
      alert('Su Usuario debe tener al menos un nombre y un apellido');
      return false;
  }else{
      return true;
  }
    if(cont !=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/){
        alert('Su contrasena debe tener al menos 8 caracteres y 1 numero');
        return false;
    }else{
        return true;
    }
   
    if(cont != ev){
        alert('Su contrasena no coincide');
        return false;
      
    }
    else{
        return true;
    }
}
function validar_usuario_contrasena(event){
    //event.preventDefault();
    window.location = "PROS.html";
    
}

/*function validarForm(){
   var usu = $('usu').val();
    var psw = $('psw').val();
    var psw2 = $('psw2').val();
    var ema = $('ema').val();
    var tel = $('tel').val();
    
    if(usu != /^{20,50}(a-zA-ZáéíóúñÁÉÍÓÚÑ)/){
        alert('Su usuario debe tener al menos un nombre y un apellido.');
        return false;
    }else{
        return true;
    }
}*/

function evaluarData(event){
    var usu = document.getElementById('user').value;
    var cont =document.getElementById('passw').value;
    var evalusu = localStorage.getItem('usua');
    var evalcon = localStorage.getItem('contra');
    if(usu== evalusu && cont ==evalcon){
        alert("Bienvenido " + evalusu);
        validar_usuario_contrasena(event);
        
        
    } else{
        alert("No has introducido tus datos correctos");
    }
}
