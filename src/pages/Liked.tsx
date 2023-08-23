import ProductListItem from 'components/Products/ProductListItem'
import { useAppSelector } from 'redux/hooks'
import { RootState } from 'redux/store'
import productsArray, { Product } from 'utils/productsArray'

const Liked = () => {
    const likedItems = useAppSelector((state: RootState) =>
        Object.keys(state.productsLikeState)
            .filter((id) => state.productsLikeState[parseInt(id)])
            .map((id) => parseInt(id))
    )

    return (
        <div>
            <h2
                style={{
                    textAlign: 'center',
                }}
            >
                Статті, що сподобалися
            </h2>
            <div>
                {likedItems.map((id) => (
                    <ProductListItem
                        key={id}
                        id={id}
                        title={productsArray[id - 1].title}
                        description={productsArray[id - 1].description}
                        type={productsArray[id - 1].type}
                        image={productsArray[id - 1].image}
                        addProductToCart={() => {}}
                    />
                ))}
            </div>
        </div>
    )
}

export default Liked
