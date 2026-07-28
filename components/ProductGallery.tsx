"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
    images: string[];
    productName: string;
};

export default function ProductGallery({ images, productName }: Props) {
    const [selectedImage, setSelectedImage] = useState(0);

    const showPreviousImage = () => {
        setSelectedImage((current) =>
            current === 0 ? images.length - 1 : current - 1
        );
    };

    const showNextImage = () => {
        setSelectedImage((current) =>
            current === images.length - 1 ? 0 : current + 1
        );
    };

    return (
        <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                <Image
                    src={images[selectedImage]}
                    alt={`${productName} - imagen ${selectedImage + 1}`}
                    fill
                    priority
                    className="object-cover"
                />

                {images.length > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={showPreviousImage}
                            aria-label="Ver foto anterior"
                            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black transition hover:bg-white"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            type="button"
                            onClick={showNextImage}
                            aria-label="Ver foto siguiente"
                            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black transition hover:bg-white"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </>
                )}
            </div>

            {images.length > 1 && (
                <div className="mt-3 flex gap-3">
                    {images.map((image, index) => (
                        <button
                            key={image}
                            type="button"
                            onClick={() => setSelectedImage(index)}
                            aria-label={`Ver foto ${index + 1}`}
                            className={`relative h-20 w-16 overflow-hidden rounded-md border-2 transition ${
                                selectedImage === index
                                    ? "border-black"
                                    : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                        >
                            <Image
                                src={image}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}