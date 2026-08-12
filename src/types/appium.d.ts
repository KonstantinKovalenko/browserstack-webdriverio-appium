import type { Browser } from 'webdriverio'

declare module 'webdriverio' {
    interface Browser {
        terminateApp(appId: string): Promise<void>
        activateApp(appId: string): Promise<void>
    }
}