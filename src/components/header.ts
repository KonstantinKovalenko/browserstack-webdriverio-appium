import { $ } from '@wdio/globals'
import BaseScreen from '../screens/base.screen.ts'

class Header extends BaseScreen {
    get hamburgerBtn () {return $('android=new UiSelector().className("android.widget.ImageView").instance(1)')}
    get cartBtn () {return $('android=new UiSelector().className("android.widget.ImageView").instance(3)')}

    get cartBadge () {return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.TextView')}

    async openMainMenu(){
        await this.tap(this.hamburgerBtn)
    }

    async openCart(){
        await this.tap(this.cartBtn)
    }
}

export default new Header()