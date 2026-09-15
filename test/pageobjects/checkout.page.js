const Gestures = require('../helpers/gestures');

class CheckoutPage {
    get checkoutButton() { return $('~test-CHECKOUT'); }
    get firstNameInput() { return $('~test-First Name'); }
    get lastNameInput() { return $('~test-Last Name'); }
    get postalCodeInput() { return $('~test-Zip/Postal Code'); }
    get continueButton() { return $('~test-CONTINUE'); }
    get completeHeader() { return $('//android.widget.TextView[@text="THANK YOU FOR YOU ORDER"]'); }
    get errorMessage() { return $('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView'); }

    async startCheckout() {
        await this.checkoutButton.click();
    }

    async fillInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
        await this.continueButton.click();
    }

    async finishOrder() {
        // Encontra o botão FINISH utilizando o helper genérico
        const finishButton = await Gestures.scrollIntoViewByAccessibilityId('test-FINISH');
        await finishButton.click();
    }
}

module.exports = new CheckoutPage();