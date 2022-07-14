/**
 * jTabs : Tabify a list of content
 */

cellular.jTabs = function (opts) {
  const o = jQuery.extend(
    {
      active: 0, // Array index of initially active tab
      orient: "horizontal", // || "vertical"
      cclass: "jTabs",
    },
    opts
  );
  const fn = {};

  /**
   *
   *
   * @param object $obj
   * @param object li
   */
  fn.showContent = function ($obj, li) {
    const content = li.find(".content");
    const pan = $obj.parent().find(".panel-content");

    li.activate();
    pan.fadeOut("normal", function () {
      jQuery(this).html(content.html()).fadeIn("normal");
    });
  };

  /**
   * Init jTabs
   */
  fn.init = function () {
    const $obj = jQuery(this);
    const tab = $obj.find("> li");
    const wrap = jQuery("<div/>").classify([o.orient, `${o.cclass}-wrap`]);
    const panel = '<div class="panel"><div class="panel-content" /></div>';

    $obj.once(o.cclass, function () {
      $obj.wrap(wrap).after(panel);

      tab.each(function () {
        const li = jQuery(this);

        li.addClass("tab").kidWrap();
        // Set 1st child as title
        li.children().eq(0).addClass("title");
        // Set wrapper as content
        li.children().eq(1).addClass("content").hide();
      });
    });

    // Add classes/functions to each panel
    tab.each(function () {
      const li = jQuery(this);

      li.click(function (e) {
        e.preventDefault();
        fn.showContent($obj, li);
      });
    });

    // Set default content
    fn.showContent($obj, tab.eq([o.active]));
  };

  return this.each(fn.init);
};
