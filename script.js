document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDeffult();
    const accountNUmber = document.getElementById("enter-num").value;
    const pin = document.getElementById("pin").value;
    const convertPIN = parseInt.pin;


    if (accountNUmber.length === 11) {
        if (convertPIN===1234) {
            alert("hello")
        } else {
            alert("wrong pin")
        }
        
    } else {
        
    }

})