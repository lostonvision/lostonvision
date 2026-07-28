"use client";
import { useState } from "react";

type Props = {
    sizes: string[];
    selectedSize: string | null;
    onSelect: (size: string) => void;
};

export default function SizeSelector({
                                         sizes,
                                         selectedSize,
                                         onSelect,
                                     }: Props) {
    const [showSizeGuide, setShowSizeGuide] = useState(false);
    return (
        <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-wider">
                    Selecciona tu talla
                </p>

                <button
                    type="button"
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-xs underline underline-offset-4"
                >
                    Guía de tallas
                </button>
            </div>
            {showSizeGuide && (
                <p className="mt-4 bg-gray-50 p-4 text-sm leading-6 text-gray-600">
                    Corte oversize. Si prefieres un ajuste más ceñido, elige una talla menos.
                    Si dudas entre dos tallas, recomendamos elegir la más grande.
                </p>
            )}

            <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                    <button
                        key={size}
                        type="button"
                        onClick={() => onSelect(size)}
                        className={`border py-3 text-sm font-medium transition ${
                            selectedSize === size
                                ? "border-black bg-black text-white"
                                : "border-gray-300 hover:border-black"
                        }`}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
}