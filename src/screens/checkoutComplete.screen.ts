import { $ } from '@wdio/globals'
import BaseScreen from './base.screen.ts'

class CheckoutCompleteScreen extends BaseScreen {
    get completeTitle() {return $('android=new UiSelector().text("THANK YOU FOR YOU ORDER")')}
}

export default new CheckoutCompleteScreen()