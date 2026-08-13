import { $ } from '@wdio/globals'
import BaseScreen from './base.screen.ts'

class CheckoutCompleteScreen extends BaseScreen {
    get completeTitle() {return $('id=com.saucelabs.mydemoapp.android:id/completeTV')}
}

export default new CheckoutCompleteScreen()