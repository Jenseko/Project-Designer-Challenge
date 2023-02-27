console.log("Eureka!");
// ==========================================================
const email = document.querySelector('footer form input[type="email"]');
// console.log(email);

function showMail(){
    output = (email.value);
    console.log(output);
    location.href = "../../confirmation.html";
}