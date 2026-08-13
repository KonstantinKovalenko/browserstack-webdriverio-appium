import { $ } from '@wdio/globals'
import { ProductData } from '../types/product.ts'
import BaseScreen from './base.screen.ts'

class CartScreen extends BaseScreen {
    get cartTitle() {return $('id=com.saucelabs.mydemoapp.android:id/productTV')}
    get cartEmptyMessage() {return $('id=com.saucelabs.mydemoapp.android:id/noItemTitleTV')}

    get productName() {return $('id=com.saucelabs.mydemoapp.android:id/titleTV')}
    get productQuantity() {return $('id=com.saucelabs.mydemoapp.android:id/noTV')}
    get productPrice() {return $('id=com.saucelabs.mydemoapp.android:id/priceTV')}
    get productTotalPrice() {return $('id=com.saucelabs.mydemoapp.android:id/totalPriceTV')}

    get removeBtn() {return $('id=com.saucelabs.mydemoapp.android:id/removeBt')}
    get checkoutBtn() {return $('id=com.saucelabs.mydemoapp.android:id/cartBt')}
    
    async tapRemoveBtn() {
        await this.tap(this.removeBtn)
    }

    async tapCheckoutBtn(){
        await this.tap(this.checkoutBtn)
    }

    async getProductData(): Promise<ProductData> {
        return {
            name: await this.productName.getText(),
            quantity: await this.productQuantity.getText(),
            price: await this.productPrice.getText()
        }
    }
}

export default new CartScreen()