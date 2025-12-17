// --- Mobile Menu Toggle ---
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
        });

        // Optional: Hide menu when a link is clicked (for better UX)
        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        });
    }
});

// Function to open the modal
const openModal = () => {
    ideaModal.classList.remove('opacity-0', 'pointer-events-none');
};

// Function to close the modal
const closeModal = () => {
    ideaModal.classList.add('opacity-0', 'pointer-events-none');
};

generateIdeaButton.addEventListener('click', async () => {
    openModal();
    ideaContent.innerHTML = '<p>LOADING TRANSMISSION...<span class="blinking-cursor">_</span></p>';
    await generateProjectIdea();
});
closeModalButton.addEventListener('click', closeModal);
