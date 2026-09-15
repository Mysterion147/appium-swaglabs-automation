class CheckoutPage {
    get checkoutButton() { return $('~test-CHECKOUT'); }
    get firstNameInput() { return $('~test-First Name'); }
    get lastNameInput() { return $('~test-Last Name'); }
    get postalCodeInput() { return $('~test-Zip/Postal Code'); }
    get continueButton() { return $('~test-CONTINUE'); }
    get finishButton() {
        return $(
            'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-FINISH"))'
        );
    }
    get completeHeader() { return $('//android.widget.TextView[@text="THANK YOU FOR YOU ORDER"]'); }

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
        await this.finishButton.click();
    }
}

module.exports = new CheckoutPage();