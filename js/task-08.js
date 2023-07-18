const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {};

  for (const element of form.elements) {
    if (element.tagName === "INPUT") {
      const name = element.name;
      const value = element.value;

      if (value === "") {
        alert("Всі поля повинні бути заповнені");
        return;
      }

      formData[name] = value;
    }
  }

  console.log(formData);

  form.reset();
});

