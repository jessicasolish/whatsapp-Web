function operaciones(mat){
{
        var mat={
        sumar:function sumarNumeros(num1,num2){
            return(partseInt(num1) +partseInt(num2));
        },
        //resta
        restar:function restarNumeros(num1,num2){
            return(partseInt(num1)-partseInt(num2));
        },
        //multiplicacion
        multiplicar:function multiplicarNumeros(num1,num2){
            return(partseInt(num1)* partseInt(num2));       
        },
        //division
        dividir:function dividirNumeros(num1,num2){
            return(partseInt(num1) /partseInt(num2));
        }
};

var num1=document.getElementbyId("num1").value;
var num2=document.getElementbyId("num2").value;

// Escribe aquí tu codigo Javascript



