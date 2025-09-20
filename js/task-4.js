const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSend)
function handleSend (event) {
    event.preventDefault();
    const elements = event.target.elements;
    const inf = {};
    if (elements.email.value.length > 0 && elements.password.value.length> 0 ) {
        inf.email = elements.email.value.trim();
        inf.password = elements.password.value.trim();
        form.reset()
    }else {
        alert('All form fields must be filled in')
    }
    console.log(inf);
}

