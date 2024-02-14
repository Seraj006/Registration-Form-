
        document.getElementById("registrationForm").addEventListener("submit", function(event) {

         /*   var nameInput = document.getElementById("name");
            if (!validateName(nameInput.value)) {
                alert("Name must contain only alphabets and be at least 6 characters long.");
                event.preventDefault();
            }  
            function validateName(name) {
                var regex = /^[a-zA-Z]{6,}$/;
                return regex.test(name);
            } */

            var passwordInput = document.getElementById("password");
            if (passwordInput.value.length < 6) {
                alert("Password must be at least 6 characters long.");
                event.preventDefault();
            } 

            var emailInput = document.getElementById("email");
            if (!validateEmail(emailInput.value)) {
                alert("Invalid email format. Please enter a valid email address.");
                event.preventDefault();
            }
            function validateEmail(email) {
                var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(email);
            } 


            var phoneInput = document.getElementById("phone");
            if (phoneInput.value.length < 10) {
                alert("Phone No. must be at least 10 characters long.");
                event.preventDefault();
            }            
        });

       

       