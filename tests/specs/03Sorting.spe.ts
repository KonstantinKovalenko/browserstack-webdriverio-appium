import { expect } from '@wdio/globals'

describe('My Demo App', () => {
    it('should display the Products title', async () => {
        const productsTitle = await $('~title');

        await expect(productsTitle).toBeDisplayed();
    });
});