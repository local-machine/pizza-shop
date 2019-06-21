// Business Logic
function Pizza(size, userTopResponses) {
  this.topping = userTopResponses,
  this.size = size,
  this.cost;
}

Pizza.prototype.calculateCost = function() {
  this.cost = 0;
  if (this.size === "large") {
    this.cost += 20;
  } else if (this.size === "medium") {
    this.cost += 15;
  } else {
    this.cost += 10;
  }
  for (var i=0; i<this.topping.length; i++) {
    this.cost += 2;
  }
}


// User Interface Logic
$(function (){
  $("form#make-pizza").submit(function(event) {
    event.preventDefault();

    $("#pizza-order").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var topSelectedList = $(this).val();
      $('#pizza-order').append(topSelectedList + "<br>");
    });

    var userTopResponses = [];
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
    var topSelectedList = $(this).val();
    userTopResponses.push(topSelectedList);
    });

    $('#make-pizza').hide();

    var inputSize = $("#size").val();
    var inputTopping = userTopResponses;

    var newPizza = new Pizza(inputSize, inputTopping)
    newPizza.calculateCost();
    $(".result").text(newPizza.cost);
  })
})
