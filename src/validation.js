export default function validateContactUsForm(frm) {
  var isValid = true;
  if (!frm.name.value) {
    isValid = false;
  }
  if (!frm.email.value) {
    isValid = false;
  }
  if (!frm.message.value) {
    isValid = false;
  }

  return isValid;
}
