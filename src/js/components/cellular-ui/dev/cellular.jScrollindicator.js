cellular.jScrollindicator = function (opts) {
  var o = jQuery.extend(
    {
      cclass: "jScrollindicator",
      orient: "horizontal", // horizontal || vertical
      attach: "body",
      parent: null,
    },
    opts
  );
  var fn = {};

  fn.init = function () {
    var $obj = jQuery(this);
    var state = { scrolled: 0 };

    $obj.one(o.cclass, function () {
      /*
       var classes = [
       o.cclass,
       o.orient
       ],
       indicator = jQuery('<div class="'+cellular.classify(classes)+' " />');
       jQuery(o.attach).prepend(indicator);
       */
    });

    $obj.on(
      "scroll",
      cellular.debounce(function ($obj, state) {
        if (o.parent) {
          console.log(o.parent);
          var ind = jQuery(`.${o.cclass}`);
          var parent = ind.parent(o.parent);
          var dst = jQuery(document).scrollTop();

          state.scrolled = (dst / ($obj.height() - parent.height())) * 100;
          console.log(`scrolled: ${state.scrolled}`);
        }
      }, 100)
    );
  };

  return this.each(fn.init);
};
