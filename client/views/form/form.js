/*- Template.contact.onCreated(function() {
  this.formState = new ReactiveVar('');

  var requiredInputs = $('#contact-form').find('input[data-required="true"], textarea[data-required="true"]').toArray();

  var isValidForm = function() {
    var toReturn;

    requiredInputs.forEach(function(element, index) {
      if (!$(element).val()) {
        toReturn = false;
      } else {
        toReturn = true;
      }
    });

    return toReturn;
  }

  let self = this;

  $('#contact-form').on('submit', function(event) {

    event.preventDefault();

    requiredInputs.forEach(function(element, index) {
      if (!$(element).val()) {
        $(element).parent('.form-group').addClass('has-error');
      } else {
        $(element).parent('.form-group').removeClass('has-error');
      }
    });

    
    if (isValidForm()) {
      self.formState.set('loading');
      Meteor.call('sendEmail', {
        name: $('input[name="name"]').val(),
        email:$('input[name="email"]').val(),
        message:$('input[name="message"]').val(),
      }, function(err, res){
        if (err) {
          self.formState.set('error');
        }else {
          // Reset form
          $('input[name="name"]').val('');
          $('input[name="email"]').val('');
          $('input[name="message"]').val('');
          self.formState.set('success');
        }
      });
    }

  });

  */


Template.form.events({
  'submit #contact-form'(event, template) {
    event.preventDefault();

    console.log("form submit");

    let nameInput = $('#form-name');
    let emailInput = $('#form-email');
    let textInput = $('#form-text');

    let name = nameInput.val();
    let email = emailInput.val();
    let text = textInput.val();

    if (name && email && text) {
      // preencheu tudo
      let req = {
        name,
        email,
        text
      }


      let errorMsg = TAPi18n.__('error');
      let loadingMsg = TAPi18n.__('loading');
      let successMsg = TAPi18n.__('success');
      let submitMsg = TAPi18n.__('contact_submit');
      
      $('#form-send').text(loadingMsg);
      nameInput.val('');
      emailInput.val('');
      textInput.val('');

      Meteor.call('contact', req, (err, res) => {
        if (err) {
          // houve algum erro na requisicao
          $("#form-send").text(errorMsg);
          $('#form-send').addClass('btn-danger');          
        } else {
          // tudo ok
          $("#form-send").text(successMsg);
          $('#form-send').addClass('btn-success');
        }
        setTimeout(function() {
          $('#form-send').text(submitMsg).removeClass('btn-danger').removeClass('btn-success');
        }, 3000);        
      })
    } else {
      // o cara nao preencheu tudo
    }
  }
})