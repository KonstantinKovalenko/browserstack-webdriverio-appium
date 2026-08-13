import { $ } from '@wdio/globals'
import BaseScreen from './base.screen.ts'

class PaymentScreen extends BaseScreen {
    get paymentTitle() {return $('id=com.saucelabs.mydemoapp.android:id/enterPaymentMethodTV')}

    get cardNameInput () {return $('id=com.saucelabs.mydemoapp.android:id/nameET')}
    get cardNumberInput () {return $('id=com.saucelabs.mydemoapp.android:id/cardNumberET')}
    get cardExpirationDateInput () {return $('id=com.saucelabs.mydemoapp.android:id/expirationDateET')}
    get cardCVCInput () {return $('id=com.saucelabs.mydemoapp.android:id/securityCodeET')}

    get reviewOrderBtn () {return $('id=com.saucelabs.mydemoapp.android:id/paymentBtn')}

    async tapReviewOrderBtn(){
        await this.tap(this.reviewOrderBtn)
    }

    async fillPaymentCard(name: string, number: string, expDate: string, cvc: string) {
        await this.fill(this.cardNameInput, name)
        await this.fill(this.cardNumberInput, number)
        await this.fill(this.cardExpirationDateInput, expDate)
        await this.fill(this.cardCVCInput, cvc)
    }
}

export default new PaymentScreen()