import { expect } from '@wdio/globals'
import { calculateTotalPrice } from '../../src/utils/functions.ts'
import { users, shipping, payment, fee } from '../../src/utils/testData.ts'

import restartHelper from '../../src/utils/restartHelper.ts'
import header from '../../src/components/header.ts'
import mainMenu from '../../src/components/mainMenu.ts'
import productsScreen from '../../src/screens/products.screen.ts'
import productDetailsScreen from '../../src/screens/productDetails.screen.ts'
import cartScreen from '../../src/screens/cart.screen.ts'
import loginScreen from '../../src/screens/login.screen.ts'
import checkoutScreen from '../../src/screens/checkout.screen.ts'
import paymentScreen from '../../src/screens/payment.screen.ts'
import reviewOrderScreen from '../../src/screens/reviewOrder.screen.ts'
import checkoutCompleteScreen from '../../src/screens/checkoutComplete.screen.ts'

describe('E2E Checkout, TC-05', () => {
    beforeEach(async () => {
        await restartHelper.restartApp()
        await productsScreen.waitForLoaded()
    })

    it('should verify successful checkout using valid data', async () => {
        await expect(productsScreen.productsTitle).toBeDisplayed()

        await header.openMainMenu()
        await expect(mainMenu.loginMenuItem).toBeDisplayed()
        
        await mainMenu.tapLoginMenuItem()
        await expect(loginScreen.loginTitle).toBeDisplayed()

        await loginScreen.tapFirstExampleBtn()
        await expect(loginScreen.usernameInput).toHaveText(users.validUser.email)

        const password = users.validUser.password
        const maskedPassword = await loginScreen.passwordInput.getText()
        expect(maskedPassword.length).toBe(password.length)

        await loginScreen.tapLoginBtn()
        await expect(productsScreen.productsTitle).toBeDisplayed()

        await productsScreen.selectProductByIndex(3)
        await expect(productDetailsScreen.addToCartBtn).toBeDisplayed()

        const addedProduct = await productDetailsScreen.getProductData()
        await productDetailsScreen.tapAddToCartBtn()
        await expect(header.cartBadge).toHaveText('1')

        await header.openCart()
        await expect(cartScreen.cartTitle).toBeDisplayed()

        await cartScreen.tapCheckoutBtn()
        await expect(checkoutScreen.shippingTitle).toBeDisplayed()

        await checkoutScreen.fillShippingAddress(
            shipping.valid.name,
            shipping.valid.address,
            shipping.valid.city,
            shipping.valid.zip,
            shipping.valid.country
        )
        await checkoutScreen.tapToPaymentBtn()
        await expect(paymentScreen.paymentTitle).toBeDisplayed()

        await paymentScreen.fillPaymentCard(
            payment.valid.name,
            payment.valid.number,
            payment.valid.expDate,
            payment.valid.cvc

        )
        await paymentScreen.tapReviewOrderBtn()
        await expect(reviewOrderScreen.reviewOrderTitle).toBeDisplayed()

        const reviewOrderProduct = await reviewOrderScreen.getProductData()
        await expect(reviewOrderProduct).toEqual(addedProduct)

        await expect(reviewOrderScreen.deliveryName).toHaveText(expect.stringContaining(shipping.valid.name))
        await expect(reviewOrderScreen.deliveryAddress).toHaveText(expect.stringContaining(shipping.valid.address))
        await expect(reviewOrderScreen.deliveryCity).toHaveText(expect.stringContaining(shipping.valid.city))
        await expect(reviewOrderScreen.deliveryCountry).toHaveText(expect.stringContaining(shipping.valid.country))
        await expect(reviewOrderScreen.deliveryCountry).toHaveText(expect.stringContaining(shipping.valid.zip))

        const expectedTotalAmount = calculateTotalPrice(reviewOrderProduct.price, reviewOrderProduct.quantity, fee.shippingFee)
        await expect(reviewOrderScreen.productTotalAmount).toHaveText(expectedTotalAmount)

        await reviewOrderScreen.tapPlaceOrderBtn()
        await expect(checkoutCompleteScreen.completeTitle).toBeDisplayed()
    })
})