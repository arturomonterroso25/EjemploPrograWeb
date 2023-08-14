document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe
  
  // Obtén los valores ingresados por el usuario
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var interests = [];
  var checkboxes = document.querySelectorAll('input[name="interests"]:checked');
  checkboxes.forEach(function(checkbox) {
    interests.push(checkbox.value);
  });
  var birthday = document.getElementById("birthday").value;
  var message = document.getElementById("message").value;
  
  // Muestra una notificación con los datos ingresados
  var notification = new Notification("Datos del formulario", {
    body: "Nombre: " + name + "\nEmail: " + email + "\nGénero: " + gender +
      "\nIntereses: " + interests.join(", ") + "\nFecha de nacimiento: " +
      birthday + "\nMensaje: " + message
  });
  
  // Limpia los campos del formulario
  document.getElementById("myForm").reset();
});
