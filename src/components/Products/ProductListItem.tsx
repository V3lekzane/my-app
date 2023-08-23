import React from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'
import { NavLink, useNavigate } from 'react-router-dom' // Import useNavigate
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'

type Props = {
    id: number
    title?: string
    description?: string
    type?: string
    image: string
    addProductToCart: (id: number, count: number) => void
}

const ProductListItem = ({
    id,
    title,
    description,
    type,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = React.useState<number>(1)
    const isLike = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const handleProductDetailsClick = () => {
        navigate(`/product/${id}`)
    }

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <Button
                    variant="outlined"
                    onClick={() => dispatch(toggleLike(id))}
                >
                    {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="product-img">
                    <img src={image} alt="logo" />
                </div>
                <div className="product-features">{type}</div>
                <h4 className="product-title">{title}</h4>
                <CardActions className="btn-wrap">
                    <Button
                        variant="outlined"
                        onClick={handleProductDetailsClick}
                    >
                        Детальніше
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
