const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.button-login');

const handlefocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handlefocusout = ({ target }) => {

    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

const handleChange = () =>{
    const [username, passaword] = inputs;

    if(username.value && passaword.value.length >= 8){
        button.removeAttribute('disabled');
    }else{
        button.setAttribute('disabled', '');
    }
}


inputs.forEach((input) => input.addEventListener('focus', handlefocus));
inputs.forEach((input) => input.addEventListener('focusout', handlefocusout));
inputs.forEach((input) => input.addEventListener('input', handleChange));