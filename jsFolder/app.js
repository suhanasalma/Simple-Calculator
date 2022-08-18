const display = document.getElementById('display');



const displayText =  document.querySelectorAll('.will-display');
displayText.forEach(el => el.addEventListener('click', function(){
   display.value += el.innerText;

}))



const equal = document.getElementById('equal');
equal.addEventListener('click', function(){
   try {
      display.value = eval(display.value)
   } catch (error) {
      alert('invalid')
      display.value = '';
   }
})


const clear = document.getElementById('clear');
clear.addEventListener('click', function(){
   display.value = ''
})



const clearBack = document.getElementById('clear-back')
clearBack.addEventListener('click', function(){
   display.value = display.value.slice(0,-1);
})