const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSend)
function handleSend (event) {
    event.preventDefault();
    const elements = event.target.elements;
    if (elements.email.value.length > 0 && elements.password.value.length> 0 ) {
        const inf = {};
        inf.email = elements.email.value.trim();
        inf.password = elements.password.value.trim();
        form.reset()
        console.log(inf);
    }else {
        alert('All form fields must be filled in')
    }
}

