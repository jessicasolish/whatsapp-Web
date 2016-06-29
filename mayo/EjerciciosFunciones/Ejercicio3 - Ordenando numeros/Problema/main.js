function mostrarOrdenados(x1,x2,x3)
  {
    if (x1<x2 && x1<x3)
    {
      alert(x1+"");
      if (x2<x3)
      {
        alert(x2+" "+x3);
      }
      else
      {
        alert(x3+" "+x2);
      }
    }
    else
    {
      if (x2<x3)
      {
        alert(x2+" " );
        if (x1<x3)
        {
          alert(x1+" "+x3);
        }
        else
        {
          alert(x3+" "+x1);
        }
      }
      else
      {
        alert(x3+" ");
        if (x1<x2)
        {
          alert(x1+" "+x2);
        }
        else
        {
          alert(x2+" "+x1);
        }
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
  alert("Los tres valores ingresados son "+ valor1+" "+ valor2+" "+ valor3+""); 
  alert("Los valores ordenados de menor a mayor son: ");
  mostrarOrdenados(valor1,valor2,valor3);


// Escribe aquí tu codigo Javascript



