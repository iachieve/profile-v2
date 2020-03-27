var form_id = "mailForm";
var sendButton = $("#mailForm-send");

var data = { "access_token": "li8rptu86iejqdcvbmbek0ec" };

function onSuccess() {
  $("#" + form_id).trigger("reset");
  sendButton.val('Sending…');
  sendButton.prop('disabled', true);
  alert('Thank you so much for your message. I will come back to you ASAP. Have a great day.')
}

function onError(error) {
  alert('error happened')
}

function send() {
  const name = $("#name").val();
  const email = $("#email").val();
  const phone = $("#phone").val();
  const subject = $("#subject").val();
  const message = $("#message").val();
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
