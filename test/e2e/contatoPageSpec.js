var ContatoPage = require('./pages/contatoPage');

describe('Cadastro de contatos', function() {
	var pagina = new ContatoPage();

	beforeEach(function(){
		pagina.visitar();
	});

	it('Deve cadastrar um contato', function() {
		var aleatorio = Math.floor((Math.random() * 10000000) + 1);
		var nome =  'test' + aleatorio;
		var email =  'teste@email' + aleatorio;
		pagina.digitarNome(nome);
		pagina.digitarEmail(email);
		pagina.selecionarPrimeiraEmergenciaDaLista();
		pagina.salvar();
		expect(pagina.obterMensagem()).toContain('sucesso');
	});
})