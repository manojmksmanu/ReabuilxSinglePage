window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "1";
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // Time for fade out
  }, 1000); // Time for loader to show
});

// Optional: Add form submission logic
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  });
