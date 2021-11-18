// Grabbing the input

document.querySelector("button").addEventListener("click", function(){
    var input = document.querySelector("input").value;
    console.log(input);
    pushToDOM(input);

});

document.querySelector("input").addEventListener('keyup', function(e){
   
       var input = document.querySelector("input").value;
       if(e.which === 13){
       console.log(input);
       pushToDOM(input);
       }
});


// doing the stuff with Api

// Show the GIF

function pushToDOM(input)
{
    var container = document.querySelector(".js-container");
    container.innerHTML = input;

};    