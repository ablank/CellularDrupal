cellular.jParallax = function (opts) {
  const o = jQuery.extend(
    {
      speed: 0.1,
      direction: "vertical", // 'vertical' || 'horizontal'
    },
    opts
  );
  const fn = {};

  fn.update = function ($obj) {
    const win = jQuery(window);
    const bg = $obj.css("background-position").split(" ");
    const xPos = parseInt(bg[0]);
    const yPos = parseInt(bg[1]);
    let bgPos = "";

    switch (o.direction) {
      case "horizontal":
        // bgPos = xPos + (win.scrollLeft() * (-o.speed)) + 'px ' + yPos
        break;

      case "vertical":
      default:
        bgPos = `${xPos} ${yPos}${win.scrollTop() * -o.speed}px`;
        break;
    }

    // console.log(bgPos);

    $obj.css("background-position", bgPos);
    /*
     function parallax() {
     var yPos = $(window).scrollTop();
     var bgPos = '-120px ' + ((yPos * (-0.1)) - 70) + 'px';
     $('#app').css('background-position', bgPos);
     }
     */
  };

  return this.each(function () {
    const $obj = jQuery(this);

    $obj.addClass(cellular.opts.cclass);

    jQuery(window).scroll(fn.update($obj));
  });
};
