"use client";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
export default function Cart({
                                 onClose,
                             }: {
    onClose: () => void;
}) {
    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();
    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const freeShippingThreshold = 100;
    const remainingForFreeShipping = Math.max(
        freeShippingThreshold - subtotal,
        0
    );
    return (
        <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 right-0 z-50 flex h-screen w-full max-w-md flex-col bg-white p-8 shadow-2xl"
        >

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                    Carrito
                </h2>

                <button
                    onClick={onClose}
                    className="text-2xl hover:opacity-60"
                >
                    ✕
                </button>
            </div>

            {cart.length === 0 ? (
                <div className="flex flex-1 flex-col items-center justify-center text-center">
                    <p className="text-xl font-semibold">
                        Tu carrito está vacío.
                    </p>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
                        Descubre las prendas de DROP 01 y encuentra tu próxima pieza.
                    </p>

                    <button
                        type="button"
                        onClick={onClose}
                        className="mt-8 border border-black px-6 py-3 text-xs font-semibold uppercase tracking-widest transition hover:bg-black hover:text-white"
                    >
                        Seguir comprando
                    </button>
                    <a
                        href="/#contact"
                        onClick={onClose}
                        className="mt-4 text-xs font-semibold uppercase tracking-widest underline underline-offset-4"
                    >
                        Quiero enterarme del lanzamiento
                    </a>
                </div>
            ) : (
                <div className="space-y-4 overflow-y-auto pb-40">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-2xl bg-zinc-50 p-4"
                        >
                            <div className="flex gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-20 w-20 shrink-0 rounded-lg object-cover"
                                />

                                <div className="min-w-0 flex-1">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="min-w-0">
                                            <h3 className="font-semibold">{item.name}</h3>

                                            <p className="mt-1 text-sm text-gray-600">
                                                {item.price} €
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="shrink-0 text-xs uppercase tracking-wider text-gray-400 transition hover:text-black"
                                        >
                                            Eliminar
                                        </button>
                                    </div>

                                    <div className="mt-5 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-gray-500">
                    Cantidad
                </span>

                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 transition hover:bg-white"
                                            >
                                                −
                                            </button>

                                            <span className="w-4 text-center font-semibold">
                        {item.quantity}
                    </span>

                                            <button
                                                onClick={() => increaseQuantity(item.id)}
                                                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 transition hover:bg-white"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {cart.length > 0 && (
                <div className="absolute bottom-0 left-0 w-full border-t border-gray-200 bg-white p-8">
                    <div className="mb-3 flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span className="font-semibold">{subtotal} €</span>
                    </div>

                    <p className="mb-5 text-xs text-gray-500">
                        {remainingForFreeShipping === 0
                            ? "Tu pedido tiene envío gratuito."
                            : `Te faltan ${remainingForFreeShipping} € para conseguir envío gratuito.`}
                    </p>
                    <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-gray-200">
                        <div
                            className="h-full rounded-full bg-black transition-all duration-500"
                            style={{
                                width: `${Math.min(
                                    (subtotal / freeShippingThreshold) * 100,
                                    100
                                )}%`,
                            }}
                        />
                    </div>

                    <button
                        type="button"
                        disabled
                        className="w-full cursor-not-allowed bg-zinc-300 py-4 text-sm font-semibold uppercase tracking-widest text-zinc-600"
                    >
                        Próximamente
                    </button>

                    <p className="mt-3 text-center text-xs text-gray-500">
                        La primera colección estará disponible muy pronto.
                    </p>
                </div>
            )}

        </motion.div>
    );
}