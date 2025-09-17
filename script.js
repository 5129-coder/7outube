// script.js
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("locked-video");
  const notification = document.getElementById("notification");
  const closeBtn = document.getElementById("close-btn");

  video.addEventListener("click", () => {
    notification.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    notification.style.display = "none";
  });
});
