function clickSubmit() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  console.log("Ten " + name + " SDT " + phone + " Email " + email);
  const sheet = GG_Sheet;
  sheet.appendRow([name.value, phone.value, email.value]);
}
