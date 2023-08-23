import React from 'react'
import { Grid } from '@mui/material'
import ProductListItem from 'components/Products/ProductListItem'
import { useAppSelector } from 'redux/hooks'
import productsArray, { Product } from 'utils/productsArray'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const Sport = ({ addProductToCart }: Props) => {
    const productsLikeState = useAppSelector((state) => state.productsLikeState)

    const filteredProducts: Product[] = productsArray.filter(
        (product) => product.type === 'Спорт'
    )

    return (
        <Grid container spacing={2}>
            {filteredProducts.map((product: Product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <ProductListItem
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        type={product.type}
                        image={product.image}
                        addProductToCart={addProductToCart}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default Sport
