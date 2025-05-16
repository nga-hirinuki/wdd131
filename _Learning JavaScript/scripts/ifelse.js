function checkAge() {
    const age = parseInt(document.getElementById("ageInput").value);
    const message = document.getElementById("message");
  
    if (isNaN(age)) {
      message.textContent = "Please enter a valid number.";
    } else if (age >= 18) {
      message.textContent = "You are eligible to vote.";
    } else {
      message.textContent = "You are not eligible to vote yet.";
    }
  }
  