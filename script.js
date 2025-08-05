const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links').innerHTML; // Get the inner HTML of the desktop links

// Populate mobile menu with the same links
document.getElementById('mobile-nav-links').innerHTML = navLinks;

// Toggle mobile menu visibility
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
});

// Close mobile menu when a link is clicked
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
    });
});

(function () {
    emailjs.init("NSN7FVHjKC8dw_D5Q");
})();

function sendEmail(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    emailjs.send("service_ersan", "template_z0gf0eu", templateParams)
        .then(function (response) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        }, function (error) {
            alert("Failed to send message. Please try again.");
            console.error(error);
        });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate skill bars when scrolled into view
const animateSkillBars = () => {
    const skills = document.querySelectorAll('.skill-progress-fill');
    const skillsSection = document.getElementById('skills');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skills.forEach(skill => {
                    skill.style.width = skill.parentElement.previousElementSibling.lastElementChild.textContent;
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(skillsSection);
};

// Run when page loads
window.addEventListener('load', animateSkillBars); 