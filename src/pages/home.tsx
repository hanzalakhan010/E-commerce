import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../app/store"
import { ProductCard } from "../components/ProductCard"
import { useEffect } from "react"
import { loadProduts } from "../features/products"

export const Home = () => {
    const { products } = useSelector((state: RootState) => state.products)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(loadProduts())
    }, [])
    return (
        <>
            <div className="bg-[#F4F4F4]">
                <div className="mx-auto max-w-3xl px-3 py-5 text-center md:py-10">
                    <h1
                        className="text-3xl font-semibold leading-tight text-[#1E1E1E] md:text-[40px]"
                    >
                        All-in-One E-commerce App
                    </h1>
                    <h2 className="mt-5 text-lg font-medium text-[#1E1E1E]">
                        Discover premium products and enjoy shopping with us. Risk Free
                        Shopping!
                    </h2>
                </div>
            </div>
            {products.map((product) => (
                <ProductCard product={product} />
            ))}
        </>
    )
}