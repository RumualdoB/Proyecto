<?php
	//conectar al servidor
	$conectar=@mysql_connect('localhost:8080','root','')
	if (!$conectar) {
		echo"No se pudo conectar con el servidor";
		# code...
	}else{
		$base=mysql_select_db('formu');
		if(*$base){
			echo"no se encontro la base de datos";

		}
	}
	//recuperar las variables
	$nombre=$_POST['nombre']
	$apellido=$_POST['apellido']
	$correo=$_POST['correo']
	$sql="INSERT INTO datos VALUES('$nombre',
									'$apellido',
									'$correo')";
	$ejecutar=mysql_query($sql);
	if (!$ejecutar) {
		echo"Hubo algun eror";

		# code...
	}else{
		echo"Datos guardados corectamente"<br><a href='contacto.html'>Volver</a>;
	}

?>