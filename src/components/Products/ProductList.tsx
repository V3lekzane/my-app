import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
import Valute from 'components/curbutton/Valute'
import { useStore } from 'context/Provider'
import { useState } from 'react'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const ProductList: React.FC<Props> = ({ addProductToCart }) => {
    const { currency, setCurrency } = useStore()
    const currencies = ['USD', 'EUR', 'UAH', 'ZLT']
    const [totalPrices, setTotalPrices] = useState<{ [key: string]: number }>(
        {}
    )

    const handleCurrencyChange = (newCurrency: string) => {
        setCurrency(newCurrency)
    }

    const updateTotalPrice = (productId: number, count: number) => {
        setTotalPrices((prevTotalPrices) => {
            const updatedPrices = { ...prevTotalPrices }
            const product = productsArray.find((p) => p.id === productId)

            if (product) {
                const { pricesInCurrencies } = product
                currencies.forEach((curr) => {
                    const convertedPrice = pricesInCurrencies[curr]
                    const totalForCurrency = updatedPrices[curr] || 0
                    updatedPrices[curr] =
                        totalForCurrency + convertedPrice * count
                })
            }

            return updatedPrices
        })
    }

    return (
        <>
            <Typography
                component="h2"
                variant="h3"
                align="center"
                sx={{
                    marginBottom: '30px',
                }}
            >
                Our shop page
            </Typography>
            <Valute onCurrencyChange={handleCurrencyChange} />
            <Grid container spacing={4}>
                {productsArray.map(
                    ({ id, title, description, price, valute }) => {
                        const product = productsArray.find((p) => p.id === id)
                        if (!product) return null

                        const { pricesInCurrencies } = product
                        const convertedPrice = pricesInCurrencies[currency]
                        const totalPrice = totalPrices[currency] || 0

                        return (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <ProductListItem
                                    id={id}
                                    title={title}
                                    description={description}
                                    price={convertedPrice}
                                    valute={currency}
                                    addProductToCart={(id, count) => {
                                        addProductToCart(id, count)
                                        updateTotalPrice(id, count)
                                    }}
                                />
                            </Grid>
                        )
                    }
                )}
            </Grid>
            <Typography variant="h5" align="center">
                Total: {totalPrices[currency]?.toFixed(2) || 0} {currency}
            </Typography>
        </>
    )
}

export default ProductList
