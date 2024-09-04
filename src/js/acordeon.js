// SS JSResult Skip Results Iframe
document.querySelectorAll('details').forEach((el) => {
    const summary = el.querySelector('summary');
    const content = el.querySelector('.content');

    summary.addEventListener('click', (e) => {
        e.preventDefault();
        if (el.open) {
            slideUp(content, () => {
                el.open = false;
            });
        } else {
            el.open = true;
            slideDown(content);
        }
    });
});

function slideUp(element, callback) {
    const height = element.offsetHeight;
    element.style.height = height + 'px';
    element.offsetHeight; // Force reflow
    element.style.height = '0';
    element.addEventListener('transitionend', function handler() {
        element.removeEventListener('transitionend', handler);
        callback();
    });
}

function slideDown(element) {
    element.style.height = '0';
    element.offsetHeight; // Force reflow
    const height = element.scrollHeight;
    element.style.height = height + 'px';
    element.addEventListener('transitionend', function handler() {
        element.removeEventListener('transitionend', handler);
        element.style.height = 'auto';
    });
}