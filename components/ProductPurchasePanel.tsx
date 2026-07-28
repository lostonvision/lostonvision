"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import SizeSelector from "./SizeSelector";

type Props = {
    product: {
        id: string;
        name: string;
        price: number;
        image: string;
        sizes: string[];
    };
};

export default function ProductPurchasePanel({ product }: Props) {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [showSizeError, setShowSizeError] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        if (!selectedSize) {
            setShowSizeError(true);
            return;
        }

        addToCart({
            id: `${product.id}-${selectedSize}`,
            name: `${product.name} · Talla ${selectedSize}`,
            price: product.price,
            image: product.image,
        });
        setAddedToCart(true);

        setShowSizeError(false);
    };

    return (
        <div>
            <SizeSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSelect={(size) => {
                    setSelectedSize(size);
                    setShowSizeError(false);
                    setAddedToCart(false);
                }}
            />

            {showSizeError && (
                <p className="mt-3 text-sm text-red-600">
                    Selecciona una talla antes de añadir el producto.
                </p>
            )}

            <button
                type="button"
                onClick={handleAddToCart}
                className="mt-10 w-full rounded-lg bg-black py-4 text-white transition hover:opacity-90"
            >
                Añadir al carrito
            </button>
            {addedToCart && (
                <p className="mt-3 text-center text-sm text-green-700">
                    Producto añadido al carrito.
                </p>
            )}
            <div className="mt-8 space-y-3 border-t border-gray-200 pt-6 text-sm text-gray-600">
                <div className="flex justify-between gap-4">
                    <span>Envío</span>
                    <span className="text-right text-black">24–48 h laborables</span>
                </div>

                <div className="flex justify-between gap-4">
                    <span>Devoluciones</span>
                    <span className="text-right text-black">14 días desde la entrega</span>
                </div>

                <div className="flex justify-between gap-4">
                    <span>Pago seguro</span>
                    <span className="text-right text-black">Tarjeta, PayPal y Apple Pay</span>
                </div>
            </div>
        </div>
    );
}