let pantalla= document.getElementById("pantalla")
let operador=document.querySelectorAll('.operador')
let numero =document.querySelectorAll('.boton')

//aca pinto los numeros
function capturarNumero(x){
    pantalla.innerHTML+=x
}
function capturarOperador(x){
    pantalla.innerHTML += operador[x].value 
} 

numero.forEach((x,i)=>{
    if(i===9){
        x.addEventListener('click',()=>capturarNumero(0))
    }else{
        x.addEventListener('click',()=>capturarNumero(i+1))
    }
})

operador.forEach((x,i)=>{
    x.addEventListener('click',()=>capturarOperador(i))
})
//operador[0]=suma
//operador[1]=resta
//operador[2]=multi
//operador[3]=divi




/* function operador(x){
switch(x){
    case '+':

    break;
}
} */