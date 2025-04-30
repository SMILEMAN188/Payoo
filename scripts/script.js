document.getElementById("login-btn").addEventListener("click",function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("Account-number").value;
    const pin = document.getElementById("Account-pin").value;
    const convertPin = parseInt(pin);
    if (accountNumber.length === 11 ) {
        if (convertPin === 1234) {
            window.location.href="./homepage.html"
        } else {
            alert("Wrong pin")
        }
    } else {
        alert("Account number is not correct")
    }

})