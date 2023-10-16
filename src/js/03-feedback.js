import throttle from 'lodash.throttle';

const formElement = document.querySelector('.feedback-form');

const clearForm = () => {
    formElement.email.value = "";
    formElement.message.value = "";
}

if (localStorage.getItem("feedback-form-state")) {
    formElement.email.value = JSON.parse(localStorage
        .getItem("feedback-form-state")).email;
    formElement.message.value = JSON.parse(localStorage
        .getItem("feedback-form-state")).message;
}
else clearForm();

const storageData = () => 
    localStorage.setItem("feedback-form-state", JSON.stringify({
        email: formElement.email.value,
        message: formElement.message.value,
    }))

const throttled = throttle(storageData, 500);

const submitEvent = (event) => {
    event.preventDefault();
    console.log({
        email: formElement.email.value,
        message: formElement.message.value,
    });
    clearForm();
    localStorage.removeItem("feedback-form-state");
}

formElement.addEventListener('input', throttled);
formElement.addEventListener('submit', submitEvent);