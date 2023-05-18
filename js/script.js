const getEmail = document.getElementById('getEmail');
const invalidEmail = document.querySelector('.invalid');
const buttonSubmit = document.getElementById('submit');
const error = document.getElementById('error');

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault(); // Evita o envio do formulário (recarregamento da página)
    const emailValue = getEmail.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(emailValue)) {
        error.style.display = 'block';
        invalidEmail.style.display = 'block';
    } else {
        error.style.display = 'none';
        invalidEmail.style.display = 'none';
    }
});