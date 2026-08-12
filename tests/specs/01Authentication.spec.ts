import { expect } from '@wdio/globals'
import { users } from '../../src/utils/userData.ts'
import productsScreen from '../../src/screens/products.screen.ts'
import loginScreen from '../../src/screens/login.screen.ts'
import mainMenu from '../../src/components/mainMenu.ts'
import logoutDialog from '../../src/components/logoutDialog.ts'


describe('Authentication, TC-01', () => {
    it('should verify user can login with valid credentials and successfully logout', async () => {
        await expect(productsScreen.productsTitle).toBeDisplayed()
        await expect(mainMenu.hamburgerBtn).toBeDisplayed()

        await mainMenu.openMainMenu()
        await expect(mainMenu.loginMenuItem).toBeDisplayed()

        await mainMenu.tapLoginMenuItem()
        await expect(loginScreen.loginTitle).toBeDisplayed()

        await loginScreen.login(users.validUser.email, users.validUser.password)
        await expect(productsScreen.productsTitle).toBeDisplayed()

        await mainMenu.openMainMenu()
        await expect(mainMenu.logoutMenuItem).toBeDisplayed()
        
        await mainMenu.tapLogoutMenuItem()
        await expect(logoutDialog.logoutBtn).toBeDisplayed()

        await logoutDialog.acceptLogout()
        await expect(loginScreen.loginTitle).toBeDisplayed()
    })
})