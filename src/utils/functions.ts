import { ChainablePromiseArray } from 'webdriverio'

export async function extractNumbersFromElements(array: ChainablePromiseArray): Promise<number[]> {
    const inputArray = await array
    const resultArray: number[] = []

    for (const el of inputArray) {
        const priceText = await el.getText()
        const checkPrice = priceText.match(/\d+(\.\d+)?/)

        if (!checkPrice) {
            throw new Error(`No price found in ${priceText}`)
        }

        resultArray.push(parseFloat(checkPrice[0]))
    }
    return resultArray
}

export function isSortedAscending(array: number[]): boolean {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            return false
        }
    }
    return true
}

export function calculateTotalAmount(itemTotal: string, tax: string): string {
    const itemTotalMatch = itemTotal.match(/\d+(\.\d+)?/)
    const taxMatch = tax.match(/\d+(\.\d+)?/)

    if (!itemTotalMatch) {
        throw new Error(`No price found in ${itemTotal}`)
    }

    if (!taxMatch) {
        throw new Error(`No tax found in ${tax}`)
    }

    const itemTotalValue = parseFloat(itemTotalMatch[0])
    const taxValue = parseFloat(taxMatch[0])
    const totalAmount = itemTotalValue + taxValue

    return `Total: $${totalAmount.toFixed(2)}`
}