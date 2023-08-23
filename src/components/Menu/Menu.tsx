import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import './Menu.scss'

type Props = {}

const Menu = (props: Props) => {
    const [showSubMenu, setShowSubMenu] = useState(false)
    const productsLikeState = useAppSelector((state) => state.productsLikeState)
    const likedProductsCount = Object.values(productsLikeState).filter(
        (isLiked) => isLiked
    ).length

    const handleMenuMouseEnter = () => {
        setShowSubMenu(true)
    }

    const handleMenuMouseLeave = () => {
        setShowSubMenu(false)
    }

    return (
        <>
            <div
                className="menu-item categories-item"
                onMouseEnter={handleMenuMouseEnter}
                onMouseLeave={handleMenuMouseLeave}
            >
                Категорії
                {showSubMenu && (
                    <div
                        className="sub-menu"
                        onMouseLeave={handleMenuMouseLeave}
                    >
                        <NavLink to="/health" className="menu-item">
                            Здоров'я
                        </NavLink>
                        <NavLink to="/sport" className="menu-item">
                            Спорт
                        </NavLink>
                        <NavLink to="/recipes" className="menu-item">
                            Рецепти
                        </NavLink>
                    </div>
                )}
            </div>
            <NavLink to="/" className="menu-item">
                Головна
            </NavLink>
            <NavLink to="/liked" className="menu-item">
                Вподобанні ({likedProductsCount})
            </NavLink>
        </>
    )
}

export default Menu
