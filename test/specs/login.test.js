// DEPRECATED: primeiro teste apenas

const LoginPage = require('../pageobjects/login.page');
const productPage = require('../pageobjects/products.page');

describe('Suíte de Testes de Autenticação - Swag Labs', () => {

    const appId = 'com.swaglabsmobileapp';

    beforeEach(async () => {
        // reseta o app se ele ja estiver rodando
        await driver.terminateApp(appId);
        await driver.activateApp(appId);
    });

    it('Deve realizar login com sucesso usando credenciais válidas', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        
        // valid: tela de produtos deve estar visível
        await expect(ProductPage.productsHeader).toBeDisplayed();
    });

    it('Deve exibir mensagem de erro ao tentar logar com usuário bloqueado', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
        
        // valid: mensagem de erro visivel
        await expect(LoginPage.errorMessage).toBeDisplayed();
    });
});