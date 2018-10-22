window.onload = function(){
    
    
    var click = document.getElementById('buton').addEventListener('click',function(){add();});
    
   if(click==1){
       add++;
   }
};

with(document){
        write('<input type="button" value="Log Out" id="salida"  >');
        

    }
    
    function add(){
        
        var num= document.getElementById('birolo').value;
        var pre= document.getElementById('precio').textContent;
        var total;
        parseInt(num);
        parseFloat(pre);
        parseFloat(total);
        if(num < "0"){ 
            alert('No ha ingresado un numero correcto');
        }
        
        else if(num == "0" || num == ""){
            alert('No ha ingresado ningun numero');
        }
        else{
            total = num * pre;
             var fila = "<tr><td>"+ num +"</td><td>"+ pre +"</td><td>"+ total +"</td>";
        var buton = document.createElement("TR");
       
        buton.innerHTML=fila;
        document.getElementById("gatos").appendChild(buton);
        
        document.getElementById("birolo").value="";
        document.getElementById("precio").value ="";
        //document.write(total).value = "";
        }
       
			
    }


    
    
    
    
