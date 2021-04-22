import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Apod from "./apod.js";
import Rover from "./rover.js";

// Main Objective
// getPhotos(): use a for loop to display all images in the array
// Optional:
// Add more image photo info in getPhotos()
// Incorporate a video
// include the weather details on Mars

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
