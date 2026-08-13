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

export function calculateTotalPrice(price: string, quantity: string, tax: number): string {
    const priceText = price.match(/\d+(\.\d+)?/)
    if (!priceText) {
        throw new Error(`No price found in ${price}`) 
    }

    const quantityValue = parseInt(quantity)
    const priceValue = parseFloat(priceText[0])

    const totalPrice = (priceValue * quantityValue) + tax

    return ("$ " + String(totalPrice))
}

export function extractNumber(value: string): string {
    const match = value.match(/\d+/)

    if (!match) {
        throw new Error(`No number found in ${value}`)
    }

    return match[0]
}