document.addEventListener('DOMContentLoaded', function() {
    
    var parent_div = document.getElementById("comforts"); //I have gotten the div element which is the parent of the img.

    var comf = document.getElementById("comf");

    var comf1 = document.createElement('img');
    comf1.src = "comfort.jpg";
    comf1.style.width = "49.5%"
    
    comf1.addEventListener('mouseenter', function(event){
        event.target.style.filter = 'brightness(50%)'; 
    })
    comf1.addEventListener('mouseout', function(event){
      event.target.style.filter = 'brightness(100%)';
  })
    parent_div.replaceChild(comf1, comf); //In here, i am taking the parent div and replacing the child nodes
    //take notice of the order in which the arguments are passed in, the new node is passed in first.
  });
  
document.addEventListener('DOMContentLoaded', function() {
    
  var parent_div = document.getElementById("div_id"); 

  var bake = document.getElementById("bakes");

  var bake1 = document.createElement('a');
  bake1.img.src = "cake.jpg";
  bake1.img.style.width = "49.5%"
  bake1.href = "desserts.html"
  
  bake1.img.addEventListener('mouseenter', function(event){
      event.target.style.filter = 'brightness(50%)'; 
    })
    bake1.addEventListener('mouseout', function(event){
      event.target.style.filter = 'brightness(100%)';
  })
  
    parent_div.replaceChild(bake1, bake); 
  });
  
document.addEventListener('DOMContentLoaded', function() {
    
  var parent_div = document.getElementById("salads"); 
  
  var veggie = document.getElementById("veggie");
  
  var veggie1 = document.createElement('img');
  veggie1.src = "salad.jpg";
  veggie1.style.width = "49.5%"
      
  veggie1.addEventListener('mouseenter', function(event){
     event.target.style.filter = 'brightness(50%)'; 
      })
      veggie1.addEventListener('mouseout', function(event){
        event.target.style.filter = 'brightness(100%)';
    })
      parent_div.replaceChild(veggie1, veggie); 
    });
    
document.addEventListener('DOMContentLoaded', function() {
    
  var parent_div = document.getElementById("snacks"); 
      
  var snack = document.getElementById("snack");
      
  var snack1 = document.createElement('img');
  snack1.src = "snack.jpg";
  snack1.style.width = "49.5%"
          
  snack1.addEventListener('mouseenter', function(event){
    event.target.style.filter = 'brightness(50%)'; 
  })
  snack1.addEventListener('mouseout', function(event){
    event.target.style.filter = 'brightness(100%)';
  })
  parent_div.replaceChild(snack1, snack); 
  });
        
  document.addEventListener('DOMContentLoaded', function() {
    
    var parent_div = document.getElementById("bakes"); 
  
    var bake = document.getElementById("bake");
  
    var bake1 = document.createElement('img');
    bake1.src = "cake.jpg";
    bake1.style.width = "49.5%"
    
    bake1.addEventListener('mouseenter', function(event){
        event.target.style.filter = 'brightness(50%)'; 
      })
      bake1.addEventListener('mouseout', function(event){
        event.target.style.filter = 'brightness(100%)';
    })
    
      parent_div.replaceChild(bake1, bake); 
    });