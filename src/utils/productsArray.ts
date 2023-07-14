export type Product = {
    id: number
    title: string
    description: string
    price: number
    eur: number
    usd: number
    uah: number
    zlt: number
    valute: string
    capacity: string
}
const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 12',
        description: 'This is iPhone 12...',
        valute: 'EUR',
        price: 750,
        eur: 750,
        usd: 1125,
        uah: 30000,
        zlt: 3000,
        capacity: 'phone',
    },
    {
        id: 2,
        title: 'iPhone 8',
        description: 'This is iPhone 8...',
        valute: 'EUR',
        price: 850,
        eur: 850,
        usd: 1275,
        uah: 34000,
        zlt: 3400,
        capacity: 'phone',
    },
    {
        id: 3,
        title: 'iPhone X ',
        description: 'This is iPhone X... ',
        valute: 'EUR',
        price: 1250,
        eur: 1250,
        usd: 1875,
        uah: 50000,
        zlt: 5000,
        capacity: 'phone',
    },
]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )
export default productsArray
