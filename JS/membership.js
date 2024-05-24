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
        }else {
            event.preventDefault(); // Prevent default form submission

            // Hide the form
            const myModal = new bootstrap.Modal(document.getElementById('successModal'));
            myModal.show();
        }
        form.classList.add('was-validated')
      }, false)
    })

  })()

let maximumCheckBoxCount=0;

function selectedPlan(planID,price,maximumCheck){
    let plans = document.querySelectorAll('.plan');
    plans.forEach(function(plan){
        plan.classList.remove('selected');
    })

    let selectedPlan = document.getElementById(planID);
    selectedPlan.classList.add('selected');

    let summary = document.getElementById('summary');
    summary.innerHTML = ": $" + price +".00";

    let total = document.getElementById('total');
    total.innerHTML = ": $" + price +".00";

     // Enable checkboxes based on the selected plan
     var checkboxes = document.querySelectorAll('.checkbox-container input[type="checkbox"]');
     checkboxes.forEach(function(checkbox) {
        checkbox.disabled = false;
      checkbox.checked = false;
     });
     maximumCheckBoxCount = maximumCheck;
}

function toggleCheckbox() {
    var checkboxes = document.querySelectorAll('.checkbox-container input[type="checkbox"]');
    var checkedCount = 0;

    // Count how many checkboxes are checked
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    // Disable/enable checkboxes based on the checked count and maximumCheckBoxCount
    checkboxes.forEach(function(checkbox) {
      if (checkedCount >= maximumCheckBoxCount && !checkbox.checked) {
        checkbox.disabled = true;
      } else {
        checkbox.disabled = false;
      }
    });
}


