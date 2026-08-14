import { driver } from '@wdio/globals'

const APP_ID = 'com.swaglabsmobileapp'

export default class RestartHelper {
    static async restartApp() {
        await driver.terminateApp(APP_ID)
        await driver.activateApp(APP_ID)
    }
}