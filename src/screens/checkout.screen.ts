import { $ } from '@wdio/globals'
import BaseScreen from './base.screen.ts'

class CheckoutScreen extends BaseScreen {
    get checkoutTitle() {return $('android=new UiSelector().text("CHECKOUT: INFORMATION")')}

    get checkoutFirstnameInput () {return $('~test-First Name')}
    get checkoutLastnameInput () {return $('~test-Last Name')}
    get checkoutZipInput () {return $('~test-Zip/Postal Code')}

    get continueBtn () {return $('~test-CONTINUE')}

    async tapContinueBtn(){
        await this.tap(this.continueBtn)
    }

    async fillShippingAddress(firstname: string, lastname: string, zip: string) {
        await this.fill(this.checkoutFirstnameInput, firstname)
        await this.fill(this.checkoutLastnameInput, lastname)
        await this.fill(this.checkoutZipInput, zip)
    }
}

export default new CheckoutScreen()