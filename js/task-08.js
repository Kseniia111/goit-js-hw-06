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


document.body.style.backgroundColor = '#232931';
document.body.style.color = '#eeeeee';

const loginForm = document.querySelector('.login-form');

//1st variant
// loginForm.addEventListener('submit', submitHandler);
// const profile = {};

// function submitHandler(event) {
//   event.preventDefault();

//   const email = event.currentTarget.elements.email;
//   const password = event.currentTarget.elements.password;

//   if (email.value === '' || password.value === '') {
//     alert('Please fill in all the fields!');
//   } else {
//     profile.email = email.value;
//     profile.password = password.value;

//     console.log(profile);
//   }
//   event.currentTarget.reset();
// }

//2nd variant
loginForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  // const {
  //   elements: { email, password },
  // } = e.currentTarget;

  if (!email.value.trim() || !password.value.trim()) {
    return alert('Please fill in all the fields!');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    e.currentTarget.reset();
  }
}