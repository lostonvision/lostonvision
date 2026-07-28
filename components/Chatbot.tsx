"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const questions = [
    {
        question: "¿Cuándo sale DROP 01?",
        answer:
            "Estamos preparando el lanzamiento. Sigue nuestro Instagram para enterarte antes que nadie.",
    },
    {
        question: "¿Qué productos habrá?",
        answer:
            "DROP 01 incluirá camisetas, gorras y pantalones de LOSTONVISION.",
    },
    {
        question: "¿Puedo comprar ya?",
        answer:
            "Todavía no. La tienda abrirá cuando la primera colección esté lista.",
    },
    {
        question: "¿Dónde os puedo seguir?",
        answer:
            "Puedes seguirnos en Instagram: @lostonvision.",
    },
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [answer, setAnswer] = useState(
        "Hola, soy el asistente de LOSTONVISION. ¿En qué puedo ayudarte?"
    );

    return (
        <div className="fixed bottom-6 right-6 z-30">
            {isOpen && (
                <div className="mb-4 w-[calc(100vw-3rem)] max-w-sm overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">
                    <div className="flex items-center justify-between bg-black px-5 py-4 text-white">
                        <div>
                            <p className="font-semibold">LOSTONVISION</p>
                            <p className="text-xs text-zinc-400">
                                Asistente de pre-lanzamiento
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Cerrar asistente"
                            className="transition hover:opacity-60"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="p-5">
                        <div className="rounded-xl bg-zinc-100 p-4 text-sm leading-6 text-zinc-700">
                            {answer}
                        </div>

                        <p className="mb-3 mt-5 text-xs uppercase tracking-wider text-zinc-500">
                            Preguntas frecuentes
                        </p>

                        <div className="space-y-2">
                            {questions.map((item) => (
                                <button
                                    key={item.question}
                                    type="button"
                                    onClick={() => setAnswer(item.answer)}
                                    className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-left text-sm transition hover:border-black hover:bg-zinc-50"
                                >
                                    {item.question}
                                </button>
                            ))}
                        </div>
                        <a
                            href="https://www.instagram.com/lostonvision/"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 block text-center text-xs font-semibold uppercase tracking-widest underline underline-offset-4"
                        >
                            Seguir en Instagram ↗
                        </a>
                    </div>
                </div>
            )}

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={
                    isOpen
                        ? "Cerrar asistente de LOSTONVISION"
                        : "Abrir asistente de LOSTONVISION"
                }
                className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-xl transition hover:scale-105 hover:bg-zinc-800"
            >
                {isOpen ? <X size={23} /> : <MessageCircle size={23} />}
            </button>
        </div>
    );
}