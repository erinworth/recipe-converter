//This currently is using the Epicurious website class name//
function convertIngredients(){
  var oldYield = parseInt(document.getElementById("old_yield").value);
  var newYield = parseInt(document.getElementById("new_yield").value);
  var ingredients = document.getElementsByClassName("ingredient");
    for(var i = 0; i < ingredients.length; i++){
      var newText = ingredients[i].textContent.replace(/(?:[1-9][0-9]*|0)(?:\/[1-9][0-9]*)?/g, function(word){
        return parseInt(word)*(newYield/oldYield);
  // the integer 2 will soon be replaced with a "serving input number" to create a ratio for the output number
      })
      ingredients[i].textContent = newText;
    }
}
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("update").addEventListener("click", function(e){
    e.preventDefault();
    convertIngredients();
  });
});
