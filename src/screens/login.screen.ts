import { $ } from '@wdio/globals'
import BaseScreen from './base.screen.ts'

class LoginScreen extends BaseScreen {
    get loginTitle() {return $('id=com.saucelabs.mydemoapp.android:id/loginTV')}

    get usernameInput() {return $('id=com.saucelabs.mydemoapp.android:id/nameET')}
    get passwordInput() {return $('id=com.saucelabs.mydemoapp.android:id/passwordET')}
    get passwordErrorMessage() {return $('id=com.saucelabs.mydemoapp.android:id/passwordErrorTV')}
    get loginBtn() {return $('id=com.saucelabs.mydemoapp.android:id/loginBtn')}

    get firstExampleCredentialsBtn() {return $('id=com.saucelabs.mydemoapp.android:id/username1TV')}

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
}

export default new LoginScreen()