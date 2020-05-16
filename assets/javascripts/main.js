

$(document).ready(function($) {
    var swiperBottomScrollbarFull = new Swiper('.swiper-bottom-scrollbar-full', {
        allowTouchMove: true,
        slidesPerView: 'auto',
        grabCursor: true,
        preventClicks: true,
        spaceBetween: 30,
        keyboardControl: true,
        speed: 1000,
        pagination: {
            el: null
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: false,
            snapOnRelease: true
        },
        mousewheel: {
            enable: true
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            767: {
                scrollbar: {
                    hide: true
                },
                spaceBetween: 0,
                autoHeight: true,
                centeredSlides: false,
                slidesOffsetAfter: 85
            }
        },
        on: {
            resize: function () {
                var windowWidth = $(window).width();
                if(windowWidth <= 767){
                    swiperBottomScrollbarFull.direction('vertical');
                    swiperBottomScrollbarFull.detachEvents();
                }else{
                    // swiperBottomScrollbarFull.direction('horizontal');
                    swiperBottomScrollbarFull.attachEvents();
                }
                swiperBottomScrollbarFull.update();
            }
        }
    });
    
    var swiperBottomScrollbarFull2 = new Swiper('.slide_listmenu', {
        allowTouchMove: true,
        slidesPerView: 'auto',
        grabCursor: true,
        preventClicks: true,
        spaceBetween: 30,
        keyboardControl: true,
        speed: 1000,
        pagination: {
            el: null
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: false,
            snapOnRelease: true
        },
        // mousewheel: {
        //     enable: true
        // },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            767: {
                scrollbar: {
                    hide: true
                },
                spaceBetween: 0,
                autoHeight: true,
                centeredSlides: false,
                slidesOffsetAfter: 85
            }
        },
        on: {
            resize: function () {
                var windowWidth = $(window).width();
                if(windowWidth <= 767){
                    swiperBottomScrollbarFull2.direction('vertical');
                    swiperBottomScrollbarFull2.detachEvents();
                }else{
                    swiperBottomScrollbarFull2.direction('horizontal');
                    swiperBottomScrollbarFull2.attachEvents();
                }
                swiperBottomScrollbarFull2.update();
            }
        }
    });


    
    let bt_menu = 0;
    let set_img_menu = 0;
    // init controller
    var controller = new ScrollMagic.Controller();
    const dataGetMenu = $('.get_data_menu').attr("data-get-menu");


// function background_load animation
function backgroundLoad(){
    tl.to(".background_black_load", 0, {opacity: 1, visibility: "visible"}, 0);
    tl.to(".background_load > section", 0, {transformOrigin: "0% 0%"}, 0);
    tl.to(".background_load > section:nth-child(1)", 1, {scaleX: 1}, 0);
    tl.to(".background_load > section:nth-child(2)", 1, {scaleX: 1}, 0.4);
    tl.to(".background_load > section:nth-child(3)", 1, {scaleX: 1}, 0.8);
    tl.to(".background_load > section", 0, {transformOrigin: "100% 100%"}, 1.8);
    tl.to(".background_black_load", 0, {opacity: 0, visibility: "hidden"}, 1.8);
    tl.to(".background_load > section:nth-child(1)", 0.6, {scaleX: 0}, 1.8);
    tl.to(".background_load > section:nth-child(2)", 0.6, {scaleX: 0}, 1.8);
    tl.to(".background_load > section:nth-child(3)", 0.6, {scaleX: 0}, 1.9);
}
// start js Home
    if(dataGetMenu == "home"){
        tl = new TimelineLite();
        tl.to(".img_menu", 0, {width: 200, height: 200, borderBottomRightRadius: "100%", scaleX: 1, opacity: 0});
        set_img_menu = 0;

        tl.set([".start-item-home h4", ".start-item-home h6", ".start-item-home p"], {opacity: 0, y: 50}, 0);
        tl.to(".start-item-home h4", 0.5,{opacity: 1, y: 0}, 2.6);
        tl.to(".start-item-home h6", 0.5,{opacity: 1, y: 0}, 2.8);
        tl.to(".start-item-home p", 0.5,{opacity: 1, y: 0}, 3);
        backgroundLoad();
    }

// end js home

// start js listmenu
    if(dataGetMenu == "listmenu"){
         set_img_menu = 1;
        tl = new TimelineLite();
        tl.to(".background_black_load", 0,{opacity: 0, visibility: "hidden"}, 0);
        tl.to(".img_menu", 0, {width: "37%", height: "100vh", x: 0, y: 0, zIndex: 1});
        tl.to(".img_menu > img:nth-child(2)", 0,{opacity: 0});
        tl.to(".img_menu > img:nth-child(3)", 0,{opacity: 0});
        tl.to(".img_menu > img:nth-child(1)", 0,{opacity: 1});

        tl.to(".content_listmenu", 0, {scaleX: 0}, 0);
        tl.to(".content_listmenu", 1, {scaleX: 1, ease: Expo.easeInOut}, 0.2);

        tl.to(".item_content_listmenu", 0,{opacity: 0, y: 40}, 0);
        tl.staggerTo(".item_content_listmenu", 0.5,{opacity: 1, y: 0}, 0.3);
        // let tweenab = new TimelineMax()
        // .add([
        //         TweenMax.to('.img_menu', 1, {scaleX: 0})
        //     ]);
        // const scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
        // .setTween(tweenab)
        // .addTo(controller);
    }
// end js listmenu

// start js about
    if(dataGetMenu == "aboutus"){
        set_img_menu = 1;
        tl = new TimelineLite();
        tl.to(".background_black_load", 0,{opacity: 0, visibility: "hidden"}, 0);
        tl.to(".img_menu", 0, {borderBottomLeftRadius: "90%", width: 500, height: 500, top: 0, right: 0, zIndex: 1});
        tl.to(".img_menu > img:nth-child(1)", 0,{opacity: 0});
        tl.to(".img_menu > img:nth-child(3)", 0,{opacity: 0});
        tl.to(".img_menu > img:nth-child(2)", 0,{opacity: 1});

        tl.to(".hr_center_about", 0, {scaleY: 0}, 0);
        tl.to(".hr_center_about", 0.7, {scaleY: 1}, 0.5);

        tl.to(".content_about > div", 0, {scaleX: 0}, 0);
        tl.to(".content_about > div", 0.7, {scaleX: 1}, 0.5);

        tl.to(".title_about", 0, {opacity: 0, x: -50}, 0);
        tl.to(".title_about", 0.7, {opacity: 1, x: 0}, 0.5);

        tl.to(".item_collaborations", 0, {opacity: 0, scale: 0}, 0);
        tl.staggerTo(".item_collaborations", 0.3, {opacity: 1, scale: 1}, 0.1, 1);

        tl.to(".content_about_node", 0, {opacity: 0, y: 30}, 0);
        tl.staggerTo(".content_about_node", 0.7, {opacity: 1, y: 0}, 0.3, 1);
    }
// end js about

// start js contact
    if(dataGetMenu == "contactus"){
        set_img_menu = 0;
        tl = new TimelineLite();
        tl.to(".img_menu", 0, {width: 200, height: 200, borderBottomRightRadius: "100%", scaleX: 1, opacity: 0});
        tl.to(".img_menu", 0.5, {opacity: 0});

        tl.to(".background_black_load", 0, {opacity: 1, visibility: "visible"}, 0);
        tl.to(".img_menu", 0, {width: 200, height: 200, borderBottomRightRadius: "100%", x: 0, y: 0});
        tl.to(".background_load > section", 0, {transformOrigin: "100% 100%"}, 0);
        tl.to(".background_load > section:nth-child(1)", 1, {scaleX: 1}, 0);
        tl.to(".background_load > section:nth-child(2)", 1, {scaleX: 1}, 0.4);
        tl.to(".background_load > section:nth-child(3)", 1, {scaleX: 1}, 0.8);
        tl.to(".background_load > section", 0, {transformOrigin: "0% 0%"}, 1.8);
        tl.to(".background_black_load", 0, {opacity: 0, visibility: "hidden"}, 1.8);
        tl.to(".background_load > section:nth-child(1)", 0.6, {scaleX: 0}, 1.8);
        tl.to(".background_load > section:nth-child(2)", 0.6, {scaleX: 0}, 1.8);
        tl.to(".background_load > section:nth-child(3)", 0.6, {scaleX: 0}, 1.9);

        tl.to(".contact_form > article", 0, {opacity: 0, y: 50}, 0);
        tl.to(".contact_form > article", 0.7, {opacity: 1, y: 0});

        tl.to(".contact_form form label", 0, {opacity: 0, y: 50}, 0);
        tl.staggerTo(".contact_form form label", 0.7, {opacity: 1, y: 0}, 0.3);

        tl.to(".button_back_contact", 0, {opacity: 0, x: "-100%"}, 0);
        tl.to(".button_back_contact", 1, {opacity: 1, x: "0%"});

        bt_menu = 0;
    }
// end js contact

// start js product
if(dataGetMenu == "product"){
     set_img_menu = 0;
    tl = new TimelineLite();
    tl.to(".img_menu", 0, {width: 200, height: 200, borderBottomRightRadius: "100%", scaleX: 1, opacity: 0});
    backgroundLoad();
    const arrNoteProduct = $('.note_product ul li').toArray();
    const arrImgProduct = $('.img_product ul li').toArray();
    let count_slider = 0;
    // slider
    const tl_slider = new TimelineLite({paused: true});
    // prev slide
    $('.button_slide_product > section:nth-child(1)').click(function(event) {
        tl_slider.clear(); //clear tween
        // first slider
        if (count_slider == 0) {

            // image
            count_slider = arrImgProduct.length-1;
            tl_slider.set('.this_img_product > section', {transformOrigin: "100% 100%"});
            tl_slider.to('.this_img_product > section', 1, {scaleX: 1, ease: Expo.easeInOut});
            tl_slider.to($(arrImgProduct[0]), 0,{opacity: 0}, 1);
            tl_slider.to($(arrImgProduct[count_slider]), 0, {opacity: 1});
            tl_slider.set('.this_img_product > section', {transformOrigin: "0% 0%"});
            tl_slider.to('.this_img_product > section', 1, {scaleX: 0});


            // content
            tl_slider.to($(arrNoteProduct[0]).children('article'),0.5,
                {y: -30, opacity: 0}, 0.2);
            tl_slider.to($(arrNoteProduct[0]).children('section'),0.5,
                {y: -30, opacity: 0}, 0.5);
            tl_slider.to($(arrNoteProduct[0]).children('a'),0.5,
                {y: -30, opacity: 0}, 0.8);

            tl_slider.set([$(arrNoteProduct[0]).children('article'),
                $(arrNoteProduct[0]).children('section'),
                $(arrNoteProduct[0]).children('a')],
                {visibility: "hidden"}, 1.3);
            tl_slider.set($(arrNoteProduct[0]),{visibility: "hidden"}, 1.3);

            tl_slider.set($(arrNoteProduct[count_slider]),{visibility: "visible"}, 0);
            tl_slider.set($(arrNoteProduct[count_slider]).children('article'),
                {y: 30, opacity: 0, visibility: "hidden"}, 0);
            tl_slider.set($(arrNoteProduct[count_slider]).children('section'),
                {y: 30, opacity: 0, visibility: "hidden"}, 0);
            tl_slider.set($(arrNoteProduct[count_slider]).children('a'),
                {y: 30, opacity: 0, visibility: "hidden"}, 0);
            tl_slider.to($(arrNoteProduct[count_slider]).children('article'), 0.5,
                {y: 0, opacity: 1, visibility: "visible"}, 1.3);
            tl_slider.to($(arrNoteProduct[count_slider]).children('section'), 0.5,
                {y: 0, opacity: 1, visibility: "visible"}, 1.6);
            tl_slider.to($(arrNoteProduct[count_slider]).children('a'), 0.5,
                {y: 0, opacity: 1, visibility: "visible"}, 1.9);


            tl_slider.play();
        }else{ //not first slide

            // images
            count_slider--;
            tl_slider.set('.this_img_product > section', {transformOrigin: "100% 100%"});
            tl_slider.to('.this_img_product > section', 1, {scaleX: 1, ease: Expo.easeInOut});
            tl_slider.to($(arrImgProduct[count_slider+1]), 0, {opacity: 0});
            tl_slider.to($(arrImgProduct[count_slider]), 0, {opacity: 1});
            tl_slider.set('.this_img_product > section', {transformOrigin: "0% 0%"});
            tl_slider.to('.this_img_product > section', 1, {scaleX: 0});


            // content
            tl_slider.to($(arrNoteProduct[count_slider+1]).children('article'),0.5,
                {y: -30, opacity: 0}, 0.2);
            tl_slider.to($(arrNoteProduct[count_slider+1]).children('section'),0.5,
                {y: -30, opacity: 0}, 0.5);
            tl_slider.to($(arrNoteProduct[count_slider+1]).children('a'),0.5,
                {y: -30, opacity: 0}, 0.8);
            tl_slider.set([$(arrNoteProduct[count_slider+1]).children('article'),
                $(arrNoteProduct[count_slider+1]).children('section'),
                $(arrNoteProduct[count_slider+1]).children('a')],
                {visibility: "hidden"}, 1.3);
            tl_slider.set($(arrNoteProduct[count_slider+1]),{visibility: "hidden"}, 1.3);

            tl_slider.set($(arrNoteProduct[count_slider]),{visibility: "visible"}, 0);
            tl_slider.set($(arrNoteProduct[count_slider]).children('article'),
                {y: 30, opacity: 0, visibility: "hidden"}, 0);
            tl_slider.set($(arrNoteProduct[count_slider]).children('section'),
                {y: 30, opacity: 0, visibility: "hidden"}, 0);
            tl_slider.set($(arrNoteProduct[count_slider]).children('a'),
                {y: 30, opacity: 0, visibility: "hidden"}, 0);
            tl_slider.to($(arrNoteProduct[count_slider]).children('article'), 0.5,
                {y: 0, opacity: 1, visibility: "visible"}, 1.3);
            tl_slider.to($(arrNoteProduct[count_slider]).children('section'), 0.5,
                {y: 0, opacity: 1, visibility: "visible"}, 1.6);
            tl_slider.to($(arrNoteProduct[count_slider]).children('a'), 0.5,
                {y: 0, opacity: 1, visibility: "visible"}, 1.9);


            tl_slider.play();
        }
    });

    // next slide
    $('.button_slide_product > section:nth-child(2)').click(function(event) {
        tl_slider.clear();

        // last slide
        if (count_slider == arrImgProduct.length-1) {
            // images
            count_slider = 0;
            tl_slider.set('.this_img_product > section', {transformOrigin: "0% 0%"});
            tl_slider.to('.this_img_product > section', 1, {scaleX: 1, ease: Expo.easeInOut});
            tl_slider.to($(arrImgProduct[arrImgProduct.length-1]), 0,{opacity: 0}, 1);
            tl_slider.to($(arrImgProduct[count_slider]), 0, {opacity: 1});
            tl_slider.set('.this_img_product > section', {transformOrigin: "100% 100%"});
            tl_slider.to('.this_img_product > section', 1, {scaleX: 0});


            // content
            tl_slider.to($(arrNoteProduct[arrImgProduct.length-1]).children('article'),0.5,
                {y: -30, opacity: 0}, 0.2);
            tl_slider.to($(arrNoteProduct[arrImgProduct.length-1]).children('section'),0.5,
                {y: -30, opacity: 0}, 0.5);
            tl_slider.to($(arrNoteProduct[arrImgProduct.length-1]).children('a'),0.5,
                {y: -30, opacity: 0}, 0.8);

            tl_slider.set([$(arrNoteProduct[arrImgProduct.length-1]).children('article'),
                $(arrNoteProduct[arrImgProduct.length-1]).children('section'),
                $(arrNoteProduct[arrImgProduct.length-1]).children('a')],
                {visibility: "hidden"}, 1.3);
            tl_slider.set($(arrNoteProduct[arrImgProduct.length-1]),{visibility: "hidden"}, 1.3);

            tl_slider.set($(arrNoteProduct[count_slider]),{visibility: "visible"}, 0);
            tl_slider.set($(arrNoteProduct[count_slider]).children('article'),
                {y: 30, opacity: 0, visibility: "hidden"}, 0);
            tl_slider.set($(arrNoteProduct[count_slider]).children('section'),
                {y: 30, opacity: 0, visibility: "hidden"}, 0);
            tl_slider.set($(arrNoteProduct[count_slider]).children('a'),
                {y: 30, opacity: 0, visibility: "hidden"}, 0);
            tl_slider.to($(arrNoteProduct[count_slider]).children('article'), 0.5,
                {y: 0, opacity: 1, visibility: "visible"}, 1.3);
            tl_slider.to($(arrNoteProduct[count_slider]).children('section'), 0.5,
                {y: 0, opacity: 1, visibility: "visible"}, 1.6);
            tl_slider.to($(arrNoteProduct[count_slider]).children('a'), 0.5,
                {y: 0, opacity: 1, visibility: "visible"}, 1.9);
            
            tl_slider.play();
        }else{ //not last slide
            count_slider++;
            // images
            tl_slider.set('.this_img_product > section', {transformOrigin: "0% 0%"});
            tl_slider.to('.this_img_product > section', 1, {scaleX: 1, ease: Expo.easeInOut});
            tl_slider.to($(arrImgProduct[count_slider-1]), 0, {opacity: 0});
            tl_slider.to($(arrImgProduct[count_slider]), 0, {opacity: 1});
            tl_slider.set('.this_img_product > section', {transformOrigin: "100% 100%"});
            tl_slider.to('.this_img_product > section', 1, {scaleX: 0});

            // content
            tl_slider.to($(arrNoteProduct[count_slider-1]).children('article'),0.5,
                {y: -30, opacity: 0}, 0.2);
            tl_slider.to($(arrNoteProduct[count_slider-1]).children('section'),0.5,
                {y: -30, opacity: 0}, 0.5);
            tl_slider.to($(arrNoteProduct[count_slider-1]).children('a'),0.5,
                {y: -30, opacity: 0}, 0.8);
            tl_slider.set([$(arrNoteProduct[count_slider-1]).children('article'),
                $(arrNoteProduct[count_slider-1]).children('section'),
                $(arrNoteProduct[count_slider-1]).children('a')],
                {visibility: "hidden"}, 1.3);
            tl_slider.set($(arrNoteProduct[count_slider-1]),{visibility: "hidden"}, 1.3);

            tl_slider.set($(arrNoteProduct[count_slider]),{visibility: "visible"}, 0);
            tl_slider.set($(arrNoteProduct[count_slider]).children('article'),
                {y: 30, opacity: 0, visibility: "hidden"}, 0);
            tl_slider.set($(arrNoteProduct[count_slider]).children('section'),
                {y: 30, opacity: 0, visibility: "hidden"}, 0);
            tl_slider.set($(arrNoteProduct[count_slider]).children('a'),
                {y: 30, opacity: 0, visibility: "hidden"}, 0);
            tl_slider.to($(arrNoteProduct[count_slider]).children('article'), 0.5,
                {y: 0, opacity: 1, visibility: "visible"}, 1.3);
            tl_slider.to($(arrNoteProduct[count_slider]).children('section'), 0.5,
                {y: 0, opacity: 1, visibility: "visible"}, 1.6);
            tl_slider.to($(arrNoteProduct[count_slider]).children('a'), 0.5,
                {y: 0, opacity: 1, visibility: "visible"}, 1.9);
            tl_slider.play();
        }
    });
}
// end js product


// start js content product
    if(dataGetMenu == "contentproduct"){
        set_img_menu = 0;
        tl = new TimelineLite();
        tl.to(".background_black_load", 0,{opacity: 0, visibility: "hidden"}, 0);
        tl.to(".img_menu", 0, {width: 200, height: 200, borderBottomRightRadius: "100%", scaleX: 1, opacity: 0});


        tl.to(".img_content_product", 0, {scaleX: 0}, 0);
        tl.to(".img_content_product", 1, {scaleX: 1});

        tl.staggerFrom('.svg_content_product', 1.5, {drawSVG:0, ease: Expo.easeInOut}, 0.5);
        tl.staggerFrom('.text01', 1, {y: 100, opacity: 0}, 0.5, 1.5);

        backgroundLoad();
    }

// end js content product




    $('.button_menu').click(function(event) {
        if(dataGetMenu == "home" || dataGetMenu == "contactus" || dataGetMenu == "contentproduct" || dataGetMenu == "product"){
            set_img_menu = 0;
            if (bt_menu == 0) {
                $('.header').addClass('show_menu');
                tl = new TimelineLite();
                tl.to(".img_menu", 0.5, {opacity: 1});
                bt_menu = 1;
            }else if(bt_menu == 1){
                $('.header').removeClass('show_menu');
                tl = new TimelineLite();
                tl.to(".img_menu", 0.5, {opacity: 0});
                tl.to(".img_menu", 0, {width: 200, height: 200, borderBottomRightRadius: "100%", x: 0, y: 0});
                bt_menu = 0;
            }
        }
        else if (dataGetMenu == "listmenu") {
            if (bt_menu == 0) {
                $('.header').addClass('show_menu');
                set_img_menu = 0;
                tl = new TimelineLite();
                tl.to(".img_menu", 0.5, {opacity: 0});
                tl.to(".img_menu", 0, {width: 200, height: 200, borderBottomRightRadius: "100%", x: 0, y: 0, zIndex: 888});
                tl.to(".img_menu", 0.5, {opacity: 1});
                bt_menu = 1;
            }else if(bt_menu == 1){
                $('.header').removeClass('show_menu');
                set_img_menu = 1;
                tl = new TimelineLite();
                tl.to(".img_menu", 0, {x: 0, y: 0, width: "37%", height: "100vh", borderBottomRightRadius: 0, zIndex: 1});
                tl.to(".img_menu > img:nth-child(3)", 0,{opacity: 0});
                tl.to(".img_menu > img:nth-child(2)", 0,{opacity: 0});
                tl.to(".img_menu > img:nth-child(1)", 0,{opacity: 1});
                bt_menu = 0;
            }
        }
        else if(dataGetMenu == "aboutus"){
            
            if (bt_menu == 0) {
                $('.header').addClass('show_menu');
                set_img_menu = 0;
                tl = new TimelineLite();
                tl.to(".img_menu", 0.5, {opacity: 0});
                tl.to(".img_menu", 0, {width: 200, height: 200, borderBottomRightRadius: "100%", x: 0, y: 0, right: "auto", borderBottomLeftRadius: 0, zIndex: 888});
                tl.to(".img_menu", 0.5, {opacity: 1});
                bt_menu = 1;
            }else if(bt_menu == 1){
                $('.header').removeClass('show_menu');
                set_img_menu = 1;
                tl = new TimelineLite();
                tl.to(".img_menu", 0, {borderBottomLeftRadius: "90%", borderBottomRightRadius: 0, right: 0,x: 0, y: 0, scaleX: 1, width: 500, height: 500, zIndex: 2});
                tl.to(".img_menu > img:nth-child(1)", 0,{opacity: 0});
                tl.to(".img_menu > img:nth-child(3)", 0,{opacity: 0});
                tl.to(".img_menu > img:nth-child(2)", 0,{opacity: 1});
                bt_menu = 0;
            }
        }

    });





// start js menu

    let arrayMenu = $('.this_menu_content').toArray();

    for (let i = 0; i < arrayMenu.length; i++) {
        var tl = new TimelineLite();
        $(arrayMenu[i])
        .on("mouseover", function(evt) {
            let imgMenuY = $(this).offset().top - 150,
                imgMenuX = $(this).offset().left;
            tl = new TimelineLite();
            if(i == 0){
                tl.to(".img_menu > img:nth-child(2)", 0,{opacity: 0}, 0.5);
                tl.to(".img_menu > img:nth-child(3)", 0,{opacity: 0}, 0.5);
                tl.to(".img_menu > img:nth-child(1)", 0,{opacity: 1});
            }
            if(i == 1){
                tl.to(".img_menu > img:nth-child(1)", 0,{opacity: 0}, 0.5);
                tl.to(".img_menu > img:nth-child(3)", 0,{opacity: 0}, 0.5);
                tl.to(".img_menu > img:nth-child(2)", 0,{opacity: 1});
            }
            if(i == 2){
                tl.to(".img_menu > img:nth-child(1)", 0,{opacity: 0}, 0.5);
                tl.to(".img_menu > img:nth-child(2)", 0,{opacity: 0}, 0.5);
                tl.to(".img_menu > img:nth-child(3)", 0,{opacity: 1});
            }
            tl.to(".img_menu", 1, {borderBottomRightRadius: 0, height: "auto", ease: Expo.easeInOut});
            tl.to(".img_menu", 0.5, {x: imgMenuX, y: imgMenuY}, 0.5);
        })
        .on("mouseout", function(evt) {
            // new animation
        });
    }

    function mouseover_menu(){
        tl = new TimelineLite();
        tl.to(".img_menu", 1, {width: 200, height: 200, borderBottomRightRadius: "100%", x: 0, y: 0, ease: Expo.easeInOut});
    }

    $(".adress").on("mouseover", function(evt){
        if ( set_img_menu == 0) mouseover_menu();
    });
    $(".logo").on("mouseover", function(evt){
        if ( set_img_menu == 0) mouseover_menu();
    });
    $(".button_menu").on("mouseover", function(evt){
        if ( set_img_menu == 0) mouseover_menu();
    });
// end js menu





// start listmenu click
$('.list_menu_button').click(function(event) {
    $('.header').removeClass('show_menu');
    set_img_menu = 1;
    tl = new TimelineLite();
    tl.to(".img_menu", 0, {borderBottomLeftRadius: 0, borderBottomRightRadius: 0, right: "auto"});
    tl.to(".img_menu", 1, {x: 0, y: 0, scaleX: 1, width: "40%"});

    tl.to(".img_menu > img:nth-child(2)", 0,{opacity: 0});
    tl.to(".img_menu > img:nth-child(3)", 0,{opacity: 0});
    tl.to(".img_menu > img:nth-child(1)", 0,{opacity: 1});

    tl.to(".content_listmenu", 0, {scaleX: 0}, 0);
    tl.to(".content_listmenu", 1, {scaleX: 1, ease: Expo.easeInOut}, 0.2);

    tl.to(".item_content_listmenu", 0,{opacity: 0, y: 40}, 0);
    tl.staggerTo(".item_content_listmenu", 0.5,{opacity: 1, y: 0}, 0.3);
    bt_menu = 0;
});
//end listmenu click





// start about click
$('.about_button').click(function(event) {
    $('.header').removeClass('show_menu');
    set_img_menu = 1;
    tl2 = new TimelineLite({paused: true});
    tl2.to(".img_menu", 1, {borderBottomLeftRadius: "90%", borderBottomRightRadius: 0, right: 0,x: 0, y: 0, scaleX: 1, width: 500, height: 500, zIndex: 2});
    tl2.to(".background_black_load", 0,{opacity: 0, visibility: "hidden"}, 0);
    tl2.to(".img_menu", 0, {zIndex: 1});
    tl2.to(".img_menu > img:nth-child(1)", 0,{opacity: 0});
    tl2.to(".img_menu > img:nth-child(3)", 0,{opacity: 0});
    tl2.to(".img_menu > img:nth-child(2)", 0,{opacity: 1});

    tl2.to(".hr_center_about", 0, {scaleY: 0}, 0);
    tl2.to(".hr_center_about", 0.7, {scaleY: 1}, 0.5);

    tl2.to(".content_about > div", 0, {scaleX: 0}, 0);
    tl2.to(".content_about > div", 0.7, {scaleX: 1}, 0.5);

    tl2.to(".title_about", 0, {opacity: 0, x: -50}, 0);
    tl2.to(".title_about", 0.7, {opacity: 1, x: 0}, 0.5);

    tl2.to(".item_collaborations", 0, {opacity: 0, scale: 0}, 0);
    tl2.staggerTo(".item_collaborations", 0.3, {opacity: 1, scale: 1}, 0.1, 1);

    tl2.to(".content_about_node", 0, {opacity: 0, y: 30}, 0);
    tl2.staggerTo(".content_about_node", 0.7, {opacity: 1, y: 0}, 0.3, 1);
    tl2.play();
    bt_menu = 0;
});
//end about click

// start contact click
$('.contact_button').click(function(event) {
    $('.header').removeClass('show_menu');
    set_img_menu = 1;
    tl = new TimelineLite();
    set_img_menu = 0;
    tl = new TimelineLite();
    tl.to(".img_menu", 0, {width: 200, height: 200, borderBottomRightRadius: "100%", scaleX: 1, opacity: 0});
    tl.to(".img_menu", 0.5, {opacity: 0});

    tl.to(".background_black_load", 0, {opacity: 1, visibility: "visible"}, 0);
    tl.to(".img_menu", 0, {width: 200, height: 200, borderBottomRightRadius: "100%", x: 0, y: 0});
    tl.to(".background_load > section", 0, {transformOrigin: "100% 100%"}, 0);
    tl.to(".background_load > section:nth-child(1)", 1, {scaleX: 1}, 0);
    tl.to(".background_load > section:nth-child(2)", 1, {scaleX: 1}, 0.4);
    tl.to(".background_load > section:nth-child(3)", 1, {scaleX: 1}, 0.8);
    tl.to(".background_load > section", 0, {transformOrigin: "0% 0%"}, 1.8);
    tl.to(".background_black_load", 0, {opacity: 0, visibility: "hidden"}, 1.8);
    tl.to(".background_load > section:nth-child(1)", 0.6, {scaleX: 0}, 1.8);
    tl.to(".background_load > section:nth-child(2)", 0.6, {scaleX: 0}, 1.8);
    tl.to(".background_load > section:nth-child(3)", 0.6, {scaleX: 0}, 1.9);

    tl.to(".contact_form > article", 0, {opacity: 0, y: 50}, 0);
    tl.to(".contact_form > article", 0.7, {opacity: 1, y: 0});

    tl.to(".contact_form form label", 0, {opacity: 0, y: 50}, 0);
    tl.staggerTo(".contact_form form label", 0.7, {opacity: 1, y: 0}, 0.3);

    tl.to(".button_back_contact", 0, {opacity: 0, x: "-100%"}, 0);
    tl.to(".button_back_contact", 1, {opacity: 1, x: 0});

    bt_menu = 0;
});


    
});