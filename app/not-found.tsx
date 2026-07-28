import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-black px-8 text-center text-white">
            <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                    Error 404
                </p>

                <h1 className="mt-6 text-5xl font-semibold md:text-7xl">
                    Te has salido del mapa.
                </h1>

                <p className="mx-auto mt-6 max-w-md leading-7 text-gray-300">
                    La página que buscas no existe o ha cambiado de dirección.
                </p>

                <Link
                    href="/"
                    className="mt-10 inline-block border border-white px-7 py-4 text-xs font-semibold uppercase tracking-widest transition hover:bg-white hover:text-black"
                >
                    Volver al inicio
                </Link>
            </div>
        </main>
    );
}