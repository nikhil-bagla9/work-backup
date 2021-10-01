$(document).ready(function(){
    $("h1").click(function() {
$("h1").css("background-color","yellow");
    });
});
$(document).ready(function(){
    $("nav").click(function() {
$("nav").addClass("sticky");
    });
    $("h1").click(function(){
        $("h1").addClass("jquery");
    });
$(".button").hover(function(){
    $(".button").css("background-color","yellow")
});   
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        const element =  document.querySelector('h2')
element.classList.add('animated', 'fadeInUp')
    }
});

});
   




