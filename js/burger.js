$('.menu-burger').on("click",function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-burger_active');
});
$('.burger-btn').on("click",function(e) {
  e.preventDefault();
  $('.menu-mobile').toggleClass('menu-mobile_active');
  $('.wrapper').toggleClass('list_active');
});
