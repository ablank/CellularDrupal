cellular.jParallax = function (opts) {
  var o = jQuery.extend(
    {
      speed: 0.1,
      direction: "vertical", // 'vertical' || 'horizontal'
    },
    opts
  );
  var fn = {};

  fn.update = function ($obj) {
    var win = jQuery(window);
    var bg = $obj.css("background-position").split(" ");
    var xPos = parseInt(bg[0]);
    var yPos = parseInt(bg[1]);
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
    var $obj = jQuery(this);

    $obj.addClass(cellular.opts.cclass);

    jQuery(window).scroll(fn.update($obj));
  });
};
