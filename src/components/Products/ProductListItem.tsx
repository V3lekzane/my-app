import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'
import { useState } from 'react'

type Props = {
    id: number
    title: string
    description: string
    valute: string
    price: number

    addProductToCart: (id: number, count: number) => void
}
export const ProductListItem = ({
    id,
    title,
    description,
    price,
    valute,
    addProductToCart,
}: Props) => {
    const [count] = useState<number>(1)
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <h4 className="product-title">{title}</h4>
                <div className="product-description">{description}</div>
                <div className="product-price">
                    {' '}
                    {valute} {price}
                </div>
                <CardActions className="btn-wrap">
                    <Button
                        variant="outlined"
                        onClick={() => addProductToCart(id, count)}
                    >
                        buy
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
