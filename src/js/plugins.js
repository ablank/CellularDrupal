/**
 * @file
 * Call javascript plugins used in theme.
 */

(function ($) {
  $(".jAccordion").jAccordion({
    duration: 500, // Duration of transition.
    easing: "swing", // Type of easing.
    single: false, // Allow multiple panels to be opened or only 1?
  });

  $(".jCard").jCard();

  $("form").jFormal();

  $("#main-menu").jMmenu({
    animateclass: "slide-down",
  });

  $(".jScrolli").jScrolli({
    transition: {
      background: "img:first", // Selector for applying background image
      pause: 8, // Time (seconds) to pause between slides.
      //speed: 500 // Animation speed (milliseconds).
    },
    autodim: true,
    delay: 1.4, // Time (seconds) to wait before dimming.
  });

  $(".jSocial.share").jSocial({});

  $(".jSocial.follow").jSocial({});

  $(".jTabs").jTabs({
    active: 0, // Array index of initially active content.
    orient: "horizontal", // || "vertical"
  });
  $(".jTabs.vertical").jTabs({
    active: 0, // Array index of initially active content.
    orient: "vertical", //
  });
})(jQuery);
