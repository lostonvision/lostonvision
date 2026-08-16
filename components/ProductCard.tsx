type Product = {
    id: string;
    name: string;
};

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const pieceNumber = {
        hoodie: "PIEZA 01",
        tshirt: "PIEZA 02",
        pants: "PIEZA 03",
    }[product.id] ?? "PIEZA 00";

    const silhouetteClass = product.id === "pants" ? "future-short" : "future-tee";

    return (
        <article className="group block">
            <div className="future-silhouette relative flex aspect-[3/4] items-center justify-center bg-[#181818]">
                <div className={silhouetteClass} aria-hidden="true" />
                <div className="future-tape">PRÓXIMAMENTE / LOSTONVISION / DROP 01 / PRÓXIMAMENTE</div>
            </div>

            <div className="mt-4 flex items-center justify-between border-b border-black/20 pb-4">
                <h3 className="text-sm font-semibold tracking-[0.12em]">{pieceNumber}</h3>
                <p className="text-[10px] tracking-[0.16em] text-black/50">PRÓXIMAMENTE</p>
            </div>
        </article>
    );
}
