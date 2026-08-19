type PreviewPiece = {
    id: string;
    pieceNumber: string;
    kind: "tee" | "short" | "cap";
};

type Props = {
    piece: PreviewPiece;
};

export default function ProductCard({ piece }: Props) {
    const silhouetteClass = {
        tee: "future-tee",
        short: "future-short",
        cap: "future-cap",
    }[piece.kind];

    return (
        <article className="group block">
            <div className="future-silhouette relative flex aspect-[3/4] items-center justify-center bg-[#181818]">
                {piece.kind === "short" ? (
                    <svg className="future-short-svg" viewBox="0 0 240 205" aria-hidden="true">
                        <path
                            d="M32 22 H208 L201 147 Q199 172 181 174 H151 Q144 173 139 164 L120 129 L101 164 Q96 173 89 174 H59 Q41 172 39 147 Z"
                            fill="#bfc0b8"
                        />
                    </svg>
                ) : (
                    <div className={`future-piece ${silhouetteClass} bg-[#d4d4ce]`} aria-hidden="true" />
                )}
                <div className="future-tape">PRÓXIMAMENTE / LOSTONVISION / DROP 01 / PRÓXIMAMENTE</div>
            </div>

            <div className="mt-4 flex items-center justify-between border-b border-black/20 pb-4">
                <h3 className="text-sm font-semibold tracking-[0.12em]">{piece.pieceNumber}</h3>
                <p className="text-[10px] tracking-[0.16em] text-black/50">PRÓXIMAMENTE</p>
            </div>
        </article>
    );
}
