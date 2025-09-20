const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
input.addEventListener("input", listener)
function listener (event) {
    if(event.target.value.trim()) {
        span.textContent = event.target.value.trim();
    }else {
        span.textContent = "Anonymous";
    }

}
