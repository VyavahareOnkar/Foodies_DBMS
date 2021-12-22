let btn_elements = document.querySelector('.btn');

if (btn_elements) {
    btn_elements.addEventListener('click', function () {
        this.textContent = 'Thanks for your cooperation, we will inform you soon!';
        this.classList.remove('btn-danger');
        this.classList.add('btn-primary');
    })
}