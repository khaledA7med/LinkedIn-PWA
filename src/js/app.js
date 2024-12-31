document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");

  // Function to toggle the sidebar
  function toggleSidebar() {
    sidebar.classList.toggle("hidden");
    content.classList.toggle("full");
  }

  // Attach event listener to the toggler button
  function attachToggler() {
    const toggleButton = document.getElementById("toggle-sidebar");
    if (toggleButton) {
      toggleButton.addEventListener("click", toggleSidebar);
    }
  }

  // Initial attachment
  attachToggler();

  // Dynamically load content when sidebar links are clicked
  document.querySelectorAll("#sidebar nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = e.target.getAttribute("href").substring(1);

      // Update content dynamically
      content.innerHTML = `
                <button id="toggle-sidebar">☰</button>
                <section id="${section}">
                    <h2>${
                      section.charAt(0).toUpperCase() + section.slice(1)
                    } Section</h2>
                    <p>Content for ${section} goes here!</p>
                </section>
            `;

      // Reattach the toggler after updating the DOM
      attachToggler();
    });
  });
});
