cellular.jScrollindicator = function (opts) {
  const o = jQuery.extend(
    {
      cclass: "jScrollindicator",
      orient: "horizontal", // horizontal || vertical
      attach: "body",
      parent: null,
    },
    opts
  );
  const fn = {};

  fn.init = function () {
    const $obj = jQuery(this);
    const state = { scrolled: 0 };

    $obj.once(o.cclass, function () {
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
          const ind = jQuery(`.${o.cclass}`);
          const parent = ind.parent(o.parent);
          const dst = jQuery(document).scrollTop();

          state.scrolled = (dst / ($obj.height() - parent.height())) * 100;
          console.log(`scrolled: ${state.scrolled}`);
        }
      }, 100)
    );
  };

  return this.each(fn.init);
};
