const input = document.getElementById('validation-input');

input.addEventListener('blur', function() {
    if (input.value.length !== parseInt(input.dataset.length)) {
        alert('Будь ласка, введіть точно 6 символів!');
        input.focus();
    }
});