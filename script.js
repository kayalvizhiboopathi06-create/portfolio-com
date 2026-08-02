console.log("SCRIPT.JS LOADED");

// EmailJS initialization
emailjs.init({
    publicKey: "QNyIvuAmcSdnh4olN"
});

// Contact Form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    formMessage.textContent = "Sending...";

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send(
        "service_9bg4kpt",
        "template_5u6bu2d",
        templateParams
    )
    .then(function (response) {

        console.log("SUCCESS!", response.status, response.text);

        formMessage.textContent = "Message sent successfully! ✅";

        contactForm.reset();

    })
    .catch(function (error) {

        console.error("EmailJS Error:", error);

        formMessage.textContent =
            "Message failed to send ❌";

    });
});



const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});