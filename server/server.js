Meteor.methods({
	contact(req) {
		check(req, Object);
		check(req.name, String);
		check(req.email, String);
		check(req.text, String);

		let from = "contact@imagine4me.com" //aqui eh de quem voce vai receber o email (nome)
		let to = "contact@imagine4me.com" //aqui eh pra onde o email vai ser disparado
		let subject = `Someone made contact - ${req.name}`  //Assunto do email, ai ter o nome da pessoa
		let html = `
		<ul>
			<li><b>Name</b>: ${req.name}</li>
			<li><b>Email</b>: ${req.email}</li>
			<li><b>Text</b>: ${req.text}</li>
		</ul>

		Hope you get this client (:`;

		let obj = {
			from,
			to,
			subject,
			html
		}
		
		return Email.send(obj)
	}
})