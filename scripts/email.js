var form_id = "mailForm";
var data = {"access_token": "li8rptu86iejqdcvbmbek0ec"};
function onSuccess() {
  window.location = window.location.href;
  alert('Thank you for your message. You will receive a response within 24 hours. Have a great day.')
}

function onError(error) {
  alert('error happened')
}

var sendButton = $("#mailForm-send");

function send() {
  var name = $("#name").val();
  var email = $("email").val();
  var phone = $("#phone").val();
  var subject = $("#subject").val();
  var message = $("#message").val();
  if (!subject || !message || !validateCaptcha()) {
    return false;
  }

  sendButton.val('Sending…');
  sendButton.prop('disabled', true);
  data['subject'] = subject;
  data['text'] = `- Name:  ${name} - Email: ${email} - Phone: ${phone} -   message: ${message}`;

  $.post('https://postmail.invotes.com/send',
    data,
    onSuccess
  ).fail(onError);
  return false;
}

sendButton.on('click', send);

var $form = $("#" + form_id);
$form.submit(function (event) {
  event.preventDefault();
});
