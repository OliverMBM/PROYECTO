window.onload = function(){

	//var bef = localStorage.getItem('anterior');
	document.getElementById('btnAdd').addEventListener('click',function(){ add();});
	//if(bef != null)document.getElementById('contTable').innerHTML = bef;

	
	};


function add(){
	        var _nom = document.getElementById("txtnom").value;
			var _com = document.getElementById("txtcom").value;
			

			var fila = "<tr><td>"+_nom+"</td><td>"+_com+"</td>"
			var btn = document.createElement("TR");
			/*var ses = document.getElementById('tabl');
			localStorage.setItem('anterior', ses);*/
			
			btn.innerHTML=fila;
    		document.getElementById("datos").appendChild(btn);

    		document.getElementById("txtnom").value="";
			document.getElementById("txtcom").value = "";

			

}