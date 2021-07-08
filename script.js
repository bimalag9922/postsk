$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });

$(document).ready(function(){
    $('.sidenav').sidenav();
});

$(document).ready(function() {
  $("#news-slider").owlCarousel({
      items:3,
      itemsDesktop:[1199,3],
      itemsDesktopSmall:[980,2],
      itemsMobile:[600,1],
      pagination:false,
      navigationText:false,
      autoPlay:true
  });
});