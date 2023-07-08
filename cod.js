const numeros = document.getElementsByName('button');
const opera = document.getElementsByName('opera');
const igual = document.getElementsByName('igual')[0];
const botonBorrar= document.getElementsByName('borrarT')[0];
const borrar = document.getElementById('borrar');
const toggle= document.querySelector('#toggle');
var resultado = document.getElementById('resultado');
var body =document.querySelector('body')
var operActual ='';
var operAnterior = '';
var operacion = undefined;

toggle.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    toggle.classList.toggle('active')
} )



//funciones de botones
numeros.forEach(function(boton){
      boton.addEventListener('click', function() {
      agregarNumero(boton.innerText);
    })
});

opera.forEach(function(boton){
    boton.addEventListener('click',function(){
        selectOperacion(boton.innerText);
       
    })
});


igual.addEventListener('click', function(){
      calculo();
      actualizar();
});

botonBorrar.addEventListener('click', function(){
      clear();
      actualizar();
});


// borrar solo un digito
borrar.addEventListener('click', function() {
    console.log("funcionBorrar");
    del();
    actualizar();
  });
  
  function del() {
    console.log("funcionDel");
    operActual= operActual.slice(0, -1);
    actualizar();
  };



//funcionalidades para las operaciones.
function selectOperacion(oper){
    if (operActual === '') return;
    if (operActual !== ''){
        calculo()
    }
    operacion= oper.toString();
    operAnterior=operActual;
    operActual='';
}

function calculo (){
    var calculo;
    const anterior = parseFloat(operAnterior);
    const actual =parseFloat(operActual);
    if(isNaN (anterior) || isNaN (actual)) return;
    switch (operacion){
        case '+':
           calculo= anterior + actual;
           break;
        case '-':
            calculo= anterior - actual;
            break;
        case 'x':
            calculo= anterior * actual;
            break;
        case '/':
            calculo= anterior / actual;
            break;
        default:
            return;
             
   }
   operActual= calculo;
   operacion= undefined;
   operAnterior='';
    
}
//agregar numero al display
function agregarNumero(num){
    operActual = operActual + num.toString();
    actualizar();
}
// boton borrar todo
function clear(){
    operActual='';
    operAnterior= '';
    operacion= undefined;

}


function actualizar(){
    resultado.value= operActual;
}

clear();




