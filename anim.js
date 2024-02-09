document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('typing-header');
    const text = header.innerText;

    // Clear the text inside the header
    header.innerText = '';

    // Add each letter with a delay to create a typing effect
    for (let i = 0; i < text.length; i++) {
        setTimeout(function () {
            header.innerHTML += text.charAt(i);
        }, i * 2000/text.length); // Adjust the typing speed by changing the delay (here it's 100 milliseconds)
    }
});