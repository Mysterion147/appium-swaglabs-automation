const { faker } = require('@faker-js/faker');

class CheckoutData {
    generateRandomCheckoutInfo() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            postalCode: faker.location.zipCode('#####-###')
        };
    }
}

module.exports = new CheckoutData();