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
                            d="M35 25 Q120 12 205 25 L197 137 Q181 154 151 149 L120 104 L89 149 Q59 154 43 137 Z"
                            fill="#bfc0b8"
                        />
                        <path
                            d="M43 36 Q120 47 197 36"
                            fill="none"
                            stroke="rgba(0, 0, 0, 0.24)"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M76 52 Q91 70 101 72 M164 52 Q149 70 139 72"
                            fill="none"
                            stroke="rgba(0, 0, 0, 0.13)"
                            strokeWidth="3"
                            strokeLinecap="round"
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
