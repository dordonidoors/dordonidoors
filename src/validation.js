export default function validateContactUsForm(frm) {
  var isValid = true;
  if (!frm.name.value) {
    frm.name.style.borderColor = 'red';
    isValid = false;
  } else {
    frm.name.style.borderColor = '';
  }
  if (!frm.email.value) {
    isValid = false;
    frm.email.style.borderColor = 'red';
  } else {
    frm.email.style.borderColor = '';
  }
  if (!frm.message.value) {
    isValid = false;
    frm.message.style.borderColor = 'red';
  } else {
    frm.message.style.borderColor = '';
  }

  if (isValid) {
    frm.name.style.borderColor = '';
    frm.email.style.borderColor = '';
    frm.message.style.borderColor = '';
  }

  return isValid;
}
