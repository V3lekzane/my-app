import React, { useState } from 'react'
import { Grid } from '@mui/material'
import ProductListItem from 'components/Products/ProductListItem'
import productsArray, { Product } from 'utils/productsArray'
import './Home.scss'
import arrowleft from 'assets/arrow-left.webp'
import arrowright from 'assets/arrow-right.webp'
type Props = {
    addProductToCart: (id: number, count: number) => void
}

const Home = ({ addProductToCart }: Props) => {
    const sliderProducts = productsArray.filter((product: Product) =>
        [1, 4, 7].includes(product.id)
    )

    const [currentProductIndex, setCurrentProductIndex] = useState(0)

    const handleNextProduct = () => {
        setCurrentProductIndex(
            (prevIndex) => (prevIndex + 1) % sliderProducts.length
        )
    }

    const handlePreviousProduct = () => {
        setCurrentProductIndex(
            (prevIndex) =>
                (prevIndex - 1 + sliderProducts.length) % sliderProducts.length
        )
    }

    return (
        <div className="home-container">
            <div className="slider-container">
                <button
                    className="slider-button previous"
                    onClick={handlePreviousProduct}
                >
                    <img src={arrowleft} alt="Previous" />
                </button>
                <div className="slider-content">
                    <div className="slider-product">
                        <ProductListItem
                            id={sliderProducts[currentProductIndex].id}
                            title={sliderProducts[currentProductIndex].title}
                            image={sliderProducts[currentProductIndex].image}
                            addProductToCart={addProductToCart}
                        />
                    </div>
                </div>
                <button
                    className="slider-button next"
                    onClick={handleNextProduct}
                >
                    <img src={arrowright} alt="Next" />
                </button>
            </div>

            <h2 className="text">Всі Статті</h2>
            <Grid container spacing={2}>
                {productsArray.map((product: Product) => (
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
        </div>
    )
}

export default Home
