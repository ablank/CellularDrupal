/**
 * @file
 * Custom javascript for use in your theme.
 */

(function ($, Drupal) {
  Drupal.behaviors.cellular = {
    attach(context, settings) {
      /* Init cellular functions */
      $("a[href^=tel]").each(function () {
        const num = $(this).attr("href").match(/\d+/g);
        $(this).attr("href", `tel:${num.join("")}`);
      });

      /* End cellular functions */
    },
  };
})(jQuery, Drupal);
