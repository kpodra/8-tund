$('#submit').click(saatmine);

function saatmine(){
    let name = $('#name').val();
    let nameError = false;
    let mobile = $('#mobile').val();
    let mobileError = false;
    let email = $('#email').val();
    let emailError = false;
    let addInfo = $('#additionalInfo').val();
    let addInfoError = false;

    if(name.length == 0){
        $('#nameError').html("Palun sisesta oma nimi!");
    } else {
        nameError = true;
    }
    if(mobile.length == 0){
        $('#mobileError').html("Palun sisesta oma telefoninumber!");
    } else {
        mobileError = true;
    }
    if(email.length == 0){
        $('#emailError').html("Palun sisesta oma email!");
    } else {
        emailError = true;
    }
    if(addInfo.length == 0){
        $('#addInfoError').html("Palun sisesta lisainfo!");
    } else {
        addInfoError = true;
    }

    if(nameError == true && mobileError == true && emailError == true && addInfoError == true){
        $('.vastus').html("Andmed on edukalt saadetud!");
    } else {
        $('.vastus').html("Midagi läks andmete saatmisel valesti..!");
    }

}