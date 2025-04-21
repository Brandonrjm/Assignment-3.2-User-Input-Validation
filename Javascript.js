// Wait for the form to be submitted
document.getElementById("userForm").onsubmit = function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get input values
  let first = document.getElementById("firstName").value.trim();
  let last = document.getElementById("lastName").value.trim();
  let zip = document.getElementById("zipCode").value.trim();
  let fullName = first + " " + last;

  // Validate name length
  if (fullName.length > 20) {
    document.getElementById("output").innerHTML = "⚠️ Full name must be 20 characters or fewer.";
    document.getElementById("secretMessage").style.display = "none";
    return;
  }

  // Validate ZIP code format
  if (!/^\d{5}$/.test(zip)) {
    document.getElementById("output").innerHTML = "⚠️ ZIP code must be exactly 5 digits.";
    document.getElementById("secretMessage").style.display = "none";
    return;
  }

  // If both are valid
  document.getElementById("output").innerHTML = "✅ All inputs are valid!";
  document.getElementById("secretMessage").style.display = "block";
};
