export default function EarlyAccess() {
    return (
        <section id="early-access" className="bg-black px-6 py-24 text-white sm:px-8">
            <div className="mx-auto max-w-7xl">
                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/45">TRANSMISIÓN 01</p>
                <div className="grid gap-10 border-y border-white/25 py-10 md:grid-cols-2 md:items-end">
                    <div>
                        <h2 className="max-w-2xl text-4xl font-medium leading-[0.98] tracking-[-0.05em] md:text-6xl">
                            Antes del drop,<br />encuentra la señal.
                        </h2>
                        <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                            Tres decisiones. Ningún dato. Solo una pista de lo que está por llegar.
                        </p>
                    </div>
                    <div className="md:justify-self-end">
                        <a href="/the-vision" className="inline-block bg-white px-7 py-4 text-xs font-semibold uppercase tracking-widest text-black transition hover:bg-white/75">
                            ENTRAR EN THE SIGNAL →
                        </a>
                        <p className="mt-4 text-sm text-white/45">THE SIGNAL / DROP 01</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
