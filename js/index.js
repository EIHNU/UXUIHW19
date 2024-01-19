$(window).on("load",function(){
  $(".loader").delay(1000).fadeOut(3000,function(){
  })
});
$(".toggle").on("click",function(){
  $(".dark-mode").toggle()
});