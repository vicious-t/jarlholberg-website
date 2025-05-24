const wildlifeImages = [
  { file: "image1.jpg", caption: "Birds in flight" },
  { file: "image2.jpg", caption: "Sponky Bird" },
  { file: "image3.jpg", caption: "Dragonfly" },
  { file: "image4.jpg", caption: "Squirrel" },
  { file: "image5.jpg", caption: "Birdie Bird" },
  { file: "image6.jpg", caption: "Protein Hunting" }
];

const natureImages = [
  { file: "image1.jpg", caption: "Frozen" },
  { file: "image2.jpg", caption: "Tree" },
  { file: "image3.jpg", caption: "Red Flower" },
  { file: "image4.jpg", caption: "Flower" },
  { file: "image5.jpg", caption: "Flower" },
  { file: "image6.jpg", caption: "Flower" }
];

function loadGallery(images, galleryId) {
  const container = document.getElementById(galleryId);
  container.innerHTML = "";

  images.forEach(({ file, caption }) => {
    if (!file) return;
    const fullPath = `images/${galleryId}/${file}`;
    const figure = document.createElement("figure");
    figure.innerHTML = `
      <a href="${fullPath}" data-lightbox="${galleryId}" data-title="${caption}">
        <img src="${fullPath}" alt="${caption}">
      </a>
      <figcaption>${caption}</figcaption>
    `;
    container.appendChild(figure);
  });
}

function showGallery(galleryId) {
  const allGalleries = document.querySelectorAll('.gallery');
  allGalleries.forEach(gallery => gallery.classList.add('hidden'));

  const active = document.getElementById(galleryId);
  if (active) active.classList.remove('hidden');

  document.querySelectorAll('.gallery-categories button').forEach(btn =>
    btn.classList.remove('active')
  );
  const activeBtn = document.getElementById('btn-' + galleryId);
  if (activeBtn) activeBtn.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
  loadGallery(wildlifeImages, "wildlife");
  loadGallery(natureImages, "nature");
  showGallery("wildlife");
});

lightbox.option({
  'fadeDuration': 300,
  'resizeDuration': 200,
  'wrapAround': false,
  'alwaysShowNavOnTouchDevices': true
});

document.addEventListener("DOMContentLoaded", () => {
  loadGallery(wildlifeImages, "wildlife");
  loadGallery(natureImages, "nature");
  showGallery("wildlife");


  document.querySelectorAll(".gallery-container img").forEach(img => {
    img.addEventListener("contextmenu", e => e.preventDefault());
    img.addEventListener("dragstart", e => e.preventDefault());
  });
});

document.addEventListener("contextmenu", function (e) {
  if (e.target && e.target.tagName === "IMG" && e.target.closest(".lightbox")) {
    e.preventDefault();
  }
});

document.addEventListener("dragstart", function (e) {
  if (e.target && e.target.tagName === "IMG" && e.target.closest(".lightbox")) {
    e.preventDefault();
  }
});