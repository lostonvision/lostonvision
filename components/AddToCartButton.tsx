"use client";

import { useCart } from "@/context/CartContext";

type Props = {
    product: {
        id: string;
        name: string;
        price: string;
        image: string;
    };
};

export default function AddToCartButton({ product }: Props) {
    const { addToCart } = useCart();

    return (
        <button
            onClick={() => {
                console.log("Añadido al carrito");
                addToCart(product);
            }}
            className="mt-10 bg-black text-white py-4 rounded-lg hover:opacity-90 transition w-full"
        >
            Añadir al carrito
        </button>
    );
}