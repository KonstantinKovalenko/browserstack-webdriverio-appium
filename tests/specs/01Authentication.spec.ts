import { expect } from '@wdio/globals'
import { users } from '../../src/utils/testData.ts'

import restartHelper from '../../src/utils/restartHelper.ts'
import header from '../../src/components/header.ts'
import mainMenu from '../../src/components/mainMenu.ts'
import productsScreen from '../../src/screens/products.screen.ts'
import loginScreen from '../../src/screens/login.screen.ts'

describe('Authentication, TC-01', () => {
    beforeEach(async () => {
        await restartHelper.restartApp()
        await loginScreen.waitForLoaded()
    })

    it('should verify user can log in with valid credentials and successfully log out', async () => {
        await expect(loginScreen.loginTitle).toBeDisplayed()

        await loginScreen.login(users.validUser.user, users.validUser.password)
        await expect(productsScreen.productsTitle).toBeDisplayed()
        await expect(header.hamburgerBtn).toBeDisplayed()

        await header.openMainMenu()
        await expect(mainMenu.logoutMenuItem).toBeDisplayed()

        await mainMenu.tapLogoutMenuItem()
        await expect(loginScreen.loginTitle).toBeDisplayed()
    })
})