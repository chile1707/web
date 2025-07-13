document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainMenu = document.querySelector('.main-menu ul'); // Target the ul inside main-menu

    if (mobileMenuToggle && mainMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mainMenu.classList.toggle('active'); // Toggle a class to show/hide the menu
        });
    }

    // Optional: Close mobile menu when a link is clicked
    mainMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainMenu.classList.contains('active')) {
                mainMenu.classList.remove('active');
            }
        });
    });
    // Product Detail Page Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const targetTabId = button.dataset.tab;
            document.getElementById(targetTabId).classList.add('active');
        });
    });

    // Product Image Gallery (Thumbnail click)
    const mainProductImage = document.querySelector('.product-image-gallery > img');
    const thumbnailImages = document.querySelectorAll('.thumbnail-gallery img');

    if (mainProductImage && thumbnailImages.length > 0) {
        thumbnailImages.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Update main image src
                mainProductImage.src = thumbnail.src;

                // Remove active class from all thumbnails
                thumbnailImages.forEach(thumb => thumb.classList.remove('active'));
                // Add active class to clicked thumbnail
                thumbnail.classList.add('active');
            });
        });
        // Set first thumbnail as active by default
        thumbnailImages[0].classList.add('active');
    }
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling; // Get the next sibling (faq-answer)

            // Toggle active class on the question button
            question.classList.toggle('active');

            // Toggle max-height for the answer to show/hide it
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null; // Collapse
                answer.style.paddingBottom = '0';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px'; // Expand to content height
                answer.style.paddingBottom = '25px'; // Restore padding
            }
        });
    });
    // Handle submenu for touch devices (optional, but good practice)
    const hasSubmenus = document.querySelectorAll('.has-submenu > a');
    hasSubmenus.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) { // Adjust breakpoint as needed
                e.preventDefault(); // Prevent default link behavior on mobile
                const parentLi = link.parentElement;
                parentLi.classList.toggle('open'); // Toggle a class to show/hide submenu
            }
        });
    });
});