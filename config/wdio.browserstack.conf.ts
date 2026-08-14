import 'dotenv/config'

export const config: WebdriverIO.Config = {
    runner: 'local',

    specs: ['./tests/specs/**/*.spec.ts'],

    maxInstances: 1,

    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    capabilities: [
        {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:app': process.env.BROWSERSTACK_APP,

            'bstack:options': {
                deviceName: 'Samsung Galaxy S22',
                platformVersion: '12.0',
                projectName: 'WDIO Appium BrowserStack',
                buildName: 'BrowserStack Test',
                sessionName: 'TC-01 Authentication',
            },
        },
    ],

    logLevel: 'info',

    framework: 'mocha',

    reporters: ['spec'],

    services: ['browserstack'],

    mochaOpts: {
        timeout: 60000,
    },
}