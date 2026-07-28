import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Eye } from "lucide-react";

type Piece = { code: string; type: "tee" | "pants" | "cap" };
const pieces: Piece[] = [
    { code: "01", type: "tee" }, { code: "02", type: "tee" }, { code: "03", type: "tee" }, { code: "04", type: "tee" },
    { code: "05", type: "tee" }, { code: "06", type: "tee" }, { code: "07", type: "tee" }, { code: "08", type: "pants" },
    { code: "09", type: "pants" }, { code: "10", type: "cap" }, { code: "11", type: "cap" }, { code: "12", type: "cap" },
];
const typeLabel = { tee: "T-SHIRT", pants: "SHORTS", cap: "CAP" };

export default function DropArchive() {
    return (
        <main className="min-h-screen bg-[#cdd4d1] text-[#101a22]">
            <header className="flex items-center justify-between border-b border-black/15 px-6 py-6 sm:px-10">
                <Link href="/the-vision" className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] transition hover:opacity-50"><ArrowLeft size={15} /> THE SECOND LOOK</Link>
                <Link href="/" className="text-sm font-semibold tracking-[0.28em] transition hover:opacity-50">LOSTONVISION</Link>
            </header>

            <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-10 sm:pt-14">
                <div className="relative min-h-[420px] overflow-hidden bg-[#0a1720] text-white sm:min-h-[500px]">
                    <Image src="/images/second-look-place.png" alt="El lugar del Drop 01" fill priority className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111a]/90 via-[#07111a]/20 to-[#07111a]/45" />
                    <div className="absolute inset-x-0 bottom-0 grid gap-8 p-7 sm:p-12 md:grid-cols-[1.4fr_0.6fr] md:items-end">
                        <div>
                            <p className="text-[10px] font-medium tracking-[0.26em] text-white/60">DROP 01 / THE PLACE BEHIND THE DOOR</p>
                            <h1 className="mt-5 text-5xl font-medium leading-[0.88] tracking-[-0.07em] sm:text-8xl">SECOND<br />LOOK</h1>
                        </div>
                        <p className="max-w-sm text-base leading-7 text-white/75">La primera mirada muestra una silueta. La segunda descubre por qué está ahí. El Drop 01 nace de ese segundo vistazo.</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/15 py-5 text-[10px] font-medium tracking-[0.2em] text-black/55"><span>12 OBJECTS / UNRELEASED</span><span>07 TEES · 02 SHORTS · 03 CAPS</span><span>STATUS: BECOMING</span></div>

                <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {pieces.map((piece) => (
                        <article key={piece.code} className="group overflow-hidden border border-black/15 bg-[#ddddD7]">
                            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#d4d4ce]">
                                <div className={`future-silhouette future-${piece.type}`} aria-hidden="true"><div className="future-tape">FUTURE / FUTURE / FUTURE / FUTURE</div></div>
                                <span className="absolute left-3 top-3 text-[9px] font-medium tracking-[0.18em] text-black/50">{typeLabel[piece.type]}</span>
                                <span className="absolute bottom-3 right-3 text-[10px] font-medium tracking-[0.2em]">OBJECT {piece.code}</span>
                            </div>
                            <div className="flex items-center justify-between border-t border-black/15 px-3 py-3"><span className="text-[9px] tracking-[0.17em] text-black/50">DETAILS OBSCURED</span><Eye size={14} className="text-black/45 transition group-hover:text-black" /></div>
                        </article>
                    ))}
                </div>

                <div className="mt-16 grid gap-6 border-y border-black py-8 md:grid-cols-2 md:items-center">
                    <p className="text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl">No buscamos llenar el armario. Buscamos vestir lo que otros no ven a la primera.</p>
                    <p className="text-sm leading-6 text-black/60 md:justify-self-end md:max-w-sm">Las piezas, los nombres y las historias aparecerán cuando estén listas. Por ahora, solo queda una pista: mira otra vez.</p>
                </div>
            </section>
        </main>
    );
}
