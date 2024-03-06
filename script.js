const submitButton = document.querySelector('button[type="submit"]');
const inputField = document.querySelector('input');
const form = document.querySelector('#newtask');
const taskList = document.querySelector('#tasks'); 

submitButton.disabled = true;

function updateButtonState(inputField) {
    if (inputField.value.length > 0) {
        console.log(inputField.value);
        submitButton.disabled = false;
    }
    else {
        submitButton.disabled = true;
    }
}

inputField.addEventListener('input', () => {
    updateButtonState(inputField);
});

form.addEventListener('submit', (e) => { 
    const task = inputField.value;
    taskList.innerHTML += `<li>${task}</li>`;
    e.preventDefault();
    inputField.value = '';
    submitButton.disabled = true;
    taskList.scrollTop = taskList.scrollHeight;
});

