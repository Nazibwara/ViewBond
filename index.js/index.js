document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.innerCircle h5');
    const section = document.getElementById('counterSection');
    let hasRun = false;

    const isInViewport = el => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.textContent.replace(/[^0-9]/g, '');
            const suffix = counter.textContent.includes('%') ? '%' : counter.textContent.includes('X') ? 'X' : '';
            let current = 0;

            const increment = () => {
                counter.textContent = current >= target ? target + suffix : Math.ceil((current += target / 100)) + suffix;
                if (current < target) requestAnimationFrame(increment);
            };
            increment();
        });
    };

    window.addEventListener('scroll', () => {
        if (!hasRun && isInViewport(section)) {
            hasRun = true;
            animateCounters();
        }
    });
});
