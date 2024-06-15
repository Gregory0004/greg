let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + " ]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Function to calculate the total time since the start date
function calculateTimeSince(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  const timeDifference = now - start;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

// Function to update the HTML content with the total time
function updateTimeCounter() {
  const startDate = "2022-02-15"; // Specify the start date here
  const { days, hours, minutes, seconds } = calculateTimeSince(startDate);
  const timeCounterElement = document.getElementById("timeCounter");
  if (timeCounterElement) {
    timeCounterElement.textContent = `${days} days `; //(${hours}h: ${minutes}m: ${seconds}s)`;
  }
}

// Initial update
updateTimeCounter();

// Update the counter every second
setInterval(updateTimeCounter, 1000);
