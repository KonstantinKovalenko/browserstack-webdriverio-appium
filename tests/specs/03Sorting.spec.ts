import { expect } from '@wdio/globals'
import { extractNumbersFromElements, isSortedAscending } from '../../src/utils/functions.ts'

import restartHelper from '../../src/utils/restartHelper.ts'
import productsScreen from '../../src/screens/products.screen.ts'

describe('Products sorting, TC-03', () => {
    beforeEach(async () => {
        await restartHelper.restartApp()
        await productsScreen.waitForLoaded()
    })

    it('should verify products can be sorted', async () => {
        await expect(productsScreen.productsTitle).toBeDisplayed()

        await productsScreen.tapSortButton()
        await expect(productsScreen.sortDialogTitle).toBeDisplayed()

        await productsScreen.tapSortOptionPriceLowToHigh()
        await expect(productsScreen.sortDialogTitle).not.toBeDisplayed()
        await expect(productsScreen.productsTitle).toBeDisplayed()

        const productsPrices = await extractNumbersFromElements(productsScreen.productsPricesArray)
        expect(isSortedAscending(productsPrices)).toBe(true)
    })
})