import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function CollectionsPage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-black pt-32">
                <section className="px-8 pb-20 text-white">
                    <div className="mx-auto max-w-7xl">
                        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-gray-400">
                            LOSTONVISION presents
                        </p>

                        <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-8xl">
                            DROP 01
                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
                            La primera colección de LOSTONVISION. Piezas esenciales
                            creadas para formar parte de tu visión.
                        </p>
                    </div>
                </section>

                <Products showAll />
                <Footer />
            </main>
        </>
    );
}
