$(document).ready(function () {
  typingAnimation();

  $(".gallery").slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "25%",
  });

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
