const buttons=document.querySelectorAll(".grid button");
const display=document.querySelector(".inputVal");
//! butonlara basıldığında çalışacak olan fonksiyon
function clickButton(){
    buttons.forEach(function(button){
        button.addEventListener("click",function(e){
            if (e.target.innerText == "=") {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Invalid";
                }
            }
            else if(e.target.innerText == "C"){
                display.innerText = "";
            }
            else if(e.target.innerText == "←"){
                display.innerText = display.innerText.slice(0,-1);
            }
            else{
                display.innerText += e.target.innerText;
            }
            
        })
    });
}

clickButton();