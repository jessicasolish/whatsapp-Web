  function mostrarMenor(x1,x2,x3)
  {
    if (x1<x2 && x1<x3)
    {
      alert("El menor de los tres valores es :"+x1);
    }
    else
    {
      if (x2<x3)
      {
        alert("El menor de los tres valores es :"+x2);
      }
      else
      {
        alert("El menor de los tres valores es :"+x3);
      }
    } 
  }

  var valor1,valor2,valor3;
  valor1=prompt("Ingrese primer valor:","");
  valor1=parseInt(valor1);
  valor2=prompt("Ingrese segundo valor:","");
  valor2=parseInt(valor2);
  valor3=prompt("Ingrese tercer valor:","");
  valor3=parseInt(valor3);
  alert("Los tres valores ingresados son "+valor1+" "+valor2+" " +valor3+""); 
  mostrarMenor(valor1,valor2,valor3);
// Escribe aquí tu codigo Javascript



