cellular.jToggle = function (opts) {
  const o = jQuery.extend(
    {
      maxheight: 500,
      maxwidth: 500,
      easing: "swing",
      single: false,
    },
    opts
  );

  const fn = {};

  fn.showContent = function ($li) {
    if (o.single === true) {
      $li
        .siblings(".active")
        .deactivate()
        .find(".panel")
        .slideUp(o.duration, o.easing);
    }

    $li.activate().find(".panel").slideToggle(o.duration, o.easing);
  };

  return this.each(function () {
    const $obj = jQuery(this);
    const li = $obj.find("li");

    $obj.addClass(cellular.opts.cclass);
    // fn.style($obj);
    // Add classes/functions to each panel
    li.each(function () {
      const $t = jQuery(this);

      $t.kidWrap();

      $t.children().eq(0).addClass("title");
      $t.children().eq(1).addClass("panel");

      $t.find(".panel").hide();

      $t.find(".title").click(function (e) {
        e.preventDefault();
        fn.showContent($t);
      });
    });

    // Set default content
    fn.showContent($obj.children().eq(o.active));
  });
};
