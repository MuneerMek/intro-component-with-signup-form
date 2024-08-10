// Element selection
const form = document.querySelector(".signup");

// Email validation function
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Check if the form is being selected correctly
if (form) {
  console.log("Form element found");
} else {
  console.error("Form element not found");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Submit event triggered"); // Check if the event listener is working

  let isValid = true; // Reset validity on each submit

  const firstname = document.querySelector(`input[name="fname"]`).value.trim();
  const lastname = document.querySelector(`input[name="lname"]`).value.trim();
  const email = document.querySelector(`input[name="email"]`).value.trim();
  const password = document
    .querySelector(`input[name="password"]`)
    .value.trim();

  // Validate First Name
  if (firstname === "") {
    isValid = false;
    document.querySelector(`input[name="fname"] + .form-alert`).style.display =
      "block";
    document.querySelector(`input[name="fname"]`).placeholder = "";
    document.querySelector(`input[name="fname"]`).style.border =
      "2px solid hsl(var(--red))";
    console.log("First name error");
  } else {
    document.querySelector(`input[name="fname"] + .form-alert`).style.display =
      "none";
    document.querySelector(`input[name="fname"]`).style.border =
      "1px solid hsl(var(--grayish-blue))";
  }

  // Validate Last Name
  if (lastname === "") {
    isValid = false;
    document.querySelector(`input[name="lname"] + .form-alert`).style.display =
      "block";
    document.querySelector(`input[name="lname"]`).placeholder = "";
    document.querySelector(`input[name="lname"]`).style.border =
      "2px solid hsl(var(--red))";
    console.log("Last name error");
  } else {
    document.querySelector(`input[name="lname"] + .form-alert`).style.display =
      "none";
    document.querySelector(`input[name="lname"]`).style.border =
      "1px solid hsl(var(--grayish-blue))";
  }

  // Validate Email
  if (!isValidEmail(email)) {
    isValid = false;
    document.querySelector(`input[name="email"] + .form-alert`).style.display =
      "block";
    document.querySelector(`input[name="email"]`).placeholder =
      "email@example/com";
    document
      .querySelector(`input[name="email"]`)
      .classList.add("placeholder-red");
    document.querySelector(`input[name="email"]`).style.border =
      "2px solid hsl(var(--red))";
    console.log("Email error");
  } else {
    document.querySelector(`input[name="email"] + .form-alert`).style.display =
      "none";
    document.querySelector(`input[name="email"]`).style.border =
      "1px solid hsl(var(--grayish-blue))";
  }

  // Validate Password
  if (password === "") {
    isValid = false;
    document.querySelector(
      `input[name="password"] + .form-alert`
    ).style.display = "block";
    document.querySelector(`input[name="password"]`).style.border =
      "2px solid hsl(var(--red))";
    console.log("Password error");
  } else {
    document.querySelector(
      `input[name="password"] + .form-alert`
    ).style.display = "none";
    document.querySelector(`input[name="password"]`).style.border =
      "1px solid hsl(var(--grayish-blue))";
  }

  if (isValid) {
    form.reset(); // Reset form fields
  }
});
