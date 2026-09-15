const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');
const CheckoutPage = require('../pageobjects/checkout.page');

describe('Suíte de Testes Automatizados - Swag Labs Mobile', () => {

    const appId = 'com.swaglabsmobileapp';

    beforeEach(async () => {
        await driver.terminateApp(appId);
        await driver.activateApp(appId);
    });

    it('Deve realizar o fluxo completo de compra com sucesso (E2E)', async () => {
        // 1. Login
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(ProductsPage.productsHeader).toBeDisplayed();

        // 2. Produtos
        await ProductsPage.addFirstItemToCart();
        await expect(ProductsPage.cartBadge).toHaveText('1');
        await ProductsPage.goToCart();

        // 3. Checkout
        await CheckoutPage.startCheckout();
        await CheckoutPage.fillInformation('João', 'Silva', '12345-678');
        await CheckoutPage.finishOrder();

        // Validação Final
        await expect(CheckoutPage.completeHeader).toBeDisplayed();
    });
});