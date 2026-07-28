export default function Contact() {
    return (
        <section id="contact" className="bg-white px-8 py-24 text-black">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-zinc-950 px-8 py-12 text-white md:px-14 md:py-16">
                <p className="mb-6 text-xs uppercase tracking-[0.25em] text-gray-400">
                    Contacto
                </p>

                <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
                    <div>
                        <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
                            Hablemos de lo que aún no existe.
                        </h2>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
                            Dudas, colaboraciones o una idea que merezca hacerse
                            realidad. Estamos a un mensaje de distancia.
                        </p>
                    </div>

                    <div className="grid gap-3">
                        <a
                            href="mailto:lostonvision@gmail.com"
                            className="group rounded-2xl border border-white/20 p-5 transition hover:bg-white hover:text-black"
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-500">
                                Email
                            </p>

                            <p className="mt-3 break-all text-lg font-medium">
                                lostonvision@gmail.com
                            </p>

                            <p className="mt-5 text-sm">
                                Escríbenos <span className="ml-1">↗</span>
                            </p>
                        </a>

                        <a
                            href="https://www.instagram.com/lostonvision/"
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-2xl border border-white/20 p-5 transition hover:bg-white hover:text-black"
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-500">
                                Instagram
                            </p>

                            <p className="mt-3 text-lg font-medium">
                                @lostonvision
                            </p>

                            <p className="mt-5 text-sm">
                                Síguenos <span className="ml-1">↗</span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}