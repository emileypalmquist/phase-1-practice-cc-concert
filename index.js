// See the first bands's details when the page loads.
// The number of seats at the show for the band can be calculated by subtracting the reserved from capacity.

// url = http://localhost:3000/bands
// fetch - allows to get request band details
// turn response from JSON to a javascript object
// get first one from the array index 0
// update dom with band details
//  - find the elements that want to update
//  - src and alt for image
//  - textContent for name, genre, remaining spots

const URL = "http://localhost:3000/bands";

function bandDetails(bands) {
  const firstBand = bands[0];

  const image = document.querySelector("#band-image");
  image.src = firstBand.image;
  image.alt = firstBand.name;

  const name = document.getElementById("band-name");
  name.textContent = firstBand.name;

  const genre = document.querySelector("#band-genre");
  genre.textContent = firstBand.genre;

  const remainingSpan = document.getElementById("remaining-spots");
  const reserved = firstBand.reserved;
  const capacity = firstBand.capacity;
  const remaining = capacity - reserved;
  remainingSpan.textContent = remaining;
}

function getBands() {
  fetch(URL)
    .then((response) => response.json())
    .then(bandDetails);
}

getBands();
