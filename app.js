const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const t1 = new TimelineMax();

t1.fromTo(hero, 1, { height: "0%" }, { height: "70%", ease: Power2.easeInOut })
  .fromTo(hero, 1.2, { width: "80%" }, { width: "70%" })
  .fromTo(
    slider,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  );

$(".navbar a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html,body").animate({ scrollTop: $(hash).offset().top }, 800);
  }
});

function sendmail() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var message = document.getElementById("message");
}

var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
form.addEventListener("submit", function(e) {
  setTimeout(function() {
    submitButton.value = "Sending...";
    submitButton.disabled = true;
  }, 1);
});
