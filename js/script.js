function Pizza(pizzaSize, crustType){
  this.pizzaSize = pizzaSize;
  this.crustType = crustType;
  this.cheeses = [];
  this.meats = [];
  this.vegetables = [];
  this.sauces = [];

  Pizza.prototype.addCheese = function(cheese){
    return this.cheeses.push(cheese);
  }  
  Pizza.prototype.addMeat = function(meat){
    return this.meats.push(meat);
  }

}
$(document).ready(function(){
  console.log("ready");
 $("#pizzaForm").submit(function(event){
   event.preventDefault();

    let pizzaSize = document.getElementById("sizeOptions").value;
    console.log(pizzaSize);
    let crustType = document.getElementById("crustOptions").value;
    console.log(crustType);
    let newPizza = new Pizza(pizzaSize, crustType);
    console.log(newPizza);
    $(".cheeseSelection").each(function(){
      let cheeses = []
      let selectCheese = document.getElementsByName("cheese");
      for(var i = 0; i < selectCheese.length; i++){
        if(selectCheese[i].checked){
          cheeses.push(selectCheese[i].value)
        }
      }
      for(var i = 0; i < cheeses.length; i++){
        newPizza.addCheese(cheeses[i])
      }
      //check cheese function
        console.log(cheeses);
    });
    $(".meatSelection").each(function(){
      let meats = []
      let selectMeat = document.getElementsByName("meat");
      for(var i = 0; i < selectMeat.length; i++){
        if(selectMeat[i].checked){
          meats.push(selectMeat[i].value)
        }
      }
      for(var i = 0; i < meats.length; i++){
        newPizza.addMeat(meats[i])
      }
      //check cheese function
        console.log(meats);
    });
  });
});