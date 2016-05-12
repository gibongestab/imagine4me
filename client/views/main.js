/*


import { Meteor } from 'meteor/meteor';

Subscribers = new Mongo.Collection('subscribers');

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  sendEmail(emailObj) {
    console.log('[sendEmail]', emailObj);
    this.unblock();
    
    Email.send({
      from: 'Imagine4me Contact',
      to: 'contact@Imagine4me',
      subject: 'New customer contact',
        text: `
  <ul>
    <li> Name: ${emailObj.name} </li>
    <li> Email: ${emailObj.email} </li>
    <li> Message: ${emailObj.message} </li>
  </ul>
`
    })
  },
  subscribe(email) {
    return Subscribers.insert({
      email: email,
      date: new Date()
    })
  }
})

*/
