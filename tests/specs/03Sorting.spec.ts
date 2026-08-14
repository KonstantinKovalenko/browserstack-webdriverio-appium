import { expect } from '@wdio/globals'
import { users } from '../../src/utils/testData.ts'
import { extractNumbersFromElements, isSortedAscending } from '../../src/utils/functions.ts'

import restartHelper from '../../src/utils/restartHelper.ts'
import productsScreen from '../../src/screens/products.screen.ts'
import loginScreen from '../../src/screens/login.screen.ts'

describe('Products sorting, TC-03', () => {
    beforeEach(async () => {
        await restartHelper.restartApp()
        await loginScreen.waitForLoaded()
        await loginScreen.login(users.validUser.user, users.validUser.password)
    })

    it('should verify products can be sorted', async () => {
        await expect(productsScreen.productsTitle).toBeDisplayed()

        await productsScreen.tapSortButton()
        await expect(productsScreen.sortDialogTitle).toBeDisplayed()

        await productsScreen.tapSortOptionPriceLowToHigh()
        await expect(productsScreen.sortDialogTitle).not.toBeDisplayed()
        await expect(productsScreen.productsTitle).toBeDisplayed()

        await productsScreen.tapChangeViewBtn()

        const productsPrices = await extractNumbersFromElements(productsScreen.productsPricesArray)
        expect(isSortedAscending(productsPrices)).toBe(true)
    })
})