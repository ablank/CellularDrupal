cellular.jCard = function (opts) {
  var o = jQuery.extend(
    {
      cclass: "jCard",
    },
    opts
  );
  var fn = {};
  /*
  var s = $('.wrapper', $('#content')).find('section');

  s.each(function () {
    var t = $(this),
      title = t.children().first(),
      link = title.find('a').attr('href');
    if (typeof (link) != 'undefined') {
      t.wrap('<a href="' + link + '" class="project" />');
    }
    title.next().wrapAll('<div class="content"/>');
  });
  */
  fn.init = function () {
    var $obj = jQuery(this);

    $obj.one(o.cclass, function () {
      var a1 = $obj.find("a").eq(0);
      var href = a1.attr("href");

      if (href !== undefined) {
        var wrapperlink = jQuery(
          `<a href="${href}" tabindex="0" />`
        ).classify([
          `${o.cclass}-wrap`,
          a1.attr("class") ? a1.attr("class") : null,
        ]);
        $obj.wrap(wrapperlink).find("h2, h3").addClass("title");
      }
    });

    $obj
      .on("mouseenter touchstart", function () {
        $obj.activate();
      })
      .on("mouseleave touchend", function () {
        $obj.deactivate();
      });
  };

  return this.each(fn.init);
};
