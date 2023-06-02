inp = document.querySelector("input");
out = document.querySelector("p");

inp.addEventListener('keypress',checkFunction);

function FizzBuzz(number){

    if(isNaN(number) || number===''){
    out.textContent = "Enter a valid number";
        
    }
    else{
    let sol = '';
    for(let i=1; i<=number ;i++){
        
        if(i%3==0 && i%5==0){
            sol+="FIZZBUZZ "

        }
        else if (i%5==0) {
            sol+="BUZZ "

        }
        else if(i%3==0){
            sol+="FIZZ "


        }
        else {
            sol+=`${i.toString()} `;

        }

    }

    out.textContent = sol;
    }

}

function checkFunction(event){
    if (event.key == "Enter") {
       
        FizzBuzz(inp.value);
    }
}