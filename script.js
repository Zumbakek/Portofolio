
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const navLinks = document.getElementById("nav-links");

    toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("hidden");
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