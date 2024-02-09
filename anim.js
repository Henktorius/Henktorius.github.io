document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('typing-header');
    const text = header.innerText;

    header.innerText = '';
    for (let i = 0; i < text.length; i++) {
        setTimeout(function () {
            header.innerHTML += text.charAt(i);
        }, i * 2000/text.length); 
    }
});