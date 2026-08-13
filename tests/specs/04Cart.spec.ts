import { expect } from '@wdio/globals'
import { calculateTotalPrice } from '../../src/utils/functions.ts'
import { fee } from '../../src/utils/testData.ts'

import restartHelper from '../../src/utils/restartHelper.ts'
import header from '../../src/components/header.ts'
import productsScreen from '../../src/screens/products.screen.ts'
import productDetailsScreen from '../../src/screens/productDetails.screen.ts'
import cartScreen from '../../src/screens/cart.screen.ts'

describe('Cart functionality, TC-04', () => {
    beforeEach(async () => {
        await restartHelper.restartApp()
        await productsScreen.waitForLoaded()
    })

    it('should verify cart functionality', async () => {
        await expect(productsScreen.productsTitle).toBeDisplayed()

        await productsScreen.selectProductByIndex(1)
        await expect(productDetailsScreen.addToCartBtn).toBeDisplayed()

        await productDetailsScreen.tapPlusBtn()
        await expect(productDetailsScreen.productQuantity).toHaveText('2')

        const addedProduct = await productDetailsScreen.getProductData()
        await productDetailsScreen.tapAddToCartBtn()
        await expect(header.cartBadge).toHaveText('2')

        await header.openCart()
        await expect(cartScreen.cartTitle).toBeDisplayed()

        const cartProduct = await cartScreen.getProductData()
        expect(cartProduct).toEqual(addedProduct)

        const expectedTotalPrice = calculateTotalPrice(cartProduct.price, cartProduct.quantity, fee.noFee)
        await expect(cartScreen.productTotalPrice).toHaveText(expectedTotalPrice)

        await cartScreen.tapRemoveBtn()
        await expect(cartScreen.cartEmptyMessage).toBeDisplayed()
    })
})