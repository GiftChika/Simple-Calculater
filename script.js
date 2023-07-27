(function(){
    let screen = document.querySelector('.display-screen');
    let buttons = document.querySelectorAll('.btn');
    let clearScreen = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            if(value != "="){
                screen.value += value;
            }   
        })
    });

    equal.addEventListener('click',function(e){
        if(screen.value === ''){
            screen.value ="";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    clearScreen.addEventListener('click',function(e){
        screen.value ="";
    });
})();
    



