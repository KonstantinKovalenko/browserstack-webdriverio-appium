import { expect } from '@wdio/globals'
import { users } from '../../src/utils/userData.ts'
import mainMenu from '../../src/components/mainMenu.ts'
import loginScreen from '../../src/screens/login.screen.ts'
import restartHelper from '../../src/utils/restartHelper.ts'

describe('Form validation, TC-02', () => {
    beforeEach(async () => {
        restartHelper.restartApp()

        await mainMenu.openMainMenu()
        await mainMenu.tapLoginMenuItem()
    })

    it('should verify login form validation when password is empty', async () => {
        await expect(loginScreen.loginTitle).toBeDisplayed()

        await loginScreen.fillUsername(users.validUser.email)
        await expect(await loginScreen.passwordInput.getText()).toBe('')

        await loginScreen.tapLoginBtn()
        await expect(loginScreen.loginTitle).toBeDisplayed()
        await expect(loginScreen.passwordErrorMessage).toBeDisplayed()
    })
})