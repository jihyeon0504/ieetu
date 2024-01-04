$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 30) {
            $(".header").addClass('fixed')
        } else {
            $(".header").removeClass('fixed')
        };
    })
})
$(function () {
    $(".header").on('mouseenter', function () {
        $('.header').addClass('on');
    }).on('mouseleave', function () {
        $('.header').removeClass('on');
    });
    $(".header.on").on('mouseleave', function () {
        $('.header').removeClass('on');
    });

    //mobile
    $('body').on('click', '.mBtn', function () {
        if ($(this).hasClass('close')) {
            $(".lnb").fadeOut(1000);
            $(this).removeClass('close');
            $('body').removeClass('active');
        } else {
            $(".lnb").fadeIn(1000);
            $(this).addClass('close');
            $('body').addClass('active');
        }
    });
    $('.mlnb > li').each(function () {
        var gnbArea = $(".mlnb > li");
        var gnbLink = $(this).children('a');
        if ($(this).children('ul').length > 0) {
            gnbLink.on('click', function (e) {
                e.preventDefault();
                gnbArea.children('ul').stop().slideUp();
                $(this).addClass('active');
                $(this).siblings('a').addClass('active');
                $(this).parent().children('ul').stop().slideDown();
                return false;
            });
        }
    });
})

$(function () {
    const accordion = (function () {

        const $accordion = $('.accordion');
        const $accordion_header = $accordion.find('.acrd-header');
        const $accordion_item = $('.acrd');

        // default settings 
        const settings = {
            // animation speed
            speed: 400,

            // close all other accordion items if true
            oneOpen: false
        };

        return {
            // pass configurable object literal
            init: function ($settings) {
                $accordion_header.on('click', function () {
                    accordion.toggle($(this));
                });

                $.extend(settings, $settings);

            },
            toggle: function ($this) {

                if (settings.oneOpen && $this[0] != $this.closest('.accordion').find('> .acrd.active > .acrd-header')[0]) {
                    $this.closest('.accordion')
                        .find('> .acrd')
                        .removeClass('active')
                        .find('.acrd-body')
                        .slideUp()
                }
                // show/hide the clicked accordion item
                $this.closest('.acrd').toggleClass('active');
                $this.next().stop().slideToggle(settings.speed);
            }
        }
    })();

    $(document).ready(function () {
        accordion.init({ speed: 300, oneOpen: true });
    });
})