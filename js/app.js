const form = document.getElementById('registerForm')

form.addEventListener('submit', async (e) => {
  e.preventDefault() // to prevent reloading the page

  const name = form.name.value.trim()
  const email = form.email.value.trim()
  const password = form.password.value

  // const agreed = form.check.checked
  // if (!agreed) {
  //   alert('You must agree to the terms and policy')
  //   return
  // }

  try {
    const res = await fetch('http://localhost:4000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })

    const data = await res.json()

    if (res.ok) {
      alert('Successfully registered!')
    } else {
      alert(data.message || 'Something went wrong')
    }

  } catch (err) {
    console.error(err)
    alert('Network error')
  }
})

