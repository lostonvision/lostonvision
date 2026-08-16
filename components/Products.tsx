import ProductCard from "./ProductCard";

const dropPieces = [
    ...Array.from({ length: 7 }, (_, index) => ({ id: `tee-${index + 1}`, pieceNumber: `PIEZA ${String(index + 1).padStart(2, "0")}`, kind: "tee" as const })),
    ...Array.from({ length: 2 }, (_, index) => ({ id: `short-${index + 1}`, pieceNumber: `PIEZA ${String(index + 8).padStart(2, "0")}`, kind: "short" as const })),
    ...Array.from({ length: 3 }, (_, index) => ({ id: `cap-${index + 1}`, pieceNumber: `PIEZA ${String(index + 10).padStart(2, "0")}`, kind: "cap" as const })),
];

export default function Products({ showAll = false }: { showAll?: boolean }) {
    const visiblePieces = showAll ? dropPieces : [dropPieces[0], dropPieces[7], dropPieces[9]];

    return (
        <section id="shop" className="bg-[#e8e8e5] px-6 py-24 text-black sm:px-8">
            <div className="mx-auto mb-14 flex max-w-7xl flex-col gap-6 border-b border-black pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-xs font-medium tracking-[0.24em] text-black/50">{showAll ? "DROP 01 / 12 PIEZAS" : "DROP 01 / LOSTONVISION"}</p>
                    <h2 className="mt-4 text-5xl font-medium tracking-[-0.06em] sm:text-7xl">{showAll ? "EL DROP" : "PRÓXIMAMENTE"}</h2>
                </div>
                <p className="max-w-xs text-sm leading-6 text-black/60">
                    {showAll ? "Siete camisetas, dos pantalones cortos y tres gorras. El resto llegará después." : "Las piezas están en camino. Vuelve a mirar cuando llegue el momento."}
                </p>
            </div>

            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3 md:gap-8">
                {visiblePieces.map((piece) => <ProductCard key={piece.id} piece={piece} />)}
            </div>
        </section>
    );
}
