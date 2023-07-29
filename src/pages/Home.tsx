import React from 'react'
import ProductList from 'components/Products/ProductList'

type HomeProps = {
    addProductToCart: (id: number, count: number) => void
}

const Home: React.FC<HomeProps> = ({ addProductToCart }) => {
    return (
        <>
            <ProductList addProductToCart={addProductToCart} />
        </>
    )
}

export default Home
