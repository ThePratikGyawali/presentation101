function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';

  const registrationForm = document.getElementById('registrationForm');
  registrationForm.reset();
  
  setTimeout(function() {
    popup.style.display = 'none';
  }, 3000);
}
