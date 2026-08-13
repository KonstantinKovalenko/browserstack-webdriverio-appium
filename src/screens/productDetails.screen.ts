import { $ } from '@wdio/globals'
import { ProductData } from '../types/product.ts'
import BaseScreen from './base.screen.ts'

class ProductDetailsScreen extends BaseScreen {
    get productName() {return $('id=com.saucelabs.mydemoapp.android:id/productTV')}
    get productQuantity() {return $('id=com.saucelabs.mydemoapp.android:id/noTV')}
    get productPrice() {return $('id=com.saucelabs.mydemoapp.android:id/priceTV')}
    
    get plusBtn() {return $('id=com.saucelabs.mydemoapp.android:id/plusIV')}
    get addToCartBtn() {return $('id=com.saucelabs.mydemoapp.android:id/cartBt')}

    async tapPlusBtn() {
        await this.tap(this.plusBtn)
    }

    async tapAddToCartBtn() {
        await this.tap(this.addToCartBtn)
    }

    async getProductData(): Promise<ProductData> {
        return {
            name: await this.productName.getText(),
            quantity: await this.productQuantity.getText(),
            price: await this.productPrice.getText()
        }
    }
}

export default new ProductDetailsScreen()