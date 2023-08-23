import React from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { useParams } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { toggleLike } from 'redux/likeReducer'
import { Product } from 'utils/productsArray'
import './ProductDetails.scss'
import Reviews from 'components/Reviews/Reviews'

const ProductDetails = () => {
    const { productId } = useParams<{ productId?: string }>()
    const products = useAppSelector((state) => state.products)
    const isLike = useAppSelector(
        (state) => state.productsLikeState[parseInt(productId || '0')]
    )
    const dispatch = useAppDispatch()

    const product: Product | undefined = products.find(
        (p) => p.id === parseInt(productId || '0')
    )

    if (!product) {
        return <div>Стаття не найдена</div>
    }

    return (
        <Card className="product" variant="elevation">
            <CardContent>
                <Button
                    variant="outlined"
                    onClick={() => dispatch(toggleLike(product.id))}
                >
                    {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="detail-img">
                    <img src={product.image} alt="logo" />
                </div>
                <div className="detail-features">Type: {product.type}</div>
                <div className="detail-description">{product.description}</div>

                <Reviews />
            </CardContent>
        </Card>
    )
}

export default ProductDetails
