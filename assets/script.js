// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.toggle('open');
});

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
    });
});

// Reveal on Scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
// Initial check on load
window.addEventListener('load', reveal);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 64, // Subtract header height
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Submission (Mockup)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('border-red-500');
            } else {
                input.classList.remove('border-red-500');
            }
        });
        
        if (isValid) {
            const submitButton = contactForm.querySelector('button');
            const originalText = submitButton.innerText;
            
            submitButton.disabled = true;
            submitButton.innerText = 'Sending...';
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! This is a demo, so no real email was sent.');
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.innerText = originalText;
            }, 1500);
        }
    });
}

// Active link highlighting on scroll - applies to all nav links
const sections = document.querySelectorAll('section, footer');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href').replace('#', '');
        // Remove all active-state classes
        link.classList.remove('text-primary', 'font-semibold');
        
        // Add active styling for non-contact links
        if (href === current && href !== 'contact') {
            link.classList.add('text-primary', 'font-semibold');
        }
        // Contact menu keeps its special CSS styling automatically
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
        backToTopButton.classList.remove('invisible');
        backToTopButton.classList.remove('opacity-0');
        backToTopButton.classList.remove('translate-y-4');
    } else {
        backToTopButton.classList.remove('visible');
        backToTopButton.classList.add('invisible');
        backToTopButton.classList.add('opacity-0');
        backToTopButton.classList.add('translate-y-4');
    }
});

// Smooth scroll to top on click
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
