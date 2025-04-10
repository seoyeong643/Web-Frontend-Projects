const imageSources = [
  "assets/trail.jpeg",
  "assets/lakesunset.jpeg",
  "assets/cabin.jpeg",
  "assets/doe.jpeg",
  "assets/starrynight.jpeg",
];

function addThumbnail(imageSource) {
  // 1.1 Create the element
  const imgElement = document.createElement("img");
  // 1.2 Customize the element
  imgElement.src = imageSource;
  imgElement.classList.add("thumbnail");
  // 1.3 Append the element
  const thumbnailContainer = document.getElementById("thumbnail-container");
  thumbnailContainer.appendChild(imgElement);
  // 1.4 Add the onclick
  imgElement.onclick = function () {
    const fullsizeImage = document.getElementById("fullsize-image");
    fullsizeImage.src = imageSource;
  };
}

function addAllThumbnails() {
  // 2.1 Loop through imageSources
  for (let i = 0; i < imageSources.length; i++) {
    // 2.2 Call addThumbnail each iteration
    addThumbnail(imageSources[i]);
  }
}

// 2.3 Call addAllThumbnails
addAllThumbnails();

// LevelUp Display the first image on page load
window.onload = function () {
  const fullsizeImage = document.getElementById("fullsize-image");
  fullsizeImage.src = imageSources[0];
};
