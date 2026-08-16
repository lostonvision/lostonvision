"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ variant = "dark" }: { variant?: "dark" | "light" }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isLight = variant === "light";
    const links = [
        { label: "Shop", href: "/#shop" },
        { label: "Collections", href: "/collections" },
        { label: "About", href: "/#about" },
        { label: "Contact", href: "/#contact" },
    ];

    return (
        <nav className={`fixed left-0 top-0 z-50 w-full ${isLight ? "bg-white/90 text-black backdrop-blur-md" : "bg-[#07101b]/45 text-white backdrop-blur-md"}`}>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
                <a href="/" className="text-sm font-semibold tracking-[0.25em] transition hover:opacity-60 sm:text-lg">LOSTONVISION</a>
                <div className="hidden items-center gap-9 text-[10px] font-medium uppercase tracking-[0.17em] md:flex">
                    {links.map((link) => <a key={link.href} href={link.href} className="transition hover:opacity-50">{link.label}</a>)}
                </div>
                <button type="button" onClick={() => setMobileMenuOpen((current) => !current)} aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"} className="md:hidden">
                    {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
            {mobileMenuOpen && <div className={`border-t px-6 py-6 md:hidden ${isLight ? "border-black/10 bg-white" : "border-white/10 bg-[#07101b]"}`}><div className="flex flex-col gap-5 text-xs font-medium uppercase tracking-[0.18em]">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.label}</a>)}</div></div>}
        </nav>
    );
}
