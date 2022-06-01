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

// See all bands playing menu of all movies on the left side of the page in the #band-list element when the page loads.
// see all band names in the band list
// li for band name

// loop through array of bands in bandDetails
//  - create li element
//  - set li text content ot band name
//  - find #band-list element
//  - append li to band list

// Reserve a seat for a show. After clicking the "Reserve" button, I should see the number of available tickets decrease. I should not be able to buy a ticket if the showing only has 0 spots available). No persistence is needed for this feature.

const URL = "http://localhost:3000/bands";

function listenForReserveClick(span) {
  let currentRemaining = parseInt(span.textContent);
  const button = document.getElementById("reserve-button");
  button.addEventListener("click", (e) => {
    // if (currentRemaining > 0) {
    //   --currentRemaining;
    //   span.textContent = currentRemaining;
    // }
    --currentRemaining;
    span.textContent = currentRemaining;

    if (currentRemaining === 0) {
      button.remove();
    }
  });
}

function displayBandNames(bands) {
  bands.forEach((band) => {
    const li = document.createElement("li");
    li.textContent = band.name;

    const bandList = document.getElementById("band-list");
    bandList.append(li);
  });
}

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

  displayBandNames(bands);
  listenForReserveClick(remainingSpan);
}

function getBands() {
  fetch(URL)
    .then((response) => response.json())
    .then(bandDetails);
}

getBands();
