(function ($) {
  $.fn.pagePreloaders = function (options) {
    var settings = $.extend({}, options);

    return this.each(function () {
      $("body").append(
        '<div id="animationPreloader-2">' +
          '<div class="object2" id="object_one2"></div>' +
          '<div class="object2" id="object_two2"></div>' +
          '<div class="object2" id="object_three2"></div>' +
          '<div class="object2" id="object_four2"></div>' +
          "</div>" +
          '<div id="animationPreloader-8">' +
          '<div class="object8" id="object_one8"></div>' +
          "</div>" +
          '<div id="loading"></div>' +
          '<div id="imagePreloader" style="background-image: url(' +
          settings.imageURL +
          ')"</div>'
      );

      var imagePreloader = $("#imagePreloader");
      settings.preloaderStyle == "logo"
        ? $(imagePreloader).show() +
          $("#animationPreloader-" + settings.animationPreloader).hide()
        : $(imagePreloader).hide() +
          $("#animationPreloader-" + settings.animationPreloader).show();

      $("#loading").css({
        "background-color": settings.backgroundColor,
        opacity: settings.backgroundOpacity,
      });
      $(imagePreloader).css({
        "background-color": settings.logoBackgroundColor,
        opacity: settings.logoOpacity,
        height: settings.logoSize,
        width: settings.logoSize,
        border:
          "solid" + settings.logoBorderColor + " " + settings.logoBorderWidth,
        "border-radius": settings.logoBorderRadius,
      });

      $("#animationPreloader-" + settings.animationPreloader).css(
        "opacity",
        settings.animationPreloaderOpacity
      );

      $(imagePreloader).css(
        "top",
        ($(window).height() - $(imagePreloader).outerHeight()) / 2 +
          $(window).scrollTop() +
          "px"
      );
      $(imagePreloader).css(
        "left",
        ($(window).width() - $(imagePreloader).outerWidth()) / 2 +
          $(window).scrollLeft() +
          "px"
      );

      function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        if (Idx > 0)
          return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
        else if (!!navigator.userAgent.match(/Trident\/7\./)) return 11;
        else return 0;
      }

      if (GetIEVersion() > 0) {
        $(imagePreloader).css({
          border: "solid",
          "border-width": settings.logoBorderWidth,
          "border-color": settings.logoBorderColor,
        });
      }

      if (settings.animationPreloader == "1") {
        $("#animationPreloader-1").css({ visibility: "visible" });
        $(".object" + settings.animationPreloader).css(
          "border",
          "solid 4px" + settings.animationPreloaderColor
        );

        if (GetIEVersion() > 0) {
          $(".object" + settings.animationPreloader).css({
            "border-style": "solid",
            "border-color": settings.animationPreloaderColor,
            "border-width": "4px",
          });
        }
      } else if (settings.animationPreloader == "2") {
        $("#animationPreloader-2").css({ visibility: "visible" });
        $(".object" + settings.animationPreloader).css(
          "background-color",
          settings.animationPreloaderColor
        );
      } else if (settings.animationPreloader == "3") {
        $("#animationPreloader-3").css({ visibility: "visible" });
        $(".object" + settings.animationPreloader).css(
          "background-color",
          settings.animationPreloaderColor
        );
      } else if (settings.animationPreloader == "4") {
        $("#animationPreloader-4").css({ visibility: "visible" });
        $(".object" + settings.animationPreloader).css(
          "background-color",
          settings.animationPreloaderColor
        );
      } else if (settings.animationPreloader == "5") {
        $("#animationPreloader-5").css({ visibility: "visible" });
        $(".object" + settings.animationPreloader).css(
          "background-color",
          settings.animationPreloaderColor
        );
      } else if (settings.animationPreloader == "6") {
        $("#animationPreloader-6").css({ visibility: "visible" });
        $(".object" + settings.animationPreloader).css(
          "background-color",
          settings.animationPreloaderColor
        );
      } else if (settings.animationPreloader == "7") {
        $("#animationPreloader-7").css({ visibility: "visible" });
        $(".object" + settings.animationPreloader).css(
          "background-color",
          settings.animationPreloaderColor
        );
      } else if (settings.animationPreloader == "8") {
        $("#animationPreloader-8").css({ visibility: "visible" });
        $(".object" + settings.animationPreloader).css(
          "background-color",
          settings.animationPreloaderColor
        );
      } else if (settings.animationPreloader == "9") {
        $("#animationPreloader-9").css({ visibility: "visible" });
        $(".object" + settings.animationPreloader).css(
          "background-color",
          settings.animationPreloaderColor
        );
      } else if (settings.animationPreloader == "10") {
        $("#animationPreloader-10").css({ visibility: "visible" });
        $(".object" + settings.animationPreloader).css({
          "border-left": "solid 5px" + settings.animationPreloaderColor,
          "border-right": "solid 5px" + settings.animationPreloaderColor,
        });

        if (GetIEVersion() > 0) {
          $(".object" + settings.animationPreloader).css({
            "border-left-style": "solid",
            "border-left-width": "5px",
            "border-left-color": settings.animationPreloaderColor,
            "border-right-style": "solid",
            "border-right-width": "5px",
            "border-right-color": settings.animationPreloaderColor,
          });
        }
      } else if (settings.animationPreloader == "11") {
        $("#animationPreloader-11").css({ visibility: "visible" });
        $(".object" + settings.animationPreloader).css({
          "border-top": "solid 5px" + settings.animationPreloaderColor,
          "border-left": "solid 5px" + settings.animationPreloaderColor,
        });

        if (GetIEVersion() > 0) {
          $(".object" + settings.animationPreloader).css({
            "border-left-style": "solid",
            "border-left-width": "5px",
            "border-left-color": settings.animationPreloaderColor,
            "border-top-style": "solid",
            "border-top-width": "5px",
            "border-top-color": settings.animationPreloaderColor,
          });
        }
      } else {
        $(this).css({ visibility: "hidden" });
      }

      var beforeload = new Date().getTime();
      $(function () {
        var afterload = new Date().getTime();
        seconds = (afterload - beforeload) / 1000;
        var animTime = settings.animationTime;

        animTime > seconds
          ? +$(
              "#loading, #imagePreloader, #animationPreloader-" +
                settings.animationPreloader
            )
              .delay(settings.animationTime * 1000)
              .fadeOut(800)
          : +$(
              "#loading, #imagePreloader, #animationPreloader-" +
                settings.animationPreloader
            )
              .delay(seconds)
              .fadeOut(800);
      });
    });
  };
})(jQuery);

// document.onreadystatechange = function () {
//     var state = document.readyState
//     if (state == 'interactive') {
//          document.getElementById('contents').style.visibility="hidden";
//     } else if (state == 'complete') {
//         setTimeout(function(){
//            document.getElementById('interactive');
//            document.getElementById('load').style.visibility="hidden";
//            document.getElementById('contents').style.visibility="visible";
//         },1000);
//     }
//   }
// document.onreadystatechange = function () {
//     var state = document.readyState
//     if (state == 'interactive') {
//          document.getElementById('contents').style.visibility="hidden";
//     } else if (state == 'complete') {
//         setTimeout(function(){
//            document.getElementById('interactive');
//            document.getElementById('load').style.visibility="hidden";
//            document.getElementById('contents').style.visibility="visible";
//         },1000);
//     }
//   }

// loader call
$(function () {
  $(document).pagePreloaders({
    //Main Options
    preloaderStyle: "logo", // Preloader style: animation, logo
    backgroundColor: "#53abb5", // Preloader background color
    backgroundOpacity: 1, // Preloader background opacity: 0.1 to 1
    animationTime: "1.5", // Minimum preloader display time in seconds (prevents the preloader from disappearing too fast)

    //Animation Preloader Options
    animationPreloader: "8", // Choose from 11 preload animations. Enter any value from 1 to 11
    animationPreloaderColor: "#fff", // Animation color
    animationPreloaderOpacity: "1", // Animation opacity: 0.1 to 1

    //Logo Preloader Options
    imageURL: "assets/images/joker.png", // Path to your logo image
    logoSize: "150px", // Size of the displayed logo (image proportions will be constrained to retain the quality)
    logoBackgroundColor: "transparent", // Logo background color
    logoOpacity: "1", // Logo opacity: 0.1 to 1
    logoBorderWidth: "5px", // Logo stroke color width
    logoBorderColor: "#3cf", // Logo stroke color
    logoBorderRadius: "50%", // Logo corner radius
  });
});
