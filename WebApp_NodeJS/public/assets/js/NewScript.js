$(document).ready(function(){
// untuk background transition di bagian navigasi 
    $(window).on('scroll', function(){
        let isDesktop = window.matchMedia('only screen and (min-width: 992px)').matches;
        if(!isDesktop){
            if($(window).scrollTop() > 400){
                const scrollTop = $(this).scrollTop();
                // console.log("Scroll from Top: " + scrollTop.toString());
                // console.log("this is mobile");
                object.fixedTop.removeClass('transparent-nav');
                object.fixedTop.addClass('bg-white');
            }else{
                object.fixedTop.removeClass('bg-white');
                object.fixedTop.addClass('transparent-nav');
            }
        }else{
            if($(window).scrollTop() > 150){
                const scrollTop = $(this).scrollTop();
                // console.log("Scroll from Top: " + scrollTop.toString());
                // console.log("Ok On Desktop");
                object.fixedTop.addClass('transparent-nav');
                // object.fixedTop.addClass('bg-dark');
                if($(window).scrollTop() > 400){
                    const scrollTop = $(this).scrollTop();
                    // console.log("Scroll from Top: " + scrollTop.toString());
                    object.fixedTop.addClass('bg-dark');
                }else{
                    object.fixedTop.removeClass('bg-dark');
                    object.fixedTop.addClass('transparent-nav');
                }
            }else{
                object.fixedTop.removeClass('bg-dark');
                object.fixedTop.removeClass('transparent-nav');
            }
        }
    });

    // adding new element button
    // alert(object.menuItem.length);
    object.menuItem.last().after(
        `
            <a href="${object.baseUrl}contact" class="menu-item btn btn-success tombol">join us</a>
        `
    );

});