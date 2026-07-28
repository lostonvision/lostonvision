export default function About() {
    return (
        <section id="about" className="bg-black px-8 py-24 text-white">
            <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-end">
                <div>
                    <p className="mb-5 text-xs uppercase tracking-[0.25em] text-gray-400">
                        Nuestra visión
                    </p>

                    <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
                        Ropa para quienes no quieren pasar desapercibidos.
                    </h2>
                </div>

                <div className="max-w-md md:justify-self-end">
                    <p className="text-lg leading-8 text-gray-300">
                        LOSTONVISION nace de la cultura urbana, la creatividad y
                        las prendas que se convierten en parte de tu identidad.
                    </p>

                    <p className="mt-6 text-sm uppercase tracking-widest text-white">
                        Made for the visionaries.
                    </p>
                </div>
            </div>
        </section>
    );
}