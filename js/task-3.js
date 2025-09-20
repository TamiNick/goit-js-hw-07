const input = document.querySelector("#name-input");
input.addEventListener("input", listener)
function listener (event) {
    const span = document.querySelector("#name-output");
    if(event.target.value.length > 0 && event.target.value.trim()) {
        span.textContent = event.target.value.trim();
        input.textContent.trim();

    }else {
        span.textContent = "Anonymous";
    }

}
