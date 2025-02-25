document.addEventListener("DOMContentLoaded", function () {
  const firstName = document.getElementById('fname');
  const lastName = document.getElementById('lname');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const fnameError = document.getElementById('fnameError');
  const lnameError = document.getElementById('lnameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  const submitBtn = document.querySelector('.claim-btn');

  submitBtn.addEventListener("click", function(e){
    e.preventDefault();


    [fnameError, lnameError, emailError, passwordError].forEach(error => error.textContent = "");
    [firstName, lastName, email, password].forEach(input => input.classList.remove('input-error'));

    let isValid = true;

    if(firstName.value.trim() === ""){
      fnameError.textContent = "First Name cannot be empty";
      firstName.classList.add('input-error');
      isValid = false;
    }

    if(lastName.value.trim() === ""){
      lnameError.textContent = "Last Name cannot be empty";
      lastName.classList.add('input-error');
      isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.value.match(emailPattern)){
      emailError.textContent = "Looks like this is not an email";
      email.classList.add('input-error');
      isValid = false;
    }

    if(password.value.trim() === ""){
      passwordError.textContent = "Password cannot be empty";
      password.classList.add('input-error');
      isValid = false;
    } else if(password.value.length < 6){
      passwordError.textContent = "Password must be at least 6 characters";
      password.classList.add('input-error');
      isValid = false;
    }
    if(isValid){
      // Form submission logic here
      alert("Form submitted successfully!");
    }
  });
})