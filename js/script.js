const clientInput = document.querySelector('input');
const button = document.querySelector('.btn');
const error = document.querySelector('.err');
const message = document.querySelector('.message');

button.addEventListener('click', sendMessage)

function sendMessage() {

    if (clientInput.value) {
        message.textContent = clientInput.value;
        clientInput.value = '';
        error.style.display = 'none'
    } else {
        error.style.display = 'block'
        // setInterval(() => {
        //     error.style.display = 'none'
        // }, 10000)
        message.textContent = '';
    }
}

