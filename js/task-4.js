const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === ""){
        return alert("all form fields must be filled in")
    }

    console.log(`{login:} ${email}, Password: ${password}}`);
    form.reset();
}