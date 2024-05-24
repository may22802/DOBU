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
          const myModal = new bootstrap.Modal(document.getElementById('successModal'));
          myModal.show();
        }
        form.classList.add('was-validated')
      }, false)
    })
  
  })()

  $(document).ready(function() {
    $('#hour').on('input', function() {
        var numberValue = $(this).val();
        
        // Update the content of other elements based on the number input value
        $('#summary').text(numberValue * 35 );
        $('#total').text(numberValue * 35); // Example of updating with some calculation
    });
});
