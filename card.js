document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const cardImage = document.getElementById("cardImage");
    const description = document.getElementById("description");

    // Use event delegation to capture clicks on images
    document.addEventListener("click", (event) => {
        // Check if the clicked element is an image with the class 'clickable-image'
        if (event.target.classList.contains("clickable-image")) {
            const imgSrc = event.target.src; // Get the clicked image source
            const imgDescription = event.target.getAttribute("data-description"); // Get the description

            // Set the source and description in the card
            cardImage.src = imgSrc;
            description.textContent = imgDescription;

            // Show the overlay
            overlay.style.display = "flex"; // Set overlay display to flex to center content
        }
    });

    // Close the overlay when clicking outside the card
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) { // Check if the click was on the overlay itself
            overlay.style.display = "none"; // Hide the overlay
        }
    });
});
