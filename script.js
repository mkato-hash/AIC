const header = document.querySelector(".site-header");
const scrollButtons = document.querySelectorAll("[data-scroll-target]");
const faqItems = document.querySelectorAll(".faq-item");

const updateHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
};

scrollButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const target = document.querySelector(button.dataset.scrollTarget);
        if (!target) return;
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (!question) return;

    question.addEventListener("click", () => {
        const isOpen = item.classList.toggle("is-open");
        question.setAttribute("aria-expanded", String(isOpen));
    });
});

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
