import { $ } from '@wdio/globals'
import BaseScreen from '../screens/base.screen.ts'

class MainMenu extends BaseScreen {
    get loginMenuItem () {return $('~Login Menu Item')}
    get logoutMenuItem () {return $('~Logout Menu Item')}
    
    async tapLoginMenuItem(){
        await this.tap(this.loginMenuItem)
    }

    async tapLogoutMenuItem(){
        await this.tap(this.logoutMenuItem)
    }
}

export default new MainMenu()