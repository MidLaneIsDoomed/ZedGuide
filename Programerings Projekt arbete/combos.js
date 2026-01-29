const buttonsContainer = document.querySelector('.combo-buttons');
const iframes = document.querySelectorAll('iframe');

buttonsContainer.addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') return;

    const targetId = e.target.dataset.target;

   
    iframes.forEach(iframe => iframe.style.display = 'none');


    document.getElementById(targetId).style.display = 'block';
});
