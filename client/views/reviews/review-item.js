Template.reviewItem.helpers({
  stars: function(){
    rated = this.rating;

    var x = 0;
    var rate = "";
    while (x < rated){
      x = x + 1;
      rate = rate + "*";
    }
    while (x <= 5){
      x = x + 1;
      rate = rate + "-";
    }
    return rate;
  }
})