let buttons=document.querySelectorAll(".grid button");
let display=document.querySelector(".display");
//! butonlara basıldığında çalışacak olan fonksiyon
buttons=forEach(function(button){
    button.addEventListener("click",function(e){
        display.innerText=display.innerText + e.target.innerText;
    })

})