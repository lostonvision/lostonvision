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
    const objectNumber = {
        hoodie: "OBJECT 01",
        tshirt: "OBJECT 02",
        pants: "OBJECT 03",
    }[product.id] ?? "OBJECT 00";

    return (
        <Link href="/the-vision" className="group block">
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-300">
                <Image
                    src={product.image}
                    alt="Future object - Drop 01"
                    fill
                    className="object-cover grayscale blur-[18px] transition duration-700 group-hover:scale-110 group-hover:blur-[14px]"
                />
                <div className="absolute inset-0 bg-black/45 transition group-hover:bg-black/35" />
                <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                    <span className="text-[10px] tracking-[0.22em]">IMAGE / UNAVAILABLE</span>
                    <div>
                        <p className="text-3xl font-medium tracking-[-0.05em]">FUTURE</p>
                        <p className="mt-1 text-[10px] tracking-[0.22em]">DROP 01 // {objectNumber}</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-b border-black/20 pb-4">
                <h3 className="text-sm font-semibold tracking-[0.14em]">{objectNumber}</h3>
                <p className="text-[10px] tracking-[0.16em] text-black/50">NOT RELEASED</p>
            </div>
        </Link>
    );
}
