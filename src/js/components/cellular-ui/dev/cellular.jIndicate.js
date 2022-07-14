/**
 * jIndicate: Improve form interaction
 */

cellular.jIndicate = function (opts) {
  let fn = {};
          var o = jQuery.extend({
      {
        cclass: "jIndicate",
        el: "a", // The html element or .class to indicate.
        events: ["click"], // The events to detect & apply updates on.
      },
      opts
    );

  /**
   * Init jIndicate
   */
  fn.init = function ($obj) {
    let indicator = jQuery(`<div class="${  o.cclass  }-indicator"/>`);
            var ref = $obj.find(o.el);
            var events = [];

    $obj.append(indicator);

    ref.on(events, function (e) {
      let active = jQuery(this);
      active.activate();
      indicator.css({
        left: active.css("left"),
        width: active.css("width"),
      });
    });
  };

  return this.each(fn.init(jQuery(this)));
};
