import { $ } from '@wdio/globals'
import { ProductData } from '../types/product.ts'
import BaseScreen from './base.screen.ts'

class CartScreen extends BaseScreen {
    get cartTitle() {return $('android=new UiSelector().text("YOUR CART")')}

    get productCards() {return $$('android=new UiSelector().description("test-Item")')}
    get removeBtnsArray() {return $$('android=new UiSelector().description("test-REMOVE")')}

    get checkoutBtn () {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-CHECKOUT"))')
    }
    
    async tapCheckoutBtn(){
        await this.tap(this.checkoutBtn)
    }

    async getProductDataByIndex(index: number): Promise<ProductData> {
        await this.validateIndex(index)
        return {
            name: await $(`(//*[@content-desc="test-Description"])[${index}]/android.widget.TextView[1]`).getText(),
            price: await $(`(//*[@content-desc="test-Price"])[${index}]/android.widget.TextView`).getText(),
        }
    }

    async validateIndex(index: number){
        const productCards = this.productCards
        const maxIndex = await productCards.length
        if(index < 1 || index > maxIndex){
            throw new Error (`validateIndex: index must be between 1 and ${maxIndex} inclusive, got ${index}`)
        }
    }

    async removeFromCartByIndex(index: number) {
        await this.validateIndex(index)

        const removeButtons = await this.removeBtnsArray
        await this.tap(removeButtons[index - 1])
    }
}

export default new CartScreen()