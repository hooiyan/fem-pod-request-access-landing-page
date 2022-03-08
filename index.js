const form = document.querySelector('form');
const input = document.querySelector('form input')
const formError = document.getElementById('form-error')

// Receive an error message when the form is submitted if:
  // 1. The Email address field is empty should show "Oops! Please add your email"
  // 2. The email is not formatted correctly should show "Oops! Please check your email"

  form.addEventListener('submit', e => { 
    e.preventDefault()

    if (input.value === '') {
      formError.innerText = 'Oops! Please add your email'
      formError.classList.remove('inactive')
      formError.classList.add('error')
    } else if (input.value.indexOf('@') === -1) {
      formError.innerText = 'Oops! Please check your email'
      formError.classList.remove('inactive')
      formError.classList.add('error')
    } else {
      formError.classList.add('inactive')
      formError.classList.remove('error')
    }
  })