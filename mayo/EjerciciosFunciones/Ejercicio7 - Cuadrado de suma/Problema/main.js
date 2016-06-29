var num = parseInt(prompt('Introduce un número'));
if(num == 1 ||num ==2){
	alert('El número '+num' es primo');}
	else{
		for(var i=2; i<num;++){
			if (num% i==0){
				alert('El número '+num' no es primo');
				break;
			}

			else{
				alert('El número '+num' es primo');
				break;
			}
		}
	}
}

// Escribe aquí tu codigo Javascript



