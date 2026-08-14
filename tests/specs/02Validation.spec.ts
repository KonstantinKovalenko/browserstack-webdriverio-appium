import { expect } from '@wdio/globals'
import { users, loginForm } from '../../src/utils/testData.ts'

import restartHelper from '../../src/utils/restartHelper.ts'
import loginScreen from '../../src/screens/login.screen.ts'

describe('Form validation, TC-02', () => {
    beforeEach(async () => {
        await restartHelper.restartApp()
        await loginScreen.waitForLoaded()
    })

    it('should verify login form validation when password is not provided', async () => {
        await expect(loginScreen.loginTitle).toBeDisplayed()

        await loginScreen.fillUsername(users.validUser.user)
        await expect(await loginScreen.passwordInput.getText()).toBe(loginForm.passwordPlaceholder)

        await loginScreen.tapLoginBtn()
        await expect(loginScreen.loginTitle).toBeDisplayed()
        await expect(loginScreen.passwordErrorMessage).toBeDisplayed()
        await expect(loginScreen.passwordErrorMessage).toHaveText('Password is required')
    })
})