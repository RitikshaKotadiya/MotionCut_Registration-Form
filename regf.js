function validatePassword(password) {
    var lengthRegex = /.{8,}/;
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var digitRegex = /\d/;
    var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  
    var isLengthValid = lengthRegex.test(password);
    var hasUppercase = uppercaseRegex.test(password);
    var hasLowercase = lowercaseRegex.test(password);
    var hasDigit = digitRegex.test(password);
    var hasSpecialChar = specialCharRegex.test(password);
  
    return (
      isLengthValid && hasUppercase && hasLowercase && hasDigit && hasSpecialChar
    );
  }
  
  function register() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var passwordError = document.getElementById('password-error');
  
    if (!validatePassword(password)) {
      passwordError.textContent = "Password must be at least 8 characters long and include uppercase, lowercase, digit, and special character.";
      return;
    }
  
  
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  

    passwordError.textContent = "";
  }
  