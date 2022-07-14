cellular.jModal = function (opts) {
  const o = jQuery.extend(
    {
      cclass: "jModal",
      dataattr: "data-modal",
      groupattr: "data-album",
      offsetX: 10, // % or vw
      offsetY: 10, // % or vh
      // caption: "data-caption",
      // timeout: 10000,
      // fitImg: true, // Scale images to user viewport.
      trigger: "click",
    },
    opts
  );
  const fn = {};

  /**
   *
   */
  fn.load = function ($obj, state) {
    const win = jQuery(`.${o.cclass}-window`);
    const overlay = jQuery(`#${o.cclass}-overlay`);
    const contentpane = win.find(`.${o.cclass}-content`);
    let content;

    // show loading icon
    state.active = true;
    overlay.activate();

    // determine content source
    if (typeof $obj.attr(o.dataattr) !== "undefined") {
      content = $obj.attr(o.dataattr);
    } else if ($obj.attr("href") !== "undefined") {
      content = $obj.attr("href");
    }

    // load content
    $.ajax({
      url: content,
      context: document.body,
      timeout: o.timeout,
      success(data) {
        console.log(data);
        // Remove loading icon

        // Re-position/re-size window to fit content
        win.css({
          height: `${100 - o.offsetY * 2}vh`,
          width: `${100 - o.offsetX * 2}vw`,
          top: `${o.offsetY}vh`,
          left: `${o.offsetX}vw`,
        });

        // Show content
        contentpane.html(data).activate();
      },
      error(jqXHR, textStatus) {
        state.activate = false;
        overlay.deactivate();
        console.log(`AJAX Request failed: ${textStatus}`);
      },
    });
  };

  fn.close = function (state) {
    const modal = jQuery(`#${o.cclass}-overlay`);
    state.active = false;

    modal.deactivate().find(`.${o.cclass}-window`).deactivate();

    modal.find(`.${o.cclass}-content`).deactivate().html("");
  };

  /**
   * Generate markup for controls & other elements.
   *
   * @param object $obj
   */
  fn.style = function ($obj) {
    const modal = jQuery(`<div class="${o.cclass}-window" />`)
      .append(`<div class="${o.cclass}-content" />`)
      .append(`<span class="${o.cclass}-close" aria-label="Close" />`);
    const overlay = jQuery(`<div id="${o.cclass}-overlay" />`).append(modal);

    if (!jQuery(`#${o.cclass}-overlay`).length) {
      jQuery("body").append(overlay);
    }
  };

  /**
   *
   */
  fn.events = function ($obj, state) {
    $obj.on("click", function (e) {
      e.preventDefault();
      fn.load($obj, state);
    });

    jQuery(document).on("keyup", function (e) {
      if (state.active === true && e.which === 27) {
        fn.close(state);
      }
    });

    jQuery(`#${o.cclass}-overlay, .${o.cclass}-close`).on("click", function () {
      fn.close(state);
    });
  };
  /**
   * Init jModal
   */
  fn.init = function () {
    const $obj = jQuery(this);
    const state = {
      active: false,
      group: o.groupattr.length ? o.groupattr : null,
    };
    // Generate markup for modal
    jQuery(`.${o.cclass}`).once(o.cclass, fn.style($obj));
    // Listen for events
    fn.events($obj, state);
  };

  return this.each(fn.init);
};
