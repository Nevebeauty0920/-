document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const links = document.querySelector(".links");
    const overlay = document.querySelector(".overlay");
    const closebtn = document.querySelector(".closebtn");
    
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
});