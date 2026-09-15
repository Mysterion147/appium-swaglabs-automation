const path = require('path');

exports.config = {
    runner: 'local',
    port: 4723,
    path: '/',
    specs: [
        './test/specs/e2e.test.js'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Android Emulator',
        'appium:app': path.join(process.cwd(), 'apps', 'sample.apk'),
        'appium:autoGrantPermissions': true,

        'appium:appWaitActivity': 'com.swaglabsmobileapp.MainActivity, com.swaglabsmobileapp.SplashActivity, com.swaglabsmobileapp.*',
        'appium:appWaitDuration': 30000,
        'appium:adbExecTimeout': 60000
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, context, { error, result, duration, passed, retry }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
};