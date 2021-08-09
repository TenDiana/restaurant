$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        center:true,

    });
        $(".owl-carousel2").owlCarousel({
            items:4,
            loop:true,

        });
        $("#phone").inputmask("+\\9\\96 (999) 99 99 99");

        $("#tel").inputmask("+\\9\\96 (999) 99 99 99");




    $('ul.menu__caption').on('click', 'li:not(menu__tab_active)', function() {
        $(this)
            .addClass('menu__tab_active').siblings().removeClass('menu__tab_active')
            .closest('div.menu__tabs').find('div.menu__content').removeClass('menu__content_active').eq($(this).index()).addClass('menu__content_active');
    });

        $(window).on('scroll', function () {
         if($(this).scrollTop() > 400){
             $('.goToTop').fadeIn("slow")
         }
         else{
             $('.goToTop').fadeOut("slow")
         }
        })


});


var map;

DG.then(function () {
    map = DG.map('map', {
        center: [54.98, 82.89],
        zoom: 14,
        dots:false,
    });
});







