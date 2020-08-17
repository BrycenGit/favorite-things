$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    const inputtedToy = $("input#toy").val();
    const inputtedDessert = $("input#dessert").val();
    const inputtedMovie = $("input#movie").val();
    const inputtedFood = $("input#food").val();
    
    const favoriteThings = [inputtedToy, inputtedDessert, inputtedMovie, inputtedFood];
    
    $("#output").text(favoriteThings.reverse());
  });
});