//Global variables
var galleryImages = ["flying-car-593.jpg","flying-car-m400.jpg", "log200711a.jpg", "flyingCar-article.jpg", "saucercarSplash_450x325.jpg"];
var galleryCaptions = ["White Flying Car","Red Open cockpit Flying Car", "Black and White front of plane", "Creme in air Flying Car", "Man in flying car"];

function genericImage1Function(event) {
    event.preventDefault();
    var image = "images/" + galleryImages[0];
    var caption = galleryCaptions [0];

    //where to place all the new content
    var changingContentDiv = document.getElementById("gallery");
    //remove all existing stuff in div
    while (changingContentDiv.hasChildNodes()) {
      changingContentDiv.removeChild(changingContentDiv.lastChild);
  }
  
  //create image
  var newGalley1Img = document.createElement("img");
  //add image to gallery div
  changingContentDiv.appendChild(newGalley1Img);
  //set the src and alt of the image
  newGalley1Img.setAttribute("src", image);
  newGalley1Img.setAttribute("alt", caption);
  //add a caption
  var newGallery1caption = document.createElement("p");
  var newGallery1captionText = document.createTextNode(caption);
  //add text to the paragraph
  newGallery1caption.appendChild(newGallery1captionText);
  //add the para to the gallery div
  changingContentDiv.appendChild(newGallery1caption);
  }
  function init() {
    var galImage1 = document.getElementById("image1");
    galImage1.addEventListener("click", genericImage1Function, false);
  }
  ///wait until all DOM is loaded before calling the function
  window.addEventListener("load",init,false);