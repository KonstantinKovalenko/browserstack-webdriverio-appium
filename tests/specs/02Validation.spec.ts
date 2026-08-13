import { expect } from '@wdio/globals'
import { users } from '../../src/utils/testData.ts'

import restartHelper from '../../src/utils/restartHelper.ts'
import header from '../../src/components/header.ts'
import mainMenu from '../../src/components/mainMenu.ts'
import loginScreen from '../../src/screens/login.screen.ts'
import productsScreen from '../../src/screens/products.screen.ts'


describe('Form validation, TC-02', () => {
    beforeEach(async () => {
        await restartHelper.restartApp()
        await productsScreen.waitForLoaded()

        await header.openMainMenu()
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