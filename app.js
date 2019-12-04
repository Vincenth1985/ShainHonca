const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");

const t1 = new TimelineMax();

t1.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
  .fromTo(hero, 1.2, { width: "100%" }, { width: "80%" })
  .fromTo(
    slider,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  );

var Pictures = [];
var x = 3;

Pictures.push("/img/2.jpg");
Pictures.push("/img/5.jpg");
Pictures.push("/img/3.jpg");

function imgGallery() {
  Pictures.forEach(element => {
    console.log(element);
  });
}

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
