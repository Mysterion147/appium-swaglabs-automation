class Gestures {
    async scrollIntoViewByAccessibilityId(accessibilityId) {
        const selector = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("${accessibilityId}"))`;
        return $(selector);
    }

    async scrollIntoViewByText(text) {
        const selector = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${text}"))`;
        return $(selector);
    }
}

module.exports = new Gestures();