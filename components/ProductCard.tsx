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
                    <svg className="future-short-svg" viewBox="0 0 240 180" aria-hidden="true">
                        <path
                            d="M35 25 L205 25 L198 137 Q196 157 178 158 L153 158 Q145 157 140 148 L120 116 L100 148 Q95 157 87 158 L62 158 Q44 157 42 137 Z"
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
