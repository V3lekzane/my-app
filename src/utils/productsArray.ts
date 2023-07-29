export type Product = {
    id: number
    title: string
    description: string
    price: number
    valute: string
    capacity: string
    pricesInCurrencies: { [key: string]: number }
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 12',
        description: 'This is iPhone 12...',
        valute: 'EUR',
        price: 750,
        capacity: 'phone',
        pricesInCurrencies: {
            USD: 1125,
            EUR: 750,
            UAH: 30000,
            ZLT: 3000,
        },
    },
    {
        id: 2,
        title: 'iPhone 8',
        description: 'This is iPhone 8...',
        valute: 'EUR',
        price: 850,
        capacity: 'phone',
        pricesInCurrencies: {
            USD: 1275,
            EUR: 850,
            UAH: 34000,
            ZLT: 3400,
        },
    },
    {
        id: 3,
        title: 'iPhone X',
        description: 'This is iPhone X...',
        valute: 'EUR',
        price: 1250,
        capacity: 'phone',
        pricesInCurrencies: {
            USD: 1875,
            EUR: 1250,
            UAH: 50000,
            ZLT: 5000,
        },
    },
]

export default productsArray
