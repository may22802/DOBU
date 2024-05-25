$(document).ready(function () {
    let originalUsername = '';
    let originalPassword = '';
    let originalEmail ='';
    let originalPhone ='';
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
                }
                form.classList.add('was-validated')
            }, false)
        })

    })()
    $('#loginForm').on('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        if (this.checkValidity() === false) {
            event.stopPropagation();
            $(this).addClass('was-validated');
            return;
        }

        const username = $('#loginUsername').val();
        const password = $('#loginPassword').val();
        const email = $("#loginEmail").val();
        const phone = $("#loginPhone").val();

        // Simple validation (in a real application, replace this with server-side validation)
        if (username === 'may228' && password === '2208') {
            $('.login-form').hide();
            $('#profilePage').show();

            // Populate profile fields with current username and password
            $('#profileUsername').val(username);
            $('#profilePassword').val(password);
            $('#profilePhone').val(phone);
            $('#profileEmail').val(email);

            originalUsername = username;
            originalPassword = password;
            originalEmail = email;
            originalPhone = phone;
            
        } else {
            alert('Invalid username or password');
        }
    });

    // Enable/Disable buttons based on input changes
    $('#profileUsername, #profilePassword,#profilePhone,#profileEmail').on('input', function() {
        const currentUsername = $('#profileUsername').val();
        const currentPassword = $('#profilePassword').val();
        const currentPhone = $("#profilePhone").val();
        const currentEmail = $("#profileEmail").val();

        if (currentUsername !== originalUsername || currentPassword !== originalPassword || currentEmail !== originalEmail || currentPhone !== originalPhone) {
            $('#saveChanges').prop('disabled', false);
            $('#cancelChanges').prop('disabled', false);
        } else {
            $('#saveChanges').prop('disabled', true);
            $('#cancelChanges').prop('disabled', true);
        }
    });

    $('#saveChanges').on('click', function () {
        const newUsername = $('#profileUsername').val();
        const newPassword = $('#profilePassword').val();
        const newEmail = $("#profileEmail").val();
        const newPhone = $("#profilePhone").val();
        if ($('#profileForm')[0].checkValidity() === false) {
            event.stopPropagation();
            $('#profileForm').addClass('was-validated');
            return;
        }

        // For demonstration, we simply update the welcome message
        // In a real application, save the changes to the server here

        alert('Changes saved!');
    });

    $('#cancelChanges').on('click', function () {
        // Reset the profile fields to original values
        $('#profileUsername').val(originalUsername);
        $('#profilePassword').val(originalPassword);
        $("#profilePhone").val(originalPhone);
        $("#profileEmail").val(originalEmail);

        alert('Changes canceled!');
    });

    $('#showPassword').change(function () {
        const passwordField = $('#profilePassword');
        if ($(this).is(':checked')) {
            passwordField.attr('type', 'text');
        } else {
            passwordField.attr('type', 'password');
        }

    });

    $('#showPasswordLogin').change(function () {
        const passwordField = $('#loginPassword');
        if ($(this).is(':checked')) {
            passwordField.attr('type', 'text');
        } else {
            passwordField.attr('type', 'password');
        }

    });
});

