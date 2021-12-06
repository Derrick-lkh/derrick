$(document).ready(function () {
  typingAnimation();
  // findDate();

  $(".gallery").slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: false,
    arrows: false,
    centerPadding: "25%",
    centerMode: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          centerMode: false,
          autoplay: false,
        },
      },
    ],
  });

  let numRoll = false;
  $(window).scroll(function () {
    let windowHeight = $(window).scrollTop() + $(window).height();
    let numBlock = $(".text-block").offset().top;
    if (windowHeight > numBlock && numRoll == false) {
      numRoll = true;
      $(".number-block .number").each(function () {
        console.log("block");
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 2000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
    }
    // banner
    $(".hero-banner img").css({
      top: $(window).scrollTop() * 0.4 + "px",
    });
  });
});

function typingAnimation() {
  const typedTextSpan = $(".type-text");
  const cursorSpan = $(".cursor");
  const textArray = ["Professional", "Student", "Designer", "Developer"];

  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;

  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.text(textArray[textArrayIndex].substring(0, charIndex + 1));
      charIndex++;
      cursorSpan.addClass("typing");
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.removeClass("typing");
      setTimeout(erase, newTextDelay);
    }
  }
  function erase() {
    if (charIndex > 0) {
      typedTextSpan.text(textArray[textArrayIndex].substring(0, charIndex - 1));
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      if (textArrayIndex < textArray.length - 1) {
        textArrayIndex++;
      } else {
        textArrayIndex = 0;
      }
      setTimeout(type, typingDelay);
    }
  }

  setTimeout(type, newTextDelay);
}

function findDate() {
  var one_day = 1000 * 60 * 60 * 24;
  var present_date = new Date();
  var dayStarted = new Date("2017-04-20");
  if (present_date.getMonth() == 11 && present_date.getdate() > 25)
    dayStarted.setFullYear(dayStarted.getFullYear() + 1);
  var Result =
    Math.round(dayStarted.getTime() - present_date.getTime()) / one_day;
  var Final_Result = Math.abs(Result.toFixed(0));
  $("#numDays").text(Final_Result);
}
