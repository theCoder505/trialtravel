



document.querySelector(".more").addEventListener("click", function(){

    document.querySelector(".more").style.display =  "none";
    document.querySelector(".aboutwriting").style.overflowY = "scroll";
    document.querySelector(".showandHide").style.display =  "block";
    document.querySelector(".less").style.display =  "block";
   

});





document.querySelector(".less").addEventListener("click", function(){

    document.querySelector(".more").style.display =  "block";
    document.querySelector(".aboutwriting").style.overflow = "hidden";
    document.querySelector(".showandHide").style.display =  "none";
    document.querySelector(".less").style.display =  "none";
    

});



document.querySelector(".send").addEventListener("click", function(){
    document.querySelector(".send").value = " ";
});








