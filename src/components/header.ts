import { $ } from '@wdio/globals'
import BaseScreen from '../screens/base.screen.ts'

class Header extends BaseScreen {
    get hamburgerBtn () {return $('~test-Menu')}
    get cartBtn () {return $('~test-Cart')}
    get cartBadge () {return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.TextView')}

    async openMainMenu(){
        await this.tap(this.hamburgerBtn)
    }

    async openCart(){
        await this.tap(this.cartBtn)
    }
}

export default new Header()