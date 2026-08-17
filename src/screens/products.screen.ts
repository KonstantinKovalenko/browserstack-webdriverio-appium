import { $ } from '@wdio/globals'
import { ProductData } from '../types/product.ts'
import BaseScreen from './base.screen.ts'

class ProductsScreen extends BaseScreen {
    get productsTitle() {return $('android=new UiSelector().text("PRODUCTS")')}
    get sortDialogTitle() {return $('android=new UiSelector().text("Sort items by...")')}

    get changeViewBtn() {return $('~test-Toggle')}
    get sortBtn() {return $('~test-Modal Selector Button')}
    get sortOptionPriceLowToHigh() {return $('android=new UiSelector().text("Price (low to high)")')}

    get productCards() {return $$('(//android.view.ViewGroup[@content-desc="test-Item"])')}
    get productsNamesArray() {return $$('//android.widget.TextView[@content-desc="test-Item title"]')}
    get productsPricesArray() {return $$('//android.widget.TextView[@content-desc="test-Price"]')}

    async tapSortButton() {
        await this.tap(this.sortBtn)
    }

    async tapSortOptionPriceLowToHigh() {
        await this.tap(this.sortOptionPriceLowToHigh)
    }

    async tapChangeViewBtn() {
        await this.tap(this.changeViewBtn)
    }

    /** add product to cart by 1-based index */
    async addToCartByIndex (index: number){
        await this.validateIndex(index)

        const productCards = await this.productCards
        const productCard = productCards[index - 1]

        const addButton = productCard.$('//android.view.ViewGroup[@content-desc="test-ADD TO CART"]')
        await this.tap(addButton)
    }

    async getProductDataByIndex(index: number): Promise<ProductData> {
        await this.validateIndex(index)

        const productNames = await this.productsNamesArray
        const productPrices = await this.productsPricesArray

        return {
            name: await productNames[index - 1].getText(),
            price: await productPrices[index - 1].getText()
        }
}

    async validateIndex(index: number){
        const productCards = this.productCards
        const maxIndex = await productCards.length
        if(index < 1 || index > maxIndex){
            throw new Error (`validateIndex: index must be between 1 and ${maxIndex} inclusive, got ${index}`)
        }
    }
}

export default new ProductsScreen()