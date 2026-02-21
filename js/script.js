document.addEventListener('DOMContentLoaded', function () {
    initNavBar();
    initVideoFacade();
    initCopyrightYear();
	initSmoothScrolling();
});

function initNavBar() {
    const navLinksSmall = document.querySelector('.nav-links-small');
    const navLinks = document.querySelector('.nav-links');
    let resizeTimer;

    if (navLinksSmall) {
        navLinksSmall.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navLinksSmall.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks) {
                navLinks.classList.remove('active');
                navLinksSmall.classList.remove('active');
            }
        });
    });

    window.addEventListener('resize', () => {
        document.body.classList.add('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('resize-animation-stopper');
        }, 400);

        if (window.innerWidth > 768 && navLinks) {
            navLinks.classList.remove('active');
            navLinksSmall.classList.remove('active');
        }
    });
}

function initVideoFacade() {
    const videos = document.querySelectorAll('.youtube-facade');
    videos.forEach(video => {
        video.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            if (!videoId) return;

            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            iframe.setAttribute('allowfullscreen', '');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            
            this.innerHTML = '';
            this.appendChild(iframe);
        });
    });
}

function initCopyrightYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}