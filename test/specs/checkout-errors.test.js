const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');
const CheckoutPage = require('../pageobjects/checkout.page');

describe('Suíte de Validação de Erros - Form de Checkout', () => {

    const appId = 'com.swaglabsmobileapp';

    beforeEach(async () => {
        await driver.terminateApp(appId);
        await driver.activateApp(appId);

        // preparação do cenario
        await LoginPage.login('standard_user', 'secret_sauce');
        await ProductsPage.addFirstItemToCart();
        await ProductsPage.goToCart();
        await CheckoutPage.startCheckout();
    });

    it('Deve exibir erro ao tentar avançar sem preencher First Name', async () => {
        await CheckoutPage.fillInformation('', 'Silva', '12345-678');
        
        await expect(CheckoutPage.errorMessage).toBeDisplayed();
        await expect(CheckoutPage.errorMessage).toHaveText('First Name is required');
    });

    it('Deve exibir erro ao tentar avançar sem preencher Last Name', async () => {
        await CheckoutPage.fillInformation('João', '', '12345-678');
        
        await expect(CheckoutPage.errorMessage).toBeDisplayed();
        await expect(CheckoutPage.errorMessage).toHaveText('Last Name is required');
    });

    it('Deve exibir erro ao tentar avançar sem preencher Postal Code', async () => {
        await CheckoutPage.fillInformation('João', 'Silva', '');
        
        await expect(CheckoutPage.errorMessage).toBeDisplayed();
        await expect(CheckoutPage.errorMessage).toHaveText('Postal Code is required');
    });
});