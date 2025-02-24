const claimButton = document.querySelector('button')

claimButton.addEventListener('submit', function (e) {
    e.preventDefault();
    validateFname();
    validateLname();
})

function validateFname() {
    const fnameInput = document.querySelector('#fname');
    const fnameError = document.querySelector('#fnameError');

    if (fnameInput.value.trim() === "") { // trim() prevents spaces from being counted as input
        fnameError.textContent = "First Name cannot be empty";
        fnameError.style.display = 'block'; // Ensure it's visible
        fnameError.style.color = 'red'; // Make error message red
        fnameInput.style.border = '2px solid red';
        return false;
    } else {
        fnameError.textContent = "";
        fnameError.style.display = 'none'; // Hide when valid
        fnameInput.style.border = '2px solid #ccc'; // Reset border
        return true;
    }
}

function validateLname() {
    const lnameInput = document.querySelector('#lname');
    const lnameError = document.querySelector('#lnameError');

    if (lnameInput.value.trim() === "") {
        lnameError.textContent = "Last Name cannot be empty";
        lnameError.style.display = 'block';
        lnameError.style.color ='red';
        lnameInput.style.border = '2px solid red';
        return false;
    } else {
        lnameError.textContent = "";
        lnameError.style.display = 'none';
        lnameInput.style.border = '2px solid #ccc';
        return true;
    }
}
function validateEmail(){
   
}
