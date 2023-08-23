import React, { useEffect, createContext, useContext } from 'react'
import Header from 'Container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import Home from 'pages/Home'
import Liked from 'pages/Liked'
import { Container } from '@mui/material'

import Health from 'pages/Health'
import Sport from 'pages/Sport'
import Recipes from 'pages/Recipes'
import ProductDetails from 'pages/ProductDetails'

type ProductsInCart = {
    [id: number]: number
}

type Context = {
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

export const AppContext = createContext<Context | null>(null)

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => {
            const updatedState = { ...prevState }
            delete updatedState[id]
            return updatedState
        })
    }

    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }

    const contextValue: Context = {
        removeProductFromCart,
        changeProductQuantity,
    }

    const location = useLocation()

    useEffect(() => {}, [location.pathname])

    const { category } = useParams<{ category: string }>()

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Container sx={{ padding: '48px 0' }}>
                <AppContext.Provider value={contextValue}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home addProductToCart={addProductToCart} />
                            }
                        />
                        <Route path="/liked" element={<Liked />} />
                        <Route
                            path="/health"
                            element={
                                <Health addProductToCart={addProductToCart} />
                            }
                        />
                        <Route
                            path="/sport"
                            element={
                                <Sport addProductToCart={addProductToCart} />
                            }
                        />
                        <Route
                            path="/recipes"
                            element={
                                <Recipes addProductToCart={addProductToCart} />
                            }
                        />
                        <Route
                            path="/product/:productId"
                            element={<ProductDetails />}
                        />
                    </Routes>
                </AppContext.Provider>
            </Container>
        </StyledEngineProvider>
    )
}

export default App
