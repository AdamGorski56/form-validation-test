document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('btn').addEventListener('click', saveData);

function validateName(){
    const name = document.getElementById('name');
    const re = /^[a-zA-z]{2,10}$/;
    if(!re.test(name.value)){
        name.classList.add('is-invalid')

    } else {
        name.classList.remove('is-invalid')
    }
}

function validateZip(){
    const zip = document.getElementById('zip');
    const re = /^\w{3,4}[-]\w{3}$/;
    if(!re.test(zip.value)){
        zip.classList.add('is-invalid')

    } else {
        zip.classList.remove('is-invalid')
    }
}

function validateEmail(){
    const email = document.getElementById('email');
    const re = /^\w{2,20}[@]\w{1,10}[.]\w{1,5}([.]\w{1,5})?$/;
    if(!re.test(email.value)){
        email.classList.add('is-invalid')

    } else {
        email.classList.remove('is-invalid')
    }
}

function validatePhone(){
    const phone = document.getElementById('phone');
    const re = /^[+]?(\d{2,3})?(\d{10})$/;
    if(!re.test(phone.value)){
        phone.classList.add('is-invalid')

    } else {
        phone.classList.remove('is-invalid')
    }
}

function saveData(data) {
    data.preventDefault();
}