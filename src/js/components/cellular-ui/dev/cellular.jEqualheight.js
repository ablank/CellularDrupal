/**
 * jEqualheight: Set children to equal height
 */

cellular.jEqualheight = function (opts) {
  /*
   var array = [267, 306, 108];
   var largest = Math.max.apply(Math, array); // 306
   */
  const o = jQuery.extend(
    {
      // "opt": val
    },
    opts
  );
  const fn = {};

  fn.init = function () {
    const $obj = jQuery(this);
    const kids = $obj.find(">*");
    let maxHeight = 0;

    kids.each(function () {
      $t = jQuery(this);

      if ($t.height() > maxHeight) {
        maxHeight = $t.height();
      }
      $t.height(maxHeight);
    });
  };

  return this.each(fn.init);
};
