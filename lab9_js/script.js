function openTab(evt, tabName) {
    const contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => content.classList.remove("active-content"));

    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));

    document.getElementById(tabName).classList.add("active-content");
    evt.currentTarget.classList.add("active");
}


document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        if (input.type === "password") {
            input.type = "text";
            this.src = "hidden.png";
        } else {
            input.type = "password";
            this.src = "eye.png";
        }
    });
});

const cityData = {
    "Ukraine": ["Chernivtsi", "Kyiv", "Lviv"],
    "USA": ["New York", "Los Angeles", "Chicago"]
};

const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('city');

countrySelect.addEventListener('change', function() {
    const selectedCountry = this.value;
    citySelect.innerHTML = '<option value="">Choose city...</option>';

    if (selectedCountry) {
        citySelect.disabled = false;
        cityData[selectedCountry].forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    } else {
        citySelect.disabled = true;
    }
});



const setError = (element, message) => {
    const parent = element.closest('.form-group');
    const errorDisplay = parent.querySelector('.error-msg');
    errorDisplay.innerText = message;
    element.classList.add('invalid');
    element.classList.remove('valid');
};

const setSuccess = (element) => {
    const parent = element.closest('.form-group');
    const errorDisplay = parent.querySelector('.error-msg');
    errorDisplay.innerText = '';
    element.classList.add('valid');
    element.classList.remove('invalid');
};



document.getElementById('signup').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    const fName = document.getElementById('firstName');
    if (fName.value.length < 3 || fName.value.length > 15) {
        setError(fName, 'Must be 3-15 characters');
        isValid = false;
    } else setSuccess(fName);

    const lName = document.getElementById('lastName');
    if (lName.value.length < 3 || lName.value.length > 15) {
        setError(lName, 'Must be 3-15 characters');
        isValid = false;
    } else setSuccess(lName);

    const email = document.getElementById('regEmail');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        setError(email, 'Enter a valid email');
        isValid = false;
    } else setSuccess(email);

    const pass = document.getElementById('regPassword');
    if (pass.value.length < 6) {
        setError(pass, 'Min 6 characters');
        isValid = false;
    } else setSuccess(pass);

    const confirm = document.getElementById('confirmPassword');
    if (confirm.value !== pass.value || confirm.value === "") {
        setError(confirm, 'Passwords do not match');
        isValid = false;
    } else setSuccess(confirm);

    const phone = document.getElementById('phone');
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone.value)) {
        setError(phone, 'Format: +380XXXXXXXXX');
        isValid = false;
    } else setSuccess(phone);

    const dob = document.getElementById('dob');
    if (!dob.value) {
        setError(dob, 'Required');
        isValid = false;
    } else {
        const birthDate = new Date(dob.value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        if (birthDate > today) {
            setError(dob, 'Cannot be in the future');
            isValid = false;
        } else if (age < 12) {
            setError(dob, 'Must be at least 12 years old');
            isValid = false;
        } else setSuccess(dob);
    }

    const sexOptions = document.getElementsByName('sex');
    const sexGroup = document.querySelector('.radio-group');
    let sexSelected = false;
    sexOptions.forEach(opt => { if(opt.checked) sexSelected = true; });
    if (!sexSelected) {
        setError(sexGroup, 'Required');
        isValid = false;
    } else setSuccess(sexGroup);

    if (!countrySelect.value) { setError(countrySelect, 'Required'); isValid = false; } else setSuccess(countrySelect);
    if (!citySelect.value) { setError(citySelect, 'Required'); isValid = false; } else setSuccess(citySelect);

    if (isValid) {
        alert('Успішно зареєстровано!');
        this.reset();
        document.querySelectorAll('.valid').forEach(el => el.classList.remove('valid'));
        citySelect.disabled = true;
    }
});



document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    const user = document.getElementById('loginUser');
    const pass = document.getElementById('loginPass');

    if (!user.value) { setError(user, 'Required'); isValid = false; } else setSuccess(user);
    if (pass.value.length < 6) { setError(pass, 'Min 6 characters'); isValid = false; } else setSuccess(pass);

    if (isValid) {
        alert('Вхід успішний!');
        this.reset();
        document.querySelectorAll('.valid').forEach(el => el.classList.remove('valid'));
    }
});