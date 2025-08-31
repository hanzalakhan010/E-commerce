import { Link } from "react-router"
import { type Product } from "../features/products"

export const ProductCard = ({ product }: { product: Product }) => {

    return (
        <div className="boder-green-200 overflow-hidden rounded-lg border bg-white">
            <img
                className="h-48 w-full object-cover"
                src={product.images[0]}
                alt="Product 1"
            />
            <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    <Link to={`/${product.id}`}> {product.title}</Link>
                </h3>
                <p className="mb-4 text-gray-600">${product.price}</p>
                <button
                    className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                    Buy Now
                </button>
            </div>
        </div>
    )
}