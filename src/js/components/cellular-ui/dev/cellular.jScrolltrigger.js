cellular.jScrolltrigger = function (opts) {
  const o = jQuery.extend(
    {
      trigger: "bottom", // || 'top' || 'center' || 'inout'
      padding: "1em", // distance to allow before activating trigger
    },
    opts
  );
  const fn = {};

  fn.trigger = function () {
    jQuery(this).toggleClass(cellular.opts.activeclass);
  };

  return this.each(function () {
    const $w = jQuery(window);
    const w = {};
    w.hgt = $w.height();
    w.pos = $w.scrollTop();

    const $t = jQuery(this);
    const t = {};
    t.hgt = $t.height();
    t.pos = $t.scrollTop();

    if (w.pos - w.hgt >= t.pos) {
      $t.fn.trigger();
    }

    const trig = {};
    trig.top = function () {
      if (t.pos <= w.pos - (w.hgt + t.hgt + o.padding)) {
        $t.fn.trigger();
      }
    };
    trig.center = function () {
      if (t.pos <= w.pos - (w.hgt / 2 + t.hgt / 2)) {
        $t.fn.trigger();
      }
    };
    trig.bottom = function () {
      if (t.pos <= w.pos + w.hgt) {
        $t.fn.trigger();

        console.log("ok");
      }
    };

    trig[o.trigger];
  });
};
