class TestingMethod {
    get valueFromButton() {
        return 2;
    }

    exhibitValue() {
        console.log(this.valueFromButton);
    }
}

new TestingMethod().exhibitValue();
