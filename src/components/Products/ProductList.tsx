import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
import Valute from 'components/curbutton/Valute'
import { useStore } from 'context/Provider'
import { Description } from '@mui/icons-material'
import { useState } from 'react'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const ProductList: React.FC<Props> = ({ addProductToCart }) => {
    const { currency, setCurrency } = useStore()
    const [totalPrices, setTotalPrices] = useState<{ [key: string]: number }>(
        {}
    )

    const handleCurrencyChange = (newCurrency: string) => {
        setCurrency(newCurrency)
    }

    const updateTotalPrice = (currency: string, totalPrice: number) => {
        setTotalPrices((prevTotalPrices) => ({
            ...prevTotalPrices,
            [currency]: totalPrice,
        }))
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
                    ({
                        id,
                        title,
                        description,
                        price,
                        valute,
                        eur,
                        usd,
                        uah,
                        zlt,
                    }) => {
                        const convertedPrice =
                            currency === 'USD'
                                ? usd
                                : currency === 'EUR'
                                ? eur
                                : currency === 'UAH'
                                ? uah
                                : currency === 'ZLT'
                                ? zlt
                                : price

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
                                        const newTotalPrice =
                                            totalPrice + convertedPrice * count
                                        updateTotalPrice(
                                            currency,
                                            newTotalPrice
                                        )
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
