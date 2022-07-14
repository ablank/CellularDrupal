cellular.jCard = function (opts) {
  const o = jQuery.extend(
    {
      cclass: "jCard",
    },
    opts
  );
  const fn = {};

  fn.init = function () {
    const $obj = jQuery(this);

    $obj.once(o.cclass, function () {
      const a1 = $obj.find("a").eq(0);
      const href = a1.attr("href");

      if (href !== undefined) {
        const wrapperlink = jQuery(
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
