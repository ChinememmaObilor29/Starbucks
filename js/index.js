$(function(){
    $("#toggleButton").click(function(){
        $("nav #menu").toggleClass("active");
        $("nav .menuOverlay").toggleClass("active");
        $("nav #toggleButton i").toggleClass("fa-bars");
        $("nav #toggleButton i").toggleClass("fa-close");
        $("body").toggleClass("menuActive");
    });

    $("nav #overlay1").click(function() {
        $("nav #menu").toggleClass("active");
        $("nav .menuOverlay").toggleClass("active");
        $("nav #toggleButton i").toggleClass("fa-bars");
        $("nav #toggleButton i").toggleClass("fa-close");
        $("body").toggleClass("menuActive");
    });

    responsiveFooter();
    $("body").onresize(responsiveFooter());
    
});


function responsiveFooter(){
    if(window.innerWidth <= 1023){
        $("footer #quickLinks ul").slideUp("fast");

        $("footer #quickLinks h2").click(function(){
            $(this).next().slideToggle();
        });
    }
    else{
        $("footer #quickLinks ul").slideDown("fast");}
}