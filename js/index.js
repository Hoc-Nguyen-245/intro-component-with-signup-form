const inputField = document.getElementsByClassName('input');
const textError = $('#form p');


function checkValue(index) {
    var type = inputField[index].type;
    var value = inputField[index].value;
    if (type === "email") {
        if (value.length === 0 || value.indexOf('@') === -1) {
            showError(index);
            inputField[index].setAttribute('placeholder','email@example/com');
        } else {
            hideError(index);
        }
    } else {
        if (value.length === 0) {
            showError(index);
            inputField[index].setAttribute('placeholder','');
        } else {
            hideError(index);
        }
    }
}

function showError(index) {
    inputField[index].classList.add('error');
    textError[index].classList.add('error');
}

function hideError(index) {
    inputField[index].classList.remove('error');
    textError[index].classList.remove('error');
}

for (let i = 0 ; i < inputField.length ; i++ ) {
    document.getElementsByClassName('input')[i].addEventListener('keydown',function(e){
        var keyCode = e.keyCode;
        if (keyCode === 13) {
            checkValue(i);
            e.preventDefault();
        }
    })
}

$('.submit').click(function(e){
    for (let i = 0; i < inputField.length; i++) {
        checkValue(i);
    }
    if (textError.hasClass('error') == false) {
        for ( let i = 0 ; i < inputField.length ; i++) {
            inputField[i].value = '';
        }
    }
    e.preventDefault();
})