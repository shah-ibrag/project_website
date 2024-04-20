var valid = false;

function validateForm() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('comments').value;

    let errors = [];

    if (name === "" && phone === "" && email === "" && message === "") {
        document.getElementById('name').style.border = "1px solid red";
        document.getElementById('phone').style.border = "1px solid red";
        document.getElementById('email').style.border = "1px solid red";
        document.getElementById('comments').style.border = "1px solid red";
        valid = false;
    }
    if (name === "") {
        document.getElementById('name').style.border = "1px solid red";
        valid = false;
        errors.push("Please enter valid name");
    }
    if (phone.length < 10) {
        document.getElementById('phone').style.border = "1px solid red";
        valid = false;
        errors.push("Please enter valid phone number");
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('email').style.border = "1px solid red";
        valid = false;
        errors.push("Please enter valid email");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
    }
}

function submitForm() {
    validateForm();
    if (valid) {
        alert("Form submitted successfully.");
    }
}

