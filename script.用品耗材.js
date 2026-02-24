document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const links = document.querySelector(".links");
    const overlay = document.querySelector(".overlay");
    const closebtn = document.querySelector(".closebtn");
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const images = document.querySelectorAll('.slides img');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let autoSlide;
    
    menu.addEventListener("click", () => {
        links.classList.toggle("active");
        overlay.classList.toggle("active");
        document.querySelector(".news").classList.toggle("hide-text");
    });

     closebtn.addEventListener("click", () => {
        links.classList.remove("active");
        overlay.classList.remove("active");
        document.querySelector(".news").classList.remove("hide-text");
    });

    overlay.addEventListener("click", () => {
        links.classList.remove("active");
        overlay.classList.remove("active");
        document.querySelector(".news").classList.remove("hide-text");
    });

    document.querySelectorAll(".links a").forEach(link => {
        link.addEventListener("click", () => {
            links.classList.remove("active");
            overlay.classList.remove("active");
            document.querySelector(".news").classList.remove("hide-text");
        });
    });

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slideIndex = index;

        if (slideIndex >= slides.length) slideIndex = 0;
        if (slideIndex < 0) slideIndex = slides.length - 1;

        slides[slideIndex].classList.add("active");
        dots[slideIndex].classList.add("active");
    }

    function nextSlide() {
        showSlide(slideIndex + 1);
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            showSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    showSlide(0);
    startAutoSlide();

    prev.addEventListener("click", () => {
    showSlide(slideIndex - 1);
    stopAutoSlide();
    startAutoSlide();
    });

    next.addEventListener("click", () => {
    showSlide(slideIndex + 1);
    stopAutoSlide();
    startAutoSlide();
    });
});
