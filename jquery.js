setInterval(() => {
   var div=$(".heading");
   
   div.removeClass('heading2');
    $(".heading").fadeIn('slow');
    
   
    setTimeout(() => {
        div.addClass('heading2');
    },500);
},1000);
//about
setInterval(() => {
    var div2=$(".head");
    
    div2.removeClass('head2');
     $(".head").fadeIn('slow');
     
    
     setTimeout(() => {
         div2.addClass('head2');
     },1000);
 },2000);

  $('.info').hide();
  setInterval(() => {
    $('.info').show(2000);
  },1000);
  