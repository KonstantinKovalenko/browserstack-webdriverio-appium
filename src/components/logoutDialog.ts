import { $ } from '@wdio/globals'
import BaseScreen from '../screens/base.screen.ts'

class LogoutDialog extends BaseScreen {
    get logoutBtn () {return $('android=new UiSelector().text("LOGOUT")')}

    async acceptLogout(){
        await this.tap(this.logoutBtn)
    }
}

export default new LogoutDialog()