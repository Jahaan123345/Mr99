var password="12345";
function passcheck( ) {
    if(document.getElementById('pass1').value != password){
        alert('Wrong password, Try again.');
        return false;
    }
    if(document.getElementById('pass1').value == password){
        alert('Correct password.Click ok');
    }
}
