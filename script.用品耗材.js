document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const links = document.querySelector(".links");
    const overlay = document.querySelector(".overlay");
    const closebtn = document.querySelector(".closebtn");

    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let autoSlide;
    
    // ====== 選單 ======
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

    // ====== 輪播 ======
    function showSlide(index) {
            if (index >= slides.length) slideIndex = 0;
            else if (index < 0) slideIndex = slides.length - 1;
            else slideIndex = index;

            slides.forEach(s => s.classList.remove("active"));
            dots.forEach(d => d.classList.remove("active"));

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

    dots.forEach((dot, i) => {
        dot.addEventListener("click", function () {
            showSlide(i);
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