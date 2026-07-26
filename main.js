// function for the animation reveal on scroll and on page load
function setupReveal(selector, options={}){
    const elements = document.querySelectorAll(selector);
    if(!elements.length) return;

    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                entry.target.classList.add("visible");
                observer.unobserve(entry.target)
            }
        });
    }, {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? "0px 0px -40px 0px"
    });

    elements.forEach((el) => observer.observe(el));

    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight && rect.bottom > 0){
            el.classList.add("visible")
            observer.unobserve(el);
        }
    });
}

window.addEventListener("DOMContentLoaded", () => {
setupReveal(".reveal",{ threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
setupReveal(".reveal-left");
setupReveal(".reveal-right");
});
