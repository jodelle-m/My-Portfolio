function myMenuFunction() {
    const menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "navMenu") {
        menuBth.className += "responsive";
    } else {
        menuBth.className = "nav-menu";
    }

}

function validateContactForm(){
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (!namePattern.test(name)) {
        alert("Name must contain only letters and spaces.");
        return false;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (subject === "") {
        alert("Please enter the subject.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }
    return true;
}


/*--toggle--*/

const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

    toggleSwitch.addEventListener("click", ()=> {
        body.classList.toggle("dark");
    });


/*--typing efect--*/

var typingEffect = new Typed(".typedText", {
    strings: ["Jamie Jodelle", "Jamie Jodelle", "Jamie Jodelle"],
    
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

/*--scroll animation--*/

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", {delay: 100 });
sr.reveal(".text-info", {delay: 200 });
sr.reveal(".text-btn", {delay: 200 });
sr.reveal(".social_icons", {delay: 200 });
sr.reveal(".featured-image", {delay: 200 });

sr.reveal(".project-box", {interval: 200 });

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", {delay: 100});
srLeft.reveal(".contact-info", {delay: 100});

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skill", {delay: 100});
srRight.reveal(".skill-box", {delay: 100});

/*--active link--*/

const sections = document.querySelectorAll (".section [id]");
function scrollActive (){
    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight, 

        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
            .querySelector (".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
            document 
            .querySelector (".nav-menu a[href*=" + sectionId +"]")
            .classList.remove("active-link");
        }
        });
}


window.addEventListener ("scroll", scrollActive);
    
