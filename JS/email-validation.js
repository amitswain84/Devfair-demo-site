function ValidateEmail(inputText) {

    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (mailformat.test(inputText.value) == false) {
        alert('Invalid Email Address');
        return false;
    }
    return true;


}