
var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
    e.preventDefault();
    var $submit = $('input:submit', $contactForm);
    var defaultSubmitText = $submit.val();
    $.ajax({
        url: '//formspree.io/rvz.npti@gmail.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
            $submit.attr('disabled', true).val('Sending message…');
        },
        success: function(data) {
            $submit.val('Message sent!');
            setTimeout(function() {
                $submit.attr('disabled', false).val(defaultSubmitText);
            }, 3000);
        },
        error: function(err) {
            $submit.val('Opps, there was an error!');
            setTimeout(function() {
                $submit.attr('disabled', false).val(defaultSubmitText);
            }, 3000);
        }
    });
});
