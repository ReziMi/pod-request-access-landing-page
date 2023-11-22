document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content loaded");
  const form = document.querySelector('.access-form');
  const emailInput = document.getElementById('input-field');
  const alertOutput = document.getElementById('alert-output');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // prevent the default form submission

      const emailValue = emailInput.value.trim();

      // Regular expression for validating an Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailValue === '' || !emailRegex.test(emailValue)) {
          alertOutput.style.display = 'block';
      } else {
          alertOutput.style.display = 'none';
      }

      return false;
  });
});
