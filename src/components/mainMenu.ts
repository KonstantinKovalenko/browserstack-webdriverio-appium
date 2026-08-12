import { $ } from '@wdio/globals'
import BaseScreen from '../screens/base.screen.ts'

class MainMenu extends BaseScreen {
    get hamburgerBtn () {return $('~View menu')}
    get loginMenuItem () {return $('~Login Menu Item')}
    get logoutMenuItem () {return $('~Logout Menu Item')}

    async openMainMenu(){
        await this.tap(this.hamburgerBtn)
    }

    async tapLoginMenuItem(){
        await this.tap(this.loginMenuItem)
    }

    async tapLogoutMenuItem(){
        await this.tap(this.logoutMenuItem)
    }
}

export default new MainMenu()