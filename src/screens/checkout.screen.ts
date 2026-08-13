import { $ } from '@wdio/globals'
import BaseScreen from './base.screen.ts'

class CheckoutScreen extends BaseScreen {
    get shippingTitle() {return $('id=com.saucelabs.mydemoapp.android:id/enterShippingAddressTV')}

    get shippingNameInput () {return $('id=com.saucelabs.mydemoapp.android:id/fullNameET')}
    get shippingAddressInput () {return $('id=com.saucelabs.mydemoapp.android:id/address1ET')}
    get shippingCityInput () {return $('id=com.saucelabs.mydemoapp.android:id/cityET')}
    get shippingZipInput () {return $('id=com.saucelabs.mydemoapp.android:id/zipET')}
    get shippingCountryInput () {return $('id=com.saucelabs.mydemoapp.android:id/countryET')}

    get toPaymentBtn () {return $('id=com.saucelabs.mydemoapp.android:id/paymentBtn')}

    async tapToPaymentBtn(){
        await this.tap(this.toPaymentBtn)
    }

    async fillShippingAddress(name: string, address: string, city: string, zip: string, country: string) {
        await this.fill(this.shippingNameInput, name)
        await this.fill(this.shippingAddressInput, address)
        await this.fill(this.shippingCityInput, city)
        await this.fill(this.shippingZipInput, zip)
        await this.fill(this.shippingCountryInput, country)
    }
}

export default new CheckoutScreen()