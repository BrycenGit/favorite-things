$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    const inputtedToy = $("input#toy").val();
    const inputtedDessert = $("input#dessert").val();
    const inputtedMovie = $("input#movie").val();
    const inputtedFood = $("input#food").val();

    const favoriteThings = [inputtedToy, inputtedDessert, inputtedMovie, inputtedFood];
    const first = favoriteThings[0];
    const second = favoriteThings[1];
    const third = favoriteThings[2];
    const last = favoriteThings[favoriteThings.length - 1];
    const firstSecond = first.concat(second, third, last);
    // console.log(last);
    // const reverseThings = favoriteThings.reverse();
    // const shift = favoriteThings.shift(2);
    // let remove = favoriteThings.shift();
    // console.log(remove);
    // const itemOne = favoriteThings[3];
    // const pop = favoriteThings.pop();
    // console.log(pop);
    console.log(firstSecond);
    $("#output").text(firstSecond);
  });
});