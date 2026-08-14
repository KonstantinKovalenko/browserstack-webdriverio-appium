import { expect } from '@wdio/globals'
import { calculateTotalAmount } from '../../src/utils/functions.ts'
import { users, shipping } from '../../src/utils/testData.ts'

import restartHelper from '../../src/utils/restartHelper.ts'
import header from '../../src/components/header.ts'
import productsScreen from '../../src/screens/products.screen.ts'
import cartScreen from '../../src/screens/cart.screen.ts'
import loginScreen from '../../src/screens/login.screen.ts'
import checkoutScreen from '../../src/screens/checkout.screen.ts'
import checkoutOverviewScreen from '../../src/screens/checkoutOverview.screen.ts'
import checkoutCompleteScreen from '../../src/screens/checkoutComplete.screen.ts'

describe('E2E Checkout, TC-05', () => {
    beforeEach(async () => {
        await restartHelper.restartApp()
        await loginScreen.waitForLoaded()
    })

    it('should verify successful checkout using valid data', async () => {
        await expect(loginScreen.loginTitle).toBeDisplayed()

        await loginScreen.tapFirstExampleBtn()
        await expect(loginScreen.usernameInput).toHaveText(users.validUser.user)

        const password = users.validUser.password
        const maskedPassword = await loginScreen.passwordInput.getText()
        expect(maskedPassword.length).toBe(password.length)

        await loginScreen.tapLoginBtn()
        await expect(productsScreen.productsTitle).toBeDisplayed()

        await productsScreen.tapChangeViewBtn()

        const addedProduct1 = await productsScreen.getProductDataByIndex(3)
        await productsScreen.addToCartByIndex(3)
        await expect(header.cartBadge).toHaveText('1')
        
        const addedProduct2 = await productsScreen.getProductDataByIndex(4)
        await productsScreen.addToCartByIndex(4)
        await expect(header.cartBadge).toHaveText('2')
        
        await header.openCart()
        await expect(cartScreen.cartTitle).toBeDisplayed()

        await cartScreen.tapCheckoutBtn()
        await expect(checkoutScreen.checkoutTitle).toBeDisplayed()

        await checkoutScreen.fillShippingAddress(
            shipping.valid.firstname,
            shipping.valid.lastname,
            shipping.valid.zip
        )

        await checkoutScreen.tapContinueBtn()
        await expect(checkoutOverviewScreen.overviewTitle).toBeDisplayed()
        
        const overviewProduct1 = await checkoutOverviewScreen.getProductDataByIndex(1)
        await expect(overviewProduct1).toEqual(addedProduct1)

        const overviewProduct2 = await checkoutOverviewScreen.getProductDataByIndex(2)
        await expect(overviewProduct2).toEqual(addedProduct2)

        await checkoutOverviewScreen.finishBtn.scrollIntoView()

        const expectedTotalAmount = calculateTotalAmount(await checkoutOverviewScreen.itemTotal.getText(), await checkoutOverviewScreen.tax.getText())
        await expect(checkoutOverviewScreen.totalAmount).toHaveText(expectedTotalAmount)

        await checkoutOverviewScreen.tapFinishBtn()
        await expect(checkoutCompleteScreen.completeTitle).toBeDisplayed()
    })
})