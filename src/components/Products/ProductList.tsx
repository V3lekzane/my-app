import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
import Valute from 'components/curbutton/Valute'
import { useStore } from 'context/Provider'
import { Description } from '@mui/icons-material'
import { useState, useEffect } from 'react'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const ProductList: React.FC<Props> = ({ addProductToCart }) => {
    const { currency, setCurrency } = useStore()
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(0) // Обнуляем totalPrice при изменении валюты
    }, [currency])

    const handleCurrencyChange = (newCurrency: string) => {
        setCurrency(newCurrency)
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
                                        setTotalPrice(
                                            (prevTotalPrice) =>
                                                prevTotalPrice +
                                                convertedPrice * count
                                        )
                                    }}
                                />
                            </Grid>
                        )
                    }
                )}
            </Grid>
            <Typography variant="h5" align="center">
                Total: {totalPrice.toFixed(2)} {currency}
            </Typography>
        </>
    )
}

export default ProductList
