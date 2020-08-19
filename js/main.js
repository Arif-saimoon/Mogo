$(document).ready(function(){
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        animateDelay: 2000,
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

    //
    $(function(){
        
        $('#hover-effect').sliphover();
        })
    $(function(){
    
        $('#hover-effect-2').sliphover();
        })    
    $(function(){
    
        $('#hover-effect-3').sliphover();
        })    
        $('.slider').slick({
            infinite: true,
            slideToShow: 1,
            slideToScroll: 1
        });

});