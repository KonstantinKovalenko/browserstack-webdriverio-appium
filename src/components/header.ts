import { $ } from '@wdio/globals'
import BaseScreen from '../screens/base.screen.ts'

class Header extends BaseScreen {
    get hamburgerBtn () {return $('~View menu')}
    get cartBtn () {return $('id=com.saucelabs.mydemoapp.android:id/cartRL')}

    get cartBadge () {return $('id=com.saucelabs.mydemoapp.android:id/cartTV')}

    async openMainMenu(){
        await this.tap(this.hamburgerBtn)
    }

    async openCart(){
        await this.tap(this.cartBtn)
    }
}

export default new Header()