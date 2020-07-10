function validar(){
	var nombre, apellido, sexo, correo, expresion;
	nombre= document.getElementById("nombre").value;
	apellido= document.getElementById("apellido").value;
	sexo= document.getElementById("idFemenino").value;
	correo= document.getElementById("correo").value;

	expresion = /\w+@\w+\.+[a-z]/;
	if(nombre === "" || sexo ===""|| apellido ==="" || correo === ""){
		alert("Todos los campos son obligatorios");
		return false;
	}

	else if(nombre.length>30){
		alert("El nombre es muy largo");
		return false;
	}
	else if(apellido.length>80){
		alert("Los apellidos son muy largos");
		return false;
	}
	else if(correo.length>100){
		alert("El correo es muy largo");
		return false;
	}
	else if(!expresion.test(correo)){
		alert("El correo no es correcto");
		return false;
	}
}