const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const CheckoutData = require('../data/checkoutData');

describe('Fluxo Completo do Usuário (caminho feliz)', () => {

    const appId = 'com.swaglabsmobileapp';

    beforeEach(async () => {
        await driver.terminateApp(appId);
        await driver.activateApp(appId);
    });

    it('Deve realizar o fluxo completo de compra com sucesso (E2E)', async () => {
        const customer = CheckoutData.generateRandomCheckoutInfo();

        // 1. Login
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(ProductsPage.productsHeader).toBeDisplayed();

        // 2. Produtos
        await ProductsPage.addFirstItemToCart();
        await expect(ProductsPage.cartBadge).toHaveText('1');
        await ProductsPage.goToCart();

        // 3. Checkout com dados dinâmicos
        await CheckoutPage.startCheckout();
        await CheckoutPage.fillInformation(customer.firstName, customer.lastName, customer.postalCode);
        await CheckoutPage.finishOrder();

        // Validação Final
        await expect(CheckoutPage.completeHeader).toBeDisplayed();
    });
});