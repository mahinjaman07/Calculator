const display = document.getElementById('input-number');

let arr = '';

document.querySelector('.calculator').addEventListener('click',(e)=>{
    console.log(typeof(e.target.value));
    if(e.target.value === undefined){
        return;
    }
    
    const inputNumber = e.target.value;
    if(inputNumber === '='){
        const result = eval(display.value);
        if(isNaN(result)){
            display.value = 0;
            arr = 0;
        }
        else{
            display.value = parseFloat(result).toFixed(2);
            arr = result;
        }
        
    }
    else if(inputNumber === 'AC'){
        arr = '';
        display.value= '';
    }
    else if(inputNumber === 'DE'){
        arr = arr.slice(0 , -1);
        display.value = arr;
    }
    else{
        arr += inputNumber;
        display.value = arr;
        console.log(arr);
    }
})






