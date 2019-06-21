// Business Logic
function Pizza(topping, size) {
  this.topping = topping,
  this.size = size,
  this.cost; // run it and see it this needs to be listing
}

Pizza.prototype.calculateCost = function() {
  this.cost = 0;
  if (this.movie === "madmax" || this.movie === "avengers") {
    this.cost += 8;
  } else {
    this.cost += 10;
  }
  if (this.age === "adult") {
    this.cost += 5;
  } else if (this.age === "senior") {
    this.cost += 2;
  } else {
    return this.cost;
  }
}

// User Interface Logic
$(function (){
  $("form").submit(function(event) {
    event.preventDefault();

    var inputMovie = $("#movie").val();
    var inputTime = $("#time").val();
    var inputAge = $("#age").val();

    var newTicket = new Ticket(inputMovie, inputTime, inputAge)
    newTicket.calculateCost();
    $(".result").text(newTicket.cost);
    // alert(newTicket.cost);
  })
})
