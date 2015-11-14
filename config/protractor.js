exports.config = {
	specs: ['../test/e2e/**/*.js'],
	onPrepare: function() {
		browser.driver.get('http://localhost:3000/#/auth');
		browser.driver.findElement(by.id('entrar')).click();
		browser.driver.findElement(by.id('login_field'))
		.sendKeys('isanioweb@gmail.com');
		browser.driver.findElement(by.id('password'))
		.sendKeys('e5dbbcea5ce7e29');
		browser.driver.findElement(by.name('commit')).click();
	}
};