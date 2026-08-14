import { $ } from '@wdio/globals'
import BaseScreen from '../screens/base.screen.ts'

class MainMenu extends BaseScreen {
    get logoutMenuItem () {return $('~test-LOGOUT')}
    
    async tapLogoutMenuItem(){
        await this.tap(this.logoutMenuItem)
    }
}

export default new MainMenu()