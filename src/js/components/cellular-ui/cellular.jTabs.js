/**
 * jTabs : Tabify a list of content
 */

cellular.jTabs = function (opts) {
  var o = jQuery.extend(
    {
      active: 0, // Array index of initially active tab
      orient: "horizontal", // || "vertical"
      cclass: "jTabs",
    },
    opts
  );
  var fn = {};

  /**
   *
   *
   * @param object $obj
   * @param object li
   */
  fn.showContent = function ($obj, li) {
    var content = li.find(".content");
    var pan = $obj.parent().find(".panel-content");

    li.activate();
    pan.fadeOut("normal", function () {
      jQuery(this).html(content.html()).fadeIn("normal");
    });
  };

  /**
   * Init jTabs
   */
  fn.init = function () {
    var $obj = jQuery(this);
    var tab = $obj.find("> li");
    var wrap = jQuery("<div/>").classify([o.orient, `${o.cclass}-wrap`]);
    var panel = '<div class="panel"><div class="panel-content" /></div>';

    $obj.one(o.cclass, function () {
      $obj.wrap(wrap).after(panel);

      tab.each(function () {
        var li = jQuery(this);

        li.addClass("tab").kidWrap();
        // Set 1st child as title
        li.children().eq(0).addClass("title");
        // Set wrapper as content
        li.children().eq(1).addClass("content").hide();
      });
    });

    // Add classes/functions to each panel
    tab.each(function () {
      var li = jQuery(this);

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
