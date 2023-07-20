const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert('Всі поля повинні бути заповнені');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}