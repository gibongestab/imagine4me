


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