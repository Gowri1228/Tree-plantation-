

const weeks = [
  {
    title: "Week 1 – Introduction to Tree Plantation",
    description: "Introduction to the importance of trees and environmental protection.",
    activities: "Studied the importance of trees, their benefits and the need for plantation.",
    outcome: "Understood the importance of greenery and environmental awareness."
  },
  {
    title: "Week 2 – Identification of Trees",
    description: "Identifying different types of trees and their uses.",
    activities: "Observed different tree species and learned about their characteristics.",
    outcome: "Gained knowledge about tree species and their environmental benefits."
  },
  {
    title: "Week 3 – Nursery and Sapling Preparation",
    description: "Learning about saplings, seeds and nursery preparation.",
    activities: "Observed sapling preparation and learned about soil, water and plant growth.",
    outcome: "Understood the basic requirements for growing healthy plants."
  },
  {
    title: "Week 4 – Tree Plantation Activity",
    description: "Participating in practical tree plantation activities.",
    activities: "Selected suitable locations, prepared the soil and planted saplings.",
    outcome: "Learned practical methods of planting trees."
  },
  {
    title: "Week 5 – Tree Care and Awareness",
    description: "Taking care of planted saplings and creating public awareness.",
    activities: "Watered plants, observed their growth and explained the importance of trees.",
    outcome: "Understood the importance of maintaining planted trees."
  },
  {
    title: "Week 6 – Project Review and Conclusion",
    description: "Reviewing plantation activities and sharing our learning experiences.",
    activities: "Reviewed the project activities, documented observations and discussed results.",
    outcome: "Developed environmental responsibility and teamwork."
  }
];

// Six Weeks Activities Section

const activitiesContainer =
  document.getElementById("weeklyActivities");

weeks.forEach((week) => {
  const card = document.createElement("div");
  card.className = "week-card";

  card.innerHTML = `
    <h3>🌿 ${week.title}</h3>
    <p>${week.description}</p>

    <button type="button" aria-expanded="false">
      View Activity Details +
    </button>

    <div class="activity-details">
      <p><strong>Activities:</strong> ${week.activities}</p>
      <p><strong>Learning Outcome:</strong> ${week.outcome}</p>
      <p><strong>Person In-charge Signature:</strong> __________</p>
    </div>
  `;

  const button = card.querySelector("button");
  const details = card.querySelector(".activity-details");

  button.addEventListener("click", () => {
    const isOpen = details.classList.toggle("show");

    button.textContent = isOpen
      ? "Hide Activity Details −"
      : "View Activity Details +";

    button.setAttribute("aria-expanded", isOpen);
  });

  activitiesContainer.appendChild(card);
});

// Main Gallery – Only 6 Photos

const galleryContainer =
  document.getElementById("photoGallery");

const galleryPhotos = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg"
];

galleryPhotos.forEach((src, index) => {
  const card = document.createElement("div");
  card.className = "gallery-card";

  const image = document.createElement("img");
  image.src = src;
  image.alt = `Tree Plantation Project Photo ${index + 1}`;
  image.loading = "lazy";

  image.onerror = () => {
    image.alt = "Please upload the correct activity photo";
  };

  image.addEventListener("click", () => {
    if (image.complete && image.naturalWidth > 0) {
      window.open(image.src, "_blank", "noopener");
    }
  });

  card.appendChild(image);
  galleryContainer.appendChild(card);
});
