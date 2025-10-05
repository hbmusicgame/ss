document.addEventListener('DOMContentLoaded', function () {

    const flyer = document.querySelector('.flyer');
    if (flyer) {
        if (flyer.classList.contains('enabled')) {
            flyer.style.display = 'block';
            const iframe = document.querySelector('iframe');
            if (iframe) iframe.style.width = '100%';
        } else {
            flyer.style.display = 'none';
        }
    }
});

