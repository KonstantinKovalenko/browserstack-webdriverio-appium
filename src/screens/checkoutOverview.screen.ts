import { $ } from '@wdio/globals'
import { ProductData } from '../types/product.ts'
import BaseScreen from './base.screen.ts'

class CheckoutOverviewScreen extends BaseScreen {
    get overviewTitle() {return $('android=new UiSelector().text("CHECKOUT: OVERVIEW")')}

    get productCards() {return $$('android=new UiSelector().description("test-Item")')}

    get itemTotal() {return $('//android.widget.TextView[starts-with(@text, "Item total:")]')}
    get tax() {return $('//android.widget.TextView[starts-with(@text, "Tax:")]')}
    get totalAmount() {return $('//android.widget.TextView[starts-with(@text, "Total:")]')}

    get finishBtn() {return $('~test-FINISH')}
    
    async tapFinishBtn (){
        await this.tap(this.finishBtn)
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
}

export default new CheckoutOverviewScreen()