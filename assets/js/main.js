
$(document).ready(function() {
    scrolledHeader();
    loadSvgSprite_localStorage();
    //loadYoutubeApi();

    $('.open-menu-btn').on('click', function() {
        $(this).toggleClass('active');
        $(this).parents().find('.mobile-menu-navbar').slideToggle(250);
    });

    $('body').on('click', '.telTo', function() {
        var PhoneNumber = $(this).text();
        PhoneNumber = PhoneNumber.replace("Phone:", "");
        window.location.href = "tel://" + PhoneNumber;
    });

    //$("input[type='tel']").inputmask("+7(999)-999-99-99");
    // $("input.datepicker").inputmask("99.99.9999");

    // if (!window.matchMedia('(max-width: 1200px)').matches) {
    //     $('.training-is .items .grid').masonry({
    //         itemSelector: '.grid-item',
    //         columnWidth: '.grid-sizer',
    //         percentPosition: true
    //     });
    // }

    // if ($('.photo-gallery .slider').length) {
    //     var $photoGallery = $('.photo-gallery .slider').owlCarousel({
    //         margin: 0,
    //         loop: true,
    //         autoWidth: false,
    //         autoHeight:true,
    //         items: 1,
    //         mouseDrag: false,
    //         smartSpeed: 100,
    //         animateOut: 'fadeOut',
    //         navContainer: $(".photo-gallery .controls .pn-btns"),
    //         dotsContainer: $(".photo-gallery .controls .dots"),
    //         navText: ''
    //     });
    // }

    // var justifiedGalleryRowHeight = 275;
    //
    // if (window.matchMedia('(max-width: 1200px)').matches) {
    //     justifiedGalleryRowHeight = 175;
    // }
    //
    // if ($(".photo-gallery .g-items")) {
    //     var $justifiedGallery = $(".photo-gallery .g-items").justifiedGallery({
    //         lastRow: 'justify',
    //         margins: 1,
    //         rowHeight: justifiedGalleryRowHeight
    //     }).on('jg.complete', function (e) {
    //         $('.photo-gallery .slider').trigger('next.owl.carousel').trigger('prev.owl.carousel');
    //     });
    // }
    // setTimeout(function() { }, 1000);
    //
    //
    // if ($(".gallery-school .g-items")) {
    //     var $justifiedGallery = $(".gallery-school .g-items").justifiedGallery({
    //         lastRow: 'justify',
    //         margins: 2,
    //         rowHeight: 175
    //     });
    // }
    //
    // $("a[rel=lightbox]").fancybox();
    //
    // if ($("#top-block .slider").length) {
    //     $("#top-block .slider").owlCarousel({
    //         margin: 0,
    //         loop: true,
    //         autoWidth: false,
    //         autoHeight:true,
    //         items: 1,
    //         mouseDrag: true,
    //         smartSpeed: 500,
    //         nav: true,
    //         navText: ["",""],
    //         responsive: {
    //             991: {
    //                 items: 4,
    //                 autoWidth: false,
    //                 smartSpeed: 500,
    //             }
    //         }
    //     });
    //
    // }
    // if ($(".teachers .slider").length) {
    //     var teachersSlider = $(".teachers .slider").owlCarousel({
    //         center: false,
    //         loop: true,
    //         smartSpeed: 200,
    //         items: 1,
    //         autoHeight: false,
    //         mouseDrag: false,
    //         nav: true,
    //         navText: '',
    //         responsive: {
    //             991: {
    //                 items: 2,
    //                 autoWidth: true,
    //                 smartSpeed: 800,
    //                 center: true
    //             }
    //         }
    //     });
    // }

    $('body').on('click', '.teachers .mobile-pn-btn', function() {
        if ($(this).hasClass('prev')) {
            $('.teachers .owl-nav .owl-prev').click();
        } else {
            $('.teachers .owl-nav .owl-next').click();
        }
    });

    $('body').on('click', '.faq .items .item .title', function() {
        $(this).parents('.item').toggleClass('active');
        $(this).siblings('.content').slideToggle('200');
    });

    $('body').on('click', '.reviews .item .read-more', function() {
        var $this = $(this);
        var thisDefaultHtml = $(this).data('default-text');
        $this.parents('.item').toggleClass('active');

        $this.parents('.desc').find('.text .hidden-text').slideToggle('200');

        if ($this.parents('.item').hasClass('active')) {
            $this.find('.t').html('Свернуть отзыв');
        } else {
            $this.find('.t').html(thisDefaultHtml);
        }
    });

    $(document).click(function(event) {
        if ($('.menu-wrapper .open-menu-btn').hasClass('active')) {
            if ($(event.target).closest(".menu-wrapper").length) return;
            $('.menu-wrapper .open-menu-btn').removeClass('active');
            $(".mobile-menu-navbar").slideToggle(250);
            event.stopPropagation();
        }
    });

    $("a").click(function() {
        if ($(this).parents(".scrolled-menu").length && !$(this).parents("li").hasClass("no-scrolled") && $($(this).attr("href")).length) {
            var plusPX = 0;
            if ($(this).attr("href") == '#training-is-b-title') {
                plusPX = -100;
            }
            if ($(this).attr("href") == '#free-course') {
                plusPX = -100;
            }
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + plusPX + "px"
            }, {
                duration: 500
            });
            $('.menu-wrapper .open-menu-btn').removeClass('active');
            $(".mobile-menu-navbar").slideToggle(250);
            return false;
        }
    });

    $("a.scrolled-link").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 43 + "px"
        }, {
            duration: 500
        });
        return false;
    });

    //tooltip
    // if ($('.tlp').length) {
    //     $('.tlp').tooltipster({
    //         animation: 'fade',
    //         delay: 0,
    //         position: 'bottom',
    //         contentAsHTML: true
    //     });
    // }

    $("body").on("click", ".reviews .load-more .btn", function() {
        var e = $(this),
            t = parseInt(e.attr("data-reviews-left")) - 4;
        $(".reviews .items.hidden").first().removeClass("hidden"), e.attr("data-reviews-left") > 4 ? (e.attr("data-reviews-left", t), e.html("еще " + t + " отзыв" + declOfNum(t, ["", "а", "ов"]))) : e.parents('.load-more').remove()
    });

    $("body").on("click", ".students-results .load-more .btn", function() {
        var e = $(this),
            t = parseInt(e.attr("data-results-left")) - 2;
        $(".students-results .item:not(.hidden)").nextAll('.hidden').slice(0, 2).removeClass("hidden"), e.attr("data-results-left") > 2 ? (e.attr("data-results-left", t), e.find('.text').html("Результаты еще <i>" + t + "</i> " + declOfNum(t, ["ребёнка", "детей", "детей"]))) : e.parents('.load-more').remove()
    });

    //tabs
    $('body').on('click', '.tabs-wrapper > .tabs-controls > .item:not(.active)', function() {
        $this = $(this);
        $this.parent('.tabs-controls').find('.item').removeClass('active');
        $this.addClass('active');
        var index = $(this).index();
        if (!$this.parents().hasClass('city-map-tabs')) {
            $this.parent('.tabs-controls').parent('.tabs-wrapper').children('.tabs-content').children('.item').removeClass('active');
            $this.parent('.tabs-controls').parent('.tabs-wrapper').children('.tabs-content').children('.item:eq(' + index + ')').addClass('active');
        } else {
            $this.parents('.tabs-wrapper').find('.tabs-content-wrapper').find('.tabs-content').find('.item.active').removeClass('active');
            $this.parents('.tabs-wrapper').find('.tabs-content-wrapper').find('.tabs-content').find('.item:eq(' + index + ')').addClass('active');
        }
    });

    $("body").on("click", ".benefit-tabs .pn-btn", function() {
        if ($(this).hasClass('prev')) {
            if ($(this).parents('.tabs-wrapper').find('.tabs-controls .item.active').prev().length) {
                $(this).parents('.tabs-wrapper').find('.tabs-controls .item.active').prev().click();
            } else {
                $(this).parents('.tabs-wrapper').find('.tabs-controls .item').last().click();
            }
        } else {
            if ($(this).parents('.tabs-wrapper').find('.tabs-controls .item.active').next().length) {
                $(this).parents('.tabs-wrapper').find('.tabs-controls .item.active').next().click();
            } else {
                $(this).parents('.tabs-wrapper').find('.tabs-controls .item').first().click();
            }
        }
    });

    //init datepicker
    // $('.datepicker').datepicker({
    //     format: 'dd.mm.yyyy',
    //     language: 'ru',
    //     autoclose: true,
    //     todayHighlight: true,
    //     clearBtn: true,
    //     startDate: "now"
    // });

    $("body").on("click", ".custom-dropdown-menu-wrapper .custom-dropdown-menu-items-wrapper", function () {
        var $this = $(this);
        $this.toggleClass('active');
        $('.custom-dropdown-menu-items', $this).slideToggle(250);
    });

    $(document).click(function (event) {
        if ($('.custom-dropdown-menu-wrapper .custom-dropdown-menu-items-wrapper').hasClass('active')) {
            if ($(event.target).closest(".custom-dropdown-menu-wrapper").length) return;
            $('.custom-dropdown-menu-wrapper .custom-dropdown-menu-items-wrapper.active .custom-dropdown-menu-items').slideToggle(250);
            $('.custom-dropdown-menu-wrapper .custom-dropdown-menu-items-wrapper.active').removeClass('active');
            event.stopPropagation();
        }
    });

    $("body").on("click", ".custom-dropdown-menu-wrapper .custom-dropdown-menu-item a", function () {
        var $this = $(this);
        if (!$this.parents('.custom-dropdown-menu-item').hasClass('current')) {
            $this.parents('.custom-dropdown-menu-items').find('.custom-dropdown-menu-item.current').removeClass('current');
            $this.parents('.custom-dropdown-menu-item').addClass('current');
            $this.parents('.custom-dropdown-menu-items-wrapper').find('.custom-dropdown-menu-current').html($this.find('span').html());
        } else {
            return false;
        }
    });

    $('body').on('click', '.reviews-franchisee .item .bottom .r-text .read-more', function () {
        var $this = $(this);
        var thisDefaultHtml = $(this).data('default-text');
        $this.parents('.r-text').toggleClass('active');

        $this.parents('.r-text').find('.hidden-text').slideToggle(250);

        if ($this.parents('.r-text').hasClass('active')) {
            $this.html('Скрыть полный текст');
        } else {
            $this.html(thisDefaultHtml);
        }
    });

    $("body").on("click", ".reviews-franchisee .load-more .btn", function () {
        var e = $(this),
            t = parseInt(e.attr("data-reviews-left")) - 3;
        $(".reviews-franchisee .item.hidden").first().removeClass("hidden"), e.attr("data-reviews-left") > 3 ? (e.attr("data-reviews-left", t), e.find('.text').html("еще " + t + " отзыв" + declOfNum(t, ["", "а", "ов"]))) : e.parents('.load-more').remove()
    });

    $('body').on('click', '.youtube-thumbnail, .youtube-play-btn', function () {
        $(this).parents('.youtube-video').append('<div class="youtube-video-iframe"></div>');
        new YT.Player($(this).parents('.youtube-video').find('.youtube-video-iframe')[0], {
            videoId: $(this).parents('.youtube-video').data('video-id'),
            playerVars: {
                'autoplay': 1,
                'iv_load_policy': 3,
                'modestbranding': 1,
                'rel': 0
            },
            events: {
                'onReady': function(event) {
                    event.target.playVideo();
                }
            }
        });
    });

    if (typeof initYmap !== "undefined") {
        if ($('#ymap-container').length) {
            initYmap('ymap-container', $('#ymap-container').data('map-data'));
        }
    }
});
$(window).scroll(function() {
    scrolledHeader();
});
$(window).resize(function() {
    scrolledHeader();
});

function scrolledHeader() {
    if (!$('#header').hasClass('scrolled-enable')) {
        $('#header').addClass('scrolled-enable');
    }
    if ($(document).scrollTop() > 30) {
        if (!$('#header').hasClass('scrolled')) {
            $('#header').addClass('scrolled');
        }
    } else {
        if ($('#header').hasClass('scrolled')) {
            $('#header').removeClass('scrolled');
        }
    }
}

function declOfNum(e, t) {
    return cases = [2, 0, 1, 1, 1, 2], t[e % 100 > 4 && e % 100 < 20 ? 2 : cases[e % 10 < 5 ? e % 10 : 5]]
}

function loadYoutubeApi() {
    if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
}

function loadSvgSprite_localStorage() {
    'use strict';

    var file = '/assets/images/svg-sprites.svg',
        revision = 1;

    if(!document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg').createSVGRect)
        return true;

    var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
        request,
        data,
        insertIT = function() {
            document.body.insertAdjacentHTML('afterbegin', data);
        },
        insert = function() {
            if( document.body ) insertIT();
            else document.addEventListener( 'DOMContentLoaded', insertIT);
        };

    if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
        data = localStorage.getItem('inlineSVGdata');
        if (data) {
            insert();
            return true;
        }
    }

    try {
        request = new XMLHttpRequest();
        request.open( 'GET', file, true );
        request.onload = function()
        {
            if( request.status >= 200 && request.status < 400 )
            {
                data = request.responseText;
                insert();
                if(isLocalStorage) {
                    localStorage.setItem( 'inlineSVGdata',  data );
                    localStorage.setItem( 'inlineSVGrev',   revision );
                }
            }
        }
        request.send();
    }
    catch(e){}
}
