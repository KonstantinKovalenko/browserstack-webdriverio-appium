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
            'appium:app': './app/mda-2.2.0-25.apk',
            'appium:appPackage': 'com.saucelabs.mydemoapp.android',
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