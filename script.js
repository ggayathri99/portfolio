document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    function setActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

        navLinks.forEach(link => link.classList.remove("active-link"));
        navLinks[index].classList.add("active-link");
    }

    revealSections();
    setActiveLink();

    window.addEventListener("scroll", () => {
        revealSections();
        setActiveLink();
    });
});
