import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero-shell relative min-h-screen overflow-hidden">
            <Image src="/images/hero-pedestal-v1.png" alt="" fill className="hero-pedestal-background hidden object-cover sm:block" priority />
            <Image src="/images/hero-pedestal-mobile-v1.png" alt="" fill className="hero-pedestal-background-mobile block object-cover sm:hidden" priority />
            <div className="absolute inset-0 bg-black/30" />
            <div className="hero-pedestal-glow absolute inset-0" aria-hidden="true" />
            <div className="hero-grain absolute inset-0" aria-hidden="true" />
            <div className="hero-logo-stage absolute inset-x-0 top-[31%] z-[1] flex justify-center" aria-hidden="true">
                <Image
                    src="/images/lov-mark-transparent.png"
                    alt=""
                    width={620}
                    height={620}
                    className="hero-logo-spin h-auto w-[clamp(250px,34vw,560px)] mix-blend-screen"
                />
            </div>
            <div className="hero-pedestal-inscription absolute bottom-[9%] left-1/2 z-[2] w-[clamp(260px,33vw,460px)] -translate-x-1/2" aria-hidden="true">
                <svg className="hero-pedestal-wordmark hidden sm:block" viewBox="0 0 440 72" role="presentation">
                    <defs>
                        <linearGradient id="pedestal-cut" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#65747a" />
                            <stop offset="20%" stopColor="#405158" />
                            <stop offset="58%" stopColor="#0a141a" />
                            <stop offset="100%" stopColor="#25363e" />
                        </linearGradient>
                        <path id="pedestal-arc" d="M18 34 Q220 42 422 34" />
                    </defs>
                    <text className="hero-pedestal-arc-text hero-pedestal-cut-shadow">
                        <textPath href="#pedestal-arc" startOffset="50%" textAnchor="middle">LOSTONVISION</textPath>
                    </text>
                    <text className="hero-pedestal-arc-text hero-pedestal-cut-face">
                        <textPath href="#pedestal-arc" startOffset="50%" textAnchor="middle">LOSTONVISION</textPath>
                    </text>
                    <text className="hero-pedestal-arc-text hero-pedestal-cut-edge">
                        <textPath href="#pedestal-arc" startOffset="50%" textAnchor="middle">LOSTONVISION</textPath>
                    </text>
                </svg>
                <svg className="hero-pedestal-wordmark block sm:hidden" viewBox="0 0 440 72" role="presentation">
                    <defs>
                        <linearGradient id="pedestal-cut-mobile" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#65747a" />
                            <stop offset="20%" stopColor="#405158" />
                            <stop offset="58%" stopColor="#0a141a" />
                            <stop offset="100%" stopColor="#25363e" />
                        </linearGradient>
                        <path id="pedestal-arc-mobile" d="M18 32 Q220 45 422 32" />
                    </defs>
                    <text className="hero-pedestal-arc-text hero-pedestal-cut-shadow">
                        <textPath href="#pedestal-arc-mobile" startOffset="50%" textAnchor="middle">LOSTONVISION</textPath>
                    </text>
                    <text className="hero-pedestal-arc-text hero-pedestal-cut-face-mobile">
                        <textPath href="#pedestal-arc-mobile" startOffset="50%" textAnchor="middle">LOSTONVISION</textPath>
                    </text>
                    <text className="hero-pedestal-arc-text hero-pedestal-cut-edge">
                        <textPath href="#pedestal-arc-mobile" startOffset="50%" textAnchor="middle">LOSTONVISION</textPath>
                    </text>
                </svg>
                <span className="hero-pedestal-mark absolute -right-5 top-5" />
            </div>
            <div className="hero-scanlines absolute inset-0 opacity-15" />

            <p className="absolute left-6 top-28 z-10 text-[10px] font-medium tracking-[0.25em] text-white/65 sm:left-10">
                LOSTONVISION / DROP 01
            </p>

            <div className="hero-copy relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
                <p className="mb-6 text-xs tracking-[0.32em] text-white/65">LOSTONVISION PRESENTS</p>
                <h1 className="text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">LOSTONVISION</h1>
                <p className="mt-5 text-sm tracking-[0.18em] text-gray-300 sm:text-base">SEE DIFFERENT</p>
                <a href="/collections" className="mt-10 border border-white px-8 py-4 text-xs font-semibold tracking-[0.18em] transition hover:bg-white hover:text-black">
                    VER DROP 01
                </a>
            </div>

            <p className="absolute bottom-7 left-6 z-10 text-[10px] tracking-[0.24em] text-white/55 sm:left-10">DROP 01 / 2026</p>
        </section>
    );
}
