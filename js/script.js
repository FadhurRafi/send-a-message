const clientInput = document.querySelector('input');
const button = document.querySelector('.btn');
const error = document.querySelector('.err');
const message = document.querySelector('.message');

button.addEventListener('click', sendMessage)

function sendMessage() {
    let userInput = clientInput.value;

    if (clientInput.value) {
        message.textContent = clientInput.value;
        clientInput.value = '';
        error.style.display = 'none'

        sentHistory(userInput);

    } else {
        error.style.display = 'block'
        // setInterval(() => {
        //     error.style.display = 'none'
        // }, 10000)
        message.textContent = '';
    }
}

function sentHistory(message) {

    let divHistory = document.querySelector('.history');
    let messItem = document.createElement('li');
    let messText = document.createTextNode(message);

    divHistory.appendChild(messItem);
    messItem.appendChild(messText);
}


