export default function Footer() {
    return (
        <footer className="bg-black px-8 py-10 text-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-xl font-bold tracking-[0.25em]">
                        LOSTONVISION
                    </p>

                    <p className="mt-3 text-sm text-gray-400">
                        Made for the visionaries.
                    </p>
                </div>

                <div className="flex gap-6 text-xs uppercase tracking-widest text-gray-300">
                    <a href="/#shop" className="transition hover:text-white">
                        Shop
                    </a>

                    <a href="/#about" className="transition hover:text-white">
                        About
                    </a>

                    <a href="/#contact" className="transition hover:text-white">
                        Contact
                    </a>
                </div>

                <p className="text-xs text-gray-500">
                    © {new Date().getFullYear()} LOSTONVISION
                </p>
            </div>
        </footer>
    );
}