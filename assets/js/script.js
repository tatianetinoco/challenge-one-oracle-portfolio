function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    var isValid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Por favor, insira seu nome.';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Por favor, insira seu e-mail.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Por favor, insira um e-mail válido.';
        isValid = false;
    }

    return isValid;
    
}


function mostrarMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("menu-show");
}

