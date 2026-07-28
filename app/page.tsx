import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EarlyAccess from "@/components/EarlyAccess";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Products />
            <EarlyAccess />
            <About />
            <Contact />
            <Footer />
        </>
    );
}
