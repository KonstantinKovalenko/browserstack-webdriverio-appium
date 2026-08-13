import { $ } from '@wdio/globals'
import { ProductData } from '../types/product.ts'
import { extractNumber } from '../../src/utils/functions.ts'
import BaseScreen from './base.screen.ts'

class ReviewOrderScreen extends BaseScreen {
    get reviewOrderTitle() {return $('id=com.saucelabs.mydemoapp.android:id/enterShippingAddressTV')}

    get productName() {return $('id=com.saucelabs.mydemoapp.android:id/titleTV')}
    get productQuantity() {return $('id=com.saucelabs.mydemoapp.android:id/itemNumberTV')}
    get productPrice() {return $('id=com.saucelabs.mydemoapp.android:id/priceTV')}
    get productTotalAmount() {return $('id=com.saucelabs.mydemoapp.android:id/totalAmountTV')}

    get deliveryName (){return $('id=com.saucelabs.mydemoapp.android:id/fullNameTV')}
    get deliveryAddress (){return $('id=com.saucelabs.mydemoapp.android:id/addressTV')}
    get deliveryCity (){return $('id=com.saucelabs.mydemoapp.android:id/cityTV')}
    get deliveryCountry (){return $('id=com.saucelabs.mydemoapp.android:id/countryTV')}

    get placeOrderBtn() {return $('id=com.saucelabs.mydemoapp.android:id/paymentBtn')}
    
    async tapPlaceOrderBtn (){
        await this.tap(this.placeOrderBtn)
    }

    async getProductData(): Promise<ProductData> {
        return {
            name: await this.productName.getText(),
            quantity: extractNumber(await this.productQuantity.getText()),
            price: await this.productPrice.getText()
        }
    }
}

export default new ReviewOrderScreen()