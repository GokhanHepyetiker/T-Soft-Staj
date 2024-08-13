const form = document.getElementById('contact-form');


function validateName() {
	const name = document.getElementById('name').value;
	const nameInput = document.getElementById('name');
	if (name.length < 3) {
		document.getElementById('name-error').textContent = 'İsim en az 3 karakter olmalı';
		document.getElementById('name-error').style.display = 'block';
		nameInput.classList.remove('valid');
		nameInput.classList.add('invalid');
		return false;
	} else {
		document.getElementById('name-error').style.display = 'none';
		nameInput.classList.remove('invalid');
		nameInput.classList.add('valid');
		return true;
	}
}

function validateSurname() {
	const surname = document.getElementById('surname').value;
	const surnameInput = document.getElementById('surname');
	if (surname.length < 5) {
		document.getElementById('surname-error').textContent = 'Soyisim en az 5 karakter olmalı';
		document.getElementById('surname-error').style.display = 'block';
		surnameInput.classList.add('invalid');
		surnameInput.classList.remove('valid');
		return false;
	} else {
		document.getElementById('surname-error').style.display = 'none';
		surnameInput.classList.add('valid');
		surnameInput.classList.remove('invalid');
		return true;
	}
}

function validateCompany() {
	const company = document.getElementById('company').value;
	const companyInput = document.getElementById('company');
	const companyRegex = /^[a-zA-Z0-9]+$/;
	if (!companyRegex.test(company)) {
		document.getElementById('company-error').textContent = 'Şirket içinde harf ve rakam bulunmalı';
		document.getElementById('company-error').style.display = 'block';
		companyInput.classList.add('invalid');
		companyInput.classList.remove('valid');
		return false;
	} else {
		document.getElementById('company-error').style.display = 'none';
		companyInput.classList.add('valid');
		companyInput.classList.remove('invalid');
		return true;
	}
}

function validatePhone() {
	const phone = document.getElementById('phone').value;
	const phoneInput = document.getElementById('phone');
	if (phone.length !== 11 || isNaN(phone)) {
		document.getElementById('phone-error').textContent = 'Telefon numarası 11 haneli olmalı';
		document.getElementById('phone-error').style.display = 'block';
		phoneInput.classList.add('invalid');
		phoneInput.classList.remove('valid');
		return false;
	} else {
		document.getElementById('phone-error').style.display = 'none';
		phoneInput.classList.add('valid');
		phoneInput.classList.remove('invalid');
		return true;
	}
}

function validateEmail() {
	const email = document.getElementById('email').value;
	const emailInput = document.getElementById('email');
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		document.getElementById('email-error').textContent = 'E-posta formatı uygun olmalı';
		document.getElementById('email-error').style.display = 'block';
		emailInput.classList.add('invalid');
		emailInput.classList.remove('valid');
		return false;
	} else {
		document.getElementById('email-error').style.display = 'none';
		emailInput.classList.add('valid');
		emailInput.classList.remove('invalid');
		return true;
	}
}

function validatePassword() {
	const password = document.getElementById('password').value;
	const passwordInput = document.getElementById('password');
	const passwordRegex = /^(?=.*[A-Za-z\u00C0-\u017F])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.\u00C0-\u017F]{5,}$/;
	if (!passwordRegex.test(password)) {
		document.getElementById('password-error').textContent = 'Şifre en az 5 karakter olmalı, harf, rakam ve özel karakter içermeli';
		document.getElementById('password-error').style.display = 'block';
		passwordInput.classList.add('invalid');
		passwordInput.classList.remove('valid');
		return false;
	} else {
		document.getElementById('password-error').style.display = 'none';
		passwordInput.classList.add('valid');
		passwordInput.classList.remove('invalid');
		return true;
	}
}





document.getElementById('name').addEventListener('input', validateName);
document.getElementById('surname').addEventListener('input', validateSurname);
document.getElementById('company').addEventListener('input', validateCompany);
document.getElementById('phone').addEventListener('input', validatePhone);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('password').addEventListener('input', validatePassword);


form.addEventListener('submit', function(event) {
	event.preventDefault();

	const isNameValid = validateName();
	const isSurnameValid = validateSurname();
	const isCompanyValid = validateCompany();
	const isPhoneValid = validatePhone();
	const isEmailValid = validateEmail();
	const isPasswordValid = validatePassword();

	if (isNameValid && isSurnameValid && isCompanyValid && isPhoneValid && isEmailValid && isPasswordValid) {
		alert('Form başarıyla gönderildi!');
	}
});
