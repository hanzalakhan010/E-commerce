import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { type AppDispatch, type RootState } from "../app/store"
import { loadProduts } from "../features/products"
import { Loader } from "lucide-react"

export const ProductView = () => {
    const { id } = useParams()
    const { products, loading } = useSelector((state: RootState) => state.products)
    const product = products.find((p) => p.id == Number(id))
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        if (!products.length) {
            dispatch(loadProduts())
            console.log("products")
        }
    }, [products])
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
            {loading && <Loader className="animate-spin"></Loader>}
            <div className="container mx-auto max-w-6xl p-6">
                <div
                    className="flex flex-col overflow-hidden rounded-lg border border-green-200 bg-white lg:flex-row"
                >
                    {/* <!-- Product Image --> */}
                    <div className="lg:w-1/2">
                        <img
                            className="h-96 w-full object-cover"
                            src={product?.images[0]}
                            alt="Product Image"
                        />
                    </div>

                    {/* <!-- Product Info --> */}
                    <div className="p-6 lg:w-1/2">
                        <h2 className="mb-4 text-3xl font-bold text-gray-800">{product?.title}</h2>
                        <p className="mb-2 text-sm text-gray-500">Category: {product?.category}</p>

                        <p className="mb-6 text-gray-700">
                            {product?.description}
                        </p>

                        <p className="mb-6 text-2xl font-semibold text-gray-800">${product?.price}</p>

                        <button
                            className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div></>
    )

}