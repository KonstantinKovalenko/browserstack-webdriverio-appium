import { ChainablePromiseElement } from 'webdriverio'

export default class BaseScreen {
    async tap(element: ChainablePromiseElement) {
        await element.click()
    }

    async fill(element: ChainablePromiseElement, value: string) {
        await element.setValue(value)
    }
}