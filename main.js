document.addEventListener("DOMContentLoaded",() => {
    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const submit = document.getElementById("submit");
    submit.addEventListener("click",(e) => {
        e.preventDefault();
        console.log(name.value);
        console.log(phone.value);
        console.log(email.value);
    });
});
