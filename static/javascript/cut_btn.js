let msg_cut = document.getElementById('cut');
let alert_block = document.getElementsByClassName('alert_block');
if (msg_cut) {
    msg_cut.addEventListener('click', () => {
        alert_block[0].style.display = 'none';
        alert_block[1].style.display = 'none';
    })
}