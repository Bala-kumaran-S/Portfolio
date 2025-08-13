// --- Mobile Menu Toggle ---
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        const navLinks = document.querySelectorAll('#mobile-menu a, header a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if(window.innerWidth < 768) { // md breakpoint
                    mobileMenu.classList.add('hidden');
                }
            });
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
