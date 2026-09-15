class ProductsPage {
    get productsHeader() { 
        return $('//android.widget.TextView[@text="PRODUCTS"]'); 
    }
    
    // Pega o primeiro elemento que possui o content-desc/accessibility-id 'test-ADD TO CART'
    get firstAddToCartButton() { 
        return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]'); 
    }

    get cartBadge() { 
        return $('//android.view.ViewGroup[@content-desc="test-Cart"]//android.widget.TextView'); 
    }

    get cartButton() { 
        return $('~test-Cart'); 
    }

    async addFirstItemToCart() {
        await this.firstAddToCartButton.click();
    }

    async goToCart() {
        await this.cartButton.click();
    }
}

module.exports = new ProductsPage();