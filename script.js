let state,
    password = document.getElementById("password"),
    passwordStrength = document.getElementById("password-strength"),
    lowUpperCase = document.querySelector(".low-upper-case i"),
    number = document.querySelector(".number i"),
    specialChar = document.querySelector(".special-char i"),
    eightChar = document.querySelector(".eight-char i"),
    showPassword = document.querySelector(".show-pass"),
    eyeIcon = document.querySelector("#eye");


showPassword.addEventListener("click", toggle);
eyeIcon.addEventListener("click", toggleEye);
password.addEventListener("keyup", () => {
    let pass = password.value;
    checkStrength(pass);
});


// Toggle password visibility
function toggle() {
    if (state) {
        password.setAttribute("type", "password");
        state = false;
    }
    else {
        password.setAttribute("type", "text");
        state = true;
    }
}


// Toggle Icon in password field
function toggleEye() {
    eyeIcon.classList.toggle("fa-eye-slash");
}


// Check password strength
function checkStrength(password) {
    let strength = 0;

    // Check lower and upper case
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
        // lowUpperCase.classList.remove("fa-circle");
        // lowUpperCase.classList.add("fa-check");
        addCheck(lowUpperCase);
    } else {
        // lowUpperCase.classList.remove("fa-check");
        // lowUpperCase.classList.add("fa-circle");
        removeCheck(lowUpperCase);
    }

    // Check number
    if (password.match(/([0-9])/)) {
        strength += 1;
        addCheck(number);
    } else {
        removeCheck(number);
    }

    // Check special character
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/)) {
        strength += 1;
        addCheck(specialChar);
    } else {
        removeCheck(specialChar);
    }

    // Check atleast 8 character
    if (password.length >= 8) {
        strength += 1;
        addCheck(eightChar);
    }
    else {
        removeCheck(eightChar);
    }

    // Update progress bar
    passwordStrength.classList.remove("pb-danger", "pb-warning", "pb-primary", "pb-success");

    if (strength == 1) {
        passwordStrength.classList.add("pb-danger");
        passwordStrength.style.width = "25%";
    }
    else if (strength == 2) {
        passwordStrength.classList.add("pb-warning");
        passwordStrength.style.width = "50%";
    }
    else if (strength == 3) {
        passwordStrength.classList.add("pb-primary");
        passwordStrength.style.width = "75%";
    }
    else if (strength == 4) {
        passwordStrength.classList.add("pb-success");
        passwordStrength.style.width = "100%";
    }
    else {
        passwordStrength.style.width = "5%";
    }
}

// Add Check Icon
function addCheck(charRequired) {
    charRequired.classList.remove("fa-circle");
    charRequired.classList.add("fa-check");
}

function removeCheck(charRequired) {
    charRequired.classList.add("fa-circle");
    charRequired.classList.remove("fa-check");
}