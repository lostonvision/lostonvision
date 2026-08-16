export default function EarlyAccess() {
    return (
        <section id="early-access" className="bg-black px-6 py-24 text-white sm:px-8">
            <div className="mx-auto max-w-7xl">
                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/45">LOSTONVISION / DROP 01</p>
                <div className="grid gap-10 border-y border-white/25 py-10 md:grid-cols-2 md:items-end">
                    <div>
                        <h2 className="max-w-2xl text-4xl font-medium leading-[0.98] tracking-[-0.05em] md:text-6xl">
                            Hecho para<br />ver diferente.
                        </h2>
                        <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                            Conoce la primera colección de LOSTONVISION y descubre cada pieza a tu ritmo.
                        </p>
                    </div>
                    <div className="md:justify-self-end">
                        <a href="/collections" className="inline-block bg-white px-7 py-4 text-xs font-semibold uppercase tracking-widest text-black transition hover:bg-white/75">
                            VER COLECCIÓN →
                        </a>
                        <p className="mt-4 text-sm text-white/45">DROP 01 / LOSTONVISION</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
