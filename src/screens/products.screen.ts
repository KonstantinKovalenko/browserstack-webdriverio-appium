import { $ } from '@wdio/globals'
import BaseScreen from './base.screen.ts'

class ProductsScreen extends BaseScreen {
    get productsTitle() {return $('~title')}
    get sortDialogTitle() {return $('id=com.saucelabs.mydemoapp.android:id/sortTV')}

    get sortBtn() {return $('id=com.saucelabs.mydemoapp.android:id/sortIV')}
    get sortOptionPriceLowToHigh() {return $('id=com.saucelabs.mydemoapp.android:id/priceAscCL')}

    get productsPricesArray() {return $$('id=com.saucelabs.mydemoapp.android:id/priceTV')}
    get productCards() {return $$('id=com.saucelabs.mydemoapp.android:id/productIV')}

    async tapSortButton() {
        await this.tap(this.sortBtn)
    }

    async tapSortOptionPriceLowToHigh() {
        await this.tap(this.sortOptionPriceLowToHigh)
    }

    /** select product by 1-based index */
    async selectProductByIndex (index: number){
        const productCards = await this.productCards
        const maxIndex = await productCards.length
        if(index < 1 || index > maxIndex){
            throw new Error (`selectProductByIndex: index must be between 1 and ${maxIndex} inclusive, got ${index}`)
        }
        return this.tap(productCards[index-1])
    }

    async waitForLoaded() {
        await this.productsTitle.waitForDisplayed({
            timeout: 10000
        })
    }
}

export default new ProductsScreen()