import { expect } from '@wdio/globals'
import { users } from '../../src/utils/testData.ts'

import restartHelper from '../../src/utils/restartHelper.ts'
import header from '../../src/components/header.ts'
import loginScreen from '../../src/screens/login.screen.ts'
import productsScreen from '../../src/screens/products.screen.ts'
import cartScreen from '../../src/screens/cart.screen.ts'

describe('Cart functionality, TC-04', () => {
    beforeEach(async () => {
        await restartHelper.restartApp()
        await loginScreen.waitForLoaded()
        await loginScreen.login(users.validUser.user, users.validUser.password)
    })

    it('should verify cart functionality', async () => {
        await expect(productsScreen.productsTitle).toBeDisplayed()

        await productsScreen.tapChangeViewBtn()

        const addedProduct = await productsScreen.getProductDataByIndex(1)
        await productsScreen.addToCartByIndex(1)
        await expect(header.cartBadge).toHaveText('1')

        await header.openCart()
        await expect(cartScreen.cartTitle).toBeDisplayed()

        const cartProduct = await cartScreen.getProductDataByIndex(1)
        expect(cartProduct).toEqual(addedProduct)

        await cartScreen.removeFromCartByIndex(1)
        await expect(await cartScreen.productCards.length).toEqual(0)
        await expect(header.cartBadge).not.toBeDisplayed()
    })
})