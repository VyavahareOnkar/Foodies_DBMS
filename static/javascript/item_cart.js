let billList = {};
let totalBill = 0;

let btn_element = document.querySelector('.btn-a');
let item_btn = document.querySelectorAll('.item-btn');

if (btn_element) {
    btn_element.addEventListener('click', function () {
        if (Object.keys(billList) != 0) {
            document.querySelector('#buyModalLabel').textContent = `Total Bill : ${totalBill}`;
            document.querySelector('.first').textContent = `All items inside Cart are : ${Object.keys(billList)}`;
            document.querySelector('.second').textContent = `Their respective prices are : ${Object.values(billList)}`;
        }
        else {
            document.querySelector('#buyModalLabel').textContent = 'Total Bill : 00';
            document.querySelector('.first').textContent = 'Cart Empty! ';
            document.querySelector('.second').textContent = 'Add Items to Initialise the Cart.';
        }
    })
}


if (item_btn) {
    item_btn.forEach(button => {
        button.addEventListener('click', function () {
            document.querySelector('#item-modal-title').textContent = `${(this.id).toUpperCase()} added to Cart.`;
            document.querySelector('#item-modal-body').textContent = `${(this.id).toUpperCase()} successfully added to cart! Please continue your shopping.`;
            billList[`${this.id} `] = this.value;
            totalBill += +this.value;
        })
    })
}