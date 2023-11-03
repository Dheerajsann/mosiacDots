const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

const moreButtons = document.querySelectorAll('.more');

moreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const ol = button.parentElement;
        const lis = ol.querySelectorAll('li');
        lis.forEach(li => li.style.display = 'flex');
        lis.forEach(li => li.style.flexDirection = 'row');
        lis.forEach(li => li.style.flexWrap = 'wrap');
        button.style.display = 'none';
    });
});

function createNewDivision() {
    const container = document.querySelector('.container');
    const newDivision = document.querySelector('.box').cloneNode(true);
    container.appendChild(newDivision);
}