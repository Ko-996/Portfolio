function particles() {
            const container = document.getElementById('particlesBg');
            if (!container) return;
            const particleCount = 60;
            const fragment = document.createDocumentFragment();

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                const size = Math.random() * 3.5 + 1.8;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.opacity = Math.random() * 0.7 + 0.2;
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = Math.random() * 18 + 12 + 's';
                particle.style.animationDelay = Math.random() * 15 + 's';

                fragment.appendChild(particle);
            }
            container.appendChild(fragment);
        };

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
particles();
});

