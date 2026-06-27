let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let index = 0
let timer;
let caption = document.querySelector(".caption");

const slideCaptions = [
    "يوم اللباس الوطني التقليدي",
    "Oudhna 2017 - Excursion sur le thème Évasion",
    "Campagne de nettoyage au lycée",
    'The "Dakhla" experience',
    "Bac 2017",
    "تكريم الأساتذة على شرف المهنة 2016"
]

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
        if (i === n) {
            slide.classList.add("active");
            dots[i].classList.add("active");
        }
    });
    index = n;
    caption.textContent = slideCaptions[n];
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

function autoSlide() {
    timer = setInterval(nextSlide, 6000);
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    resetTimer();
});
prevBtn.addEventListener("click", () => {
    nextSlide();
    resetTimer();
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        showSlide(i);
        resetTimer();
    });
});

function resetTimer() {
    clearInterval(timer);
    autoSlide();
}

showSlide(index);
autoSlide();