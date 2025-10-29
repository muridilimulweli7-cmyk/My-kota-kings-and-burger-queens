function validateForm(){
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const ID = document.getElementById('ID').value;
    const email = document.getElementById('email').value;

    errorMessage.textContent = '';
    //Have to validate all the inputs before submitting the form
    if(name === '' || surname === '' || ID === '' || email === ''){
        errorMessage.textContent = 'Complete the whole form.';
        return false;
    }

    //Validate email format
    const emailpattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
    if(!email.match(emailpattern)){
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    //Validate ID format (assuming it should be numeric and 13 digits long)
    const idpattern = '^\\d{13}$';
    if(!ID.match(idpattern)){
        errorMessage.textContent = 'Please enter a valid 13-digit ID number.';
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}