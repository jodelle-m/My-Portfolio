function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "navMenu") {
        menuBth.className += "responsive";
    } else {
        menuBth.className = "nav-menu";
    }

}


/*--toggle--*/

const body = document.querySelector("body");
    toggleSwitch = document.getElementById("toggle-switch");

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

screenLeft.reveal(".about-info", {delay: 100});
screenLeft.reveal(".contact-info", {delay: 100});

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

screenRight.reveal(".skill", {delay: 100});
screenLeft.reveal(".skill-box", {delay: 100});

/*--active link

const sections = document.querySelectorAll (".section [id]");
function scrollActive (){
    const scrollY = window.scrollY;

    sections.forEach((current)) => {

        const sectionHeight = current.offsetHeight, 

        sectionTop = current.offsetTop - 50,
        sectionId = current
    }
} */