import path from 'node:path'

export const config: WebdriverIO.Config = {
    rootDir: path.resolve(process.cwd()),

    runner: 'local',

    specs: ['./tests/specs/**/*.spec.ts'],

    maxInstances: 1,

    capabilities: [
        {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'emulator-5554',
            'appium:app': './app/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
            'appium:appPackage': 'com.swaglabsmobileapp',
            'appium:noReset': true,
        },
    ],

    logLevel: 'info',

    framework: 'mocha',

    reporters: ['spec'],

    services: ['appium'],

    mochaOpts: {
        timeout: 60000,
    },
}