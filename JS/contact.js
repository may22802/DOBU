(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        event.preventDefault(); // Prevent default form submission

        // Hide the form
        document.getElementById('before').classList.add('d-none');

        // Show the content div
        document.getElementById('after').classList.remove('d-none');
      }
      form.classList.add('was-validated')
    }, false)
  })

})()

