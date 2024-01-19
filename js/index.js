$(window).on("load",function(){
  $(".loader").delay(1000).fadeOut(3000,function(){
  })
});
$(".toggle").on("click",function(){
  $(".dark-mode").toggle()
});
//the loader script works but its ""disabled"" for now since its annoying, trying to fix it. 
//I dont know why the toggle doesn't work. 