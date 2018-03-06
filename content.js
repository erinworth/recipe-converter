//This currently is using the Epicurious website class name//
function convertIngredients(oldYield, newYield){

  var ingredients = document.getElementsByClassName("ingredient");
  console.log(oldYield, newYield, document.all.length);
    for(var i = 0; i < ingredients.length; i++){
      var newText = ingredients[i].textContent.replace(/(?:[1-9][0-9]*|0)(?:\/[1-9][0-9]*)?/g, function(word){
        return parseInt(word)*(newYield/oldYield);
      })
      ingredients[i].textContent = newText;
    }
}

function setValues(){
  var oldYield = parseInt(document.getElementById("original_yield").value);
  var newYield = parseInt(document.getElementById("new_yield").value);
}

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("update").addEventListener("click", function(e){
    e.preventDefault();
    convertIngredients();
  });
});

(function(){
  var oldYield = 4;
  var newYield = 2;
  var ingredients = document.getElementsByClassName("ingredient");
  console.log(oldYield, newYield, document.all.length);
    for(var i = 0; i < ingredients.length; i++){
      console.log(ingredients[i].textContent);
      var newText = ingredients[i].textContent.replace(/(?:[1-9][0-9]*|0)(?:\/[1-9][0-9]*)?/g, function(word){
        return parseInt(word)*(newYield/oldYield);
      })
      ingredients[i].textContent = newText;
      console.log(ingredients[i].textContent);
    }
})();
