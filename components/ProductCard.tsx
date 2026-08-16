import Image from "next/image";
import Link from "next/link";

type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
};

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    return (
        <Link href={`/products/${product.id}`} className="group block">
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-200">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                />
            </div>

            <div className="mt-4 flex items-center justify-between border-b border-black/20 pb-4">
                <h3 className="text-sm font-semibold tracking-[0.08em]">{product.name}</h3>
                <p className="text-sm">{product.price} EUR</p>
            </div>
        </Link>
    );
}
