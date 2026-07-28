import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function Products() {
    return (
        <section id="shop" className="bg-[#e8e8e5] px-6 py-24 text-black sm:px-8">
            <div className="mx-auto mb-14 flex max-w-7xl flex-col gap-6 border-b border-black pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-xs font-medium tracking-[0.24em] text-black/50">DROP 01 / ARCHIVO TEMPORAL</p>
                    <h2 className="mt-4 text-5xl font-medium tracking-[-0.06em] sm:text-7xl">FUTURE OBJECTS</h2>
                </div>
                <p className="max-w-xs text-sm leading-6 text-black/60">
                    Las formas existen. Los nombres y las imágenes todavía no.
                </p>
            </div>

            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3 md:gap-8">
                {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
        </section>
    );
}
