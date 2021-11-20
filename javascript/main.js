// // Grabbing the input

document.querySelector(".js-go").addEventListener("click", function(){

     var input = document.querySelector("input").value;
     // // doing the stuff with Api
     var url = "http://api.giphy.com/v1/gifs/search?q=\"" +input+ "\"&api_key=dc6zaTOxFJmzC";
     var GiphyAJAXCall = new XMLHttpRequest();
     GiphyAJAXCall.open( 'GET', url );
     GiphyAJAXCall.send();
     GiphyAJAXCall.addEventListener('load',function(e)
     {  
        var a = document.querySelector(".js-container");
        a.innerHTML =  ( " ");

        var data = e.target.response;
        pushToDOM(data);
 
     }); 

});



document.querySelector(".js-userinput").addEventListener('keyup', function(e)
{
       var input = document.querySelector("input").value;
       // // doing the stuff with Api
       if(e.which === 13)
       {
          var url = "http://api.giphy.com/v1/gifs/search?q=\"" +input+"\"&api_key=dc6zaTOxFJmzC";
          var GiphyAJAXCall = new XMLHttpRequest();
          GiphyAJAXCall.open( 'GET', url );
          GiphyAJAXCall.send();
          GiphyAJAXCall.addEventListener('load',function(e)
          {
            var a = document.querySelector(".js-container");
	        a.innerHTML =  ( " "); 
            
             var data = e.target.response;
             pushToDOM(data);
      
          }); 
       }
});




// // Show the GIF
function pushToDOM(input)
{   
    var response = JSON.parse(input);

    var imageUrl = response.data;

    imageUrl.forEach(function(image){

        var src = (image.images.fixed_height_small.url);

        var container = document.querySelector(".js-container");
        container.innerHTML = container.innerHTML +"<img src=\"" + src + "\"  class=\"container-image\" >";
   
    });

    
};    



