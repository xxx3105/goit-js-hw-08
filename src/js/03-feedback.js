
// Отслеживай на форме событие input, и каждый раз записывай в 
// локальное хранилище объект с полями email и message, в которых 
// сохраняй текущие значения полей формы.Пусть ключом для хранилища
//  будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там 
// есть сохраненные данные, заполняй ими поля формы.В противном 
// случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи 
// объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500
// миллисекунд.Для этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from "lodash.throttle";

let formData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener("input", throttle(updaterOfFormData, 500));
formEl.addEventListener('submit', formCheker);

reloadPage();

function updaterOfFormData(e) {
    formData[e.target.name]= e.target.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
 
function formCheker(event) {
    event.preventDefault();
    
    if (formEl.elements.email.value === "" || formEl.elements.message.value === "") {
        return alert("Please fill in all form fields or we will kill you!");
    }

    console.log(formData);
    formEl.reset();
    localStorage.removeItem("feedback-form-state");
    formData = {};
}

function reloadPage() {
       
        let { email, message } = formEl.elements;
        email.value = formData.email || '';
        message.value = formData.message || '';
    
};

 