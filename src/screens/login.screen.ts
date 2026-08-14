import { $ } from '@wdio/globals'
import BaseScreen from './base.screen.ts'

class LoginScreen extends BaseScreen {
    get loginTitle() {return $('android=new UiSelector().className("android.widget.ImageView").instance(0)')}

    get usernameInput() {return $('~test-Username')}
    get passwordInput() {return $('~test-Password')}
    get passwordErrorMessage() {return $('android=new UiSelector().text("Password is required")')}
    get loginBtn() {return $('~test-LOGIN')}

    get firstExampleCredentialsBtn() {return $('android=new UiSelector().text("standard_user")')}

    async login(username: string, password: string) {
        await this.fill(this.usernameInput, username)
        await this.fill(this.passwordInput, password)
        await this.tap(this.loginBtn)
    }

    async fillUsername(username: string) {
        await this.fill(this.usernameInput, username)
    }

    async tapLoginBtn() {
        await this.tap(this.loginBtn)
    }

    async tapFirstExampleBtn(){
        await this.tap(this.firstExampleCredentialsBtn)
    }

    async waitForLoaded() {
        await this.loginTitle.waitForDisplayed({
            timeout: 10000
        })
    }
}

export default new LoginScreen()