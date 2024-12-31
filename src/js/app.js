document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const content = document.getElementById("content");

  // Function to toggle the navbar/sidebar
  function toggleNavbar() {
    // Toggle only for small screens
    if (window.innerWidth <= 768) {
      navbar.classList.toggle("hidden");
    }
  }

  // Attach event listener to the toggler button
  const toggleButton = document.getElementById("toggle-navbar");
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleNavbar);
  }

  // Dynamically load content when navbar links are clicked
  document.querySelectorAll("#navbar nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = e.target.getAttribute("href").substring(1);

      // Update content dynamically
      content.innerHTML = `
                <button id="toggle-navbar">☰</button>
                <section id="${section}">
                    <h2>${
                      section.charAt(0).toUpperCase() + section.slice(1)
                    } Section</h2>
                    <p>Content for ${section} goes here!</p>
                </section>
            `;

      // Reattach the toggler after updating the DOM
      const newToggleButton = document.getElementById("toggle-navbar");
      if (newToggleButton) {
        newToggleButton.addEventListener("click", toggleNavbar);
      }
    });
  });
});
