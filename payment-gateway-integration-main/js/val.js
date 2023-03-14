const form = document.getElementById('form');
const cardname = document.getElementById('cardname');
const CardSecurityCode = document.getElementById('CardSecurityCode');
const cardHolderName = document.getElementById('cardHolderName');
const address1 = document.getElementById('address1');
const address2 = document.getElementById('address2');
const expiredate = document.getElementById('expiredate');
const expiremonth = document.getElementById('expiremonth');
const countryId = document.getElementById('countryId');
const stateId = document.getElementById('stateId');
const cityId = document.getElementById('cityId');
const postalcode = document.getElementById('postalcode');
const email = document.getElementById('email');
const phnno = document.getElementById('phnno');
const identityNo = document.getElementById('identityNo');
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
const setError1 = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error1');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess1 = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error1');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePhoneNumber(input_str) {
    var re = /^\d{10}$/;
    return re.test(input_str);
  }

  function validateCardNumber(input_str) {
    var re = /^\d{16}$/;
    return re.test(input_str);
  }
  
  function validateCardSecurityCode(input_str) {
    var re = /^\d{3}$/;
    return re.test(input_str);
  }

  function validatepostalcode(input_str) {
    var re = /^\d{5,6}$/;
    return re.test(input_str);
  }
const validateInputs = () => {
    const cardnameValue = cardname.value.trim();
    const CardSecurityCodeValue = CardSecurityCode.value.trim();
    const cardHolderNameValue = cardHolderName.value.trim();
    const address1Value = address1.value.trim();
    const address2Value = address2.value.trim();
    const expiredateValue = expiredate.value.trim();
    const expiremonthValue = expiremonth.value.trim();
    const countryIdValue = countryId.value.trim();
    const stateIdValue = stateId.value.trim();
    const cityIdValue = cityId.value.trim();
    const emailValue = email.value.trim();
    const postalcodeValue = postalcode.value.trim();
    const phnnoValue = phnno.value.trim();
    const identityNoValue = identityNo.value.trim();

    
    if(CardSecurityCodeValue === '') {
        setError(CardSecurityCode, 'Card Security Code is required');
    } else {
        setSuccess(CardSecurityCode);
    }

    if(postalcodeValue === '') {
        setError(postalcode, 'Postal Code is required');
    } else if (!validatepostalcode(postalcodeValue)) {
        setError(postalcode, 'Postal code must be 5 to 6 digit');
    } else {
        setSuccess(postalcode);
    }

    if(expiredateValue === '') {
        setError(expiredate, 'Expire Date is required');
    } else {
        setSuccess(expiredate);
    }
    
    if(cardHolderNameValue === '') {
        setError(cardHolderName, 'Card Holder Name is required');
    } else {
        setSuccess(cardHolderName);
    }

    if(expiremonthValue === '') {
        setError1(expiremonth, 'Expire Month is required');
    } else {
        setSuccess1(expiremonth);
    }

    if(countryIdValue === '') {
        setError(countryId, 'Country is required');
    } else {
        setSuccess(countryId);
    }

    if(stateIdValue === '') {
        setError(stateId, 'State is required');
    } else {
        setSuccess(stateId);
    }

    if(address1Value === '') {
        setError(address1, 'Address is required');
    } else {
        setSuccess(address1);
    }


    if(address2Value === '') {
        setError(address2, 'Address is required');
    } else {
        setSuccess(address2);
    }


    if(cityIdValue === '') {
        setError(cityId, 'City is required');
    } else {
        setSuccess(cityId);
    }



    if(phnnoValue === '') {
        setError(phnno, 'Phone Number is required');
    } else if (!validatePhoneNumber(phnnoValue)) {
        setError(phnno, 'Phone Number must be 10 digit');
    } else {
        setSuccess(phnno);
    }


    if(identityNoValue === '') {
        setError(identityNo, 'Identity No is required');
    } else {
        setSuccess(identityNo);
    }


    if(CardSecurityCodeValue === '') {
        setError(CardSecurityCode, 'Card Security Code is required');
    } else if (!validateCardSecurityCode(CardSecurityCodeValue)) {
        setError(CardSecurityCode, 'Card Security Code must be 3 digit');
    } else {
        setSuccess(CardSecurityCode);
    }


    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }


    if(cardnameValue === '') {
        setError(cardname, 'Card Number is required');
    } else if (!validateCardNumber(cardnameValue)) {
        setError(cardname, 'Card Number must be 16 digit');
    } else {
        setSuccess(cardname);
    }

};
