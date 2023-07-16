// Get the form element by its class name
const form = document.querySelector(".login-form");

// Add an event listener for the submit event
form.addEventListener("submit", function (event) {
  // Prevent the default behavior of reloading the page
  event.preventDefault();

  // Create an empty object to store the form data
  const formData = {};

  // Loop through the elements of the form
  for (const element of form.elements) {
    // If the element is an input, get its name and value
    if (element.tagName === "INPUT") {
      const name = element.name;
      const value = element.value;

      // If the value is empty, alert the user and exit the function
      if (value === "") {
        alert("Всі поля повинні бути заповнені");
        return;
      }

      // Otherwise, add the name and value as a property to the formData object
      formData[name] = value;
    }
  }

  // Log the formData object to the console
  console.log(formData);

  // Reset the form values
  form.reset();
});

