
// ===============================
// TREE PLANTATION PHOTO GALLERY
// ===============================

const galleryPhotos = [
    "photo12.jpeg",
    "photo13.jpeg",
    "photo14.jpeg",
    "photo15.jpeg",
    "photo16.jpeg",
    "photo17.jpeg"
];

const gallery = document.getElementById("gallery");

if (gallery) {
    gallery.innerHTML = "";

    galleryPhotos.forEach((photo, index) => {
        const img = document.createElement("img");

        img.src = photo;
        img.alt = `Tree Plantation Photo ${index + 1}`;
        img.loading = "lazy";

        img.onerror = function () {
            console.error("Image not found:", photo);
        };

        gallery.appendChild(img);
    });
}
