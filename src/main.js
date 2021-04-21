import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Apod from "./apod.js";
import Rover from "./rover.js";

function getPhotos(photoArray) {
  if (photoArray.photos) {
    $(".displayPhotos").html(
      `<img src=${photoArray.photos[0].img_src}><img src=${photoArray.photos[100].img_src}>`
    );
  } else {
    $(".showErrors").text(`There was an error: ${photoArray.message}`);
  }
}

$(document).ready(function () {
  let promise = Apod.getDate();
  promise.then(function (response) {
    const body = JSON.parse(response);
    $(".apod").html(`<img src=${body.url}>`);
    $(".explanation").text(`${body.explanation}`);
  });
  Rover.getRover().then(function (response) {
    getPhotos(response);
  });
});

// function displayGif(response) {
//   const url = response.data[0].images.downsized.url
//   $('.show-gif').html(`<img src='${url}'>`);
// }

// {
//   "date": "2021-04-21",
//   "explanation": "When galaxies collide -- what happens to their magnetic fields? To help find out, NASA pointed SOFIA, its flying 747, at galactic neighbor Centaurus A to observe the emission of polarized dust -- which traces magnetic fields.  Cen A's unusual shape results from the clash of two galaxies with jets powered by gas accreting onto a central supermassive black hole.  In the resulting featured image, SOFIA-derived magnetic streamlines are superposed on ESO (visible: white), APEX (submillimeter: orange), Chandra (X-rays: blue), and Spitzer (infrared: red) images. The magnetic fields were found to be parallel to the dust lanes on the outskirts of the galaxy but distorted near the center.  Gravitational forces near the black hole accelerate ions and enhance the magnetic field.  In sum, the collision not only combined the galaxies’ masses -- but amplified their magnetic fields.  These results provide new insights into how magnetic fields evolved in the early universe when mergers were more common.",
//   "hdurl": "https://apod.nasa.gov/apod/image/2104/CenA_SofiaPlusB_2480.jpg",
//   "media_type": "image",
//   "service_version": "v1",
//   "title": "Centaurus A's Warped Magnetic Fields",
//   "url": "https://apod.nasa.gov/apod/image/2104/CenA_SofiaPlusB_960.jpg"
// }
