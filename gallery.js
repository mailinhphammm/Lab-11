function galImage1Function(event) {
  event.preventDefault();
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
newGalley1Img.setAttribute("src", "images/flying-car-593.jpg");
newGalley1Img.setAttribute("alt", "White Flying Car");
//add a caption
var newGallery1caption = document.createElement("p");
var newGallery1captionText = document.createTextNode("White Flying Car.");
//add text to the paragraph
newGallery1caption.appendChild(newGallery1captionText);
//add the para to the gallery div
changingContentDiv.appendChild(newGallery1caption);
}
function init() {
  var galImage1 = document.getElementById("image1");
  galImage1.addEventListener("click", galImage1Function, false);
}
///wait until all DOM is loaded before calling the function
window.addEventListener("load",init,false);