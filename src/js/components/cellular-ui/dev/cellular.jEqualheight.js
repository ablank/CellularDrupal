/**
 * jEqualheight: Set children to equal height
 */

cellular.jEqualheight = function (opts) {
  /*
   var array = [267, 306, 108];
   var largest = Math.max.apply(Math, array); // 306
   */
  var o = jQuery.extend(
    {
      // "opt": val
    },
    opts
  );
  var fn = {};

  fn.init = function () {
    var $obj = jQuery(this);
    var kids = $obj.find(">*");
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
