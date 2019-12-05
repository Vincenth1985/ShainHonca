var serie = [];

serie.push("/gallery/2.jpg");
serie.push("/gallery/5.jpg");
serie.push("/gallery/3.jpg");

let index = 1;

function imgGallery() {
  if (index >= serie.length) {
    index = 0;
  }
  let imageSerie = document.getElementById("serie");
  imageSerie.setAttribute("src", serie[index]);
  index++;
}
