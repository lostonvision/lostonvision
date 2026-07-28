"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Eye, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type KeyId = "shift" | "place" | "horizon";

const sceneFragments = [
    { id: "left", x: 22, y: 68 },
    { id: "middle", x: 58, y: 38 },
    { id: "right", x: 82, y: 58 },
];

const correctLandscape = ["sky", "horizon", "ocean", "stone"];
const landscapeNames = { sky: "CIELO", horizon: "HORIZONTE", ocean: "MAR", stone: "PIEDRA" };
const frameTargets = [
    { item: "cap", from: 1, to: 7 },
    { item: "tee", from: 0, to: 5 },
    { item: "short", from: 2, to: 6 },
    { item: "tag", from: 3, to: 8 },
];
const frameBase = ["tee", "cap", "short", "tag", "wall", "tee", "short", "tag", "wall"];

const keyInfo: Record<KeyId, { number: string; name: string; next: number }> = {
    shift: { number: "01", name: "SECOND LOOK", next: 2 },
    place: { number: "02", name: "THE PLACE", next: 3 },
    horizon: { number: "03", name: "THE HORIZON", next: 4 },
};

export default function TheSignal() {
    const [stage, setStage] = useState(0);
    const [keys, setKeys] = useState<KeyId[]>([]);
    const [reward, setReward] = useState<KeyId | null>(null);
    const [firstFrameVisible, setFirstFrameVisible] = useState(true);
    const [frameTargetIndex, setFrameTargetIndex] = useState(0);
    const [scenePointer, setScenePointer] = useState({ x: 50, y: 50 });
    const [foundFragments, setFoundFragments] = useState<string[]>([]);
    const [landscape, setLandscape] = useState(["ocean", "stone", "sky", "horizon"]);
    const [selectedLayer, setSelectedLayer] = useState<number | null>(null);
    const [insertedKeys, setInsertedKeys] = useState<KeyId[]>([]);
    const [doorOpen, setDoorOpen] = useState(false);
    const [doorOrigin, setDoorOrigin] = useState({ x: "50%", y: "50%" });
    const [message, setMessage] = useState("");
    const doorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (stage !== 1) return;
        setFirstFrameVisible(true);
        const timer = window.setTimeout(() => setFirstFrameVisible(false), 8000);
        return () => window.clearTimeout(timer);
    }, [stage]);

    useEffect(() => {
        if (!doorOpen) return;
        const timer = window.setTimeout(() => {
            window.location.assign("/drop-01");
        }, 3300);
        return () => window.clearTimeout(timer);
    }, [doorOpen]);

    const reset = () => {
        setStage(0);
        setKeys([]);
        setReward(null);
        setFirstFrameVisible(true);
        setScenePointer({ x: 50, y: 50 });
        setFoundFragments([]);
        setLandscape(["ocean", "stone", "sky", "horizon"]);
        setSelectedLayer(null);
        setInsertedKeys([]);
        setDoorOpen(false);
        setMessage("");
    };

    const showReward = (key: KeyId) => {
        setMessage("");
        setReward(key);
    };

    const claimReward = () => {
        if (!reward) return;
        setKeys((current) => [...current, reward]);
        setStage(keyInfo[reward].next);
        setReward(null);
    };

    const selectFrame = (index: number) => {
        if (index === frameTargets[frameTargetIndex].to) showReward("shift");
        else setMessage("No es ese. Vuelve a mirar toda la composición: algo cambió de lugar.");
    };

    const moveScene = (event: React.MouseEvent<HTMLDivElement>) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        setScenePointer({
            x: ((event.clientX - bounds.left) / bounds.width) * 100,
            y: ((event.clientY - bounds.top) / bounds.height) * 100,
        });
    };

    const collectFragment = (id: string) => {
        if (foundFragments.includes(id)) return;
        const next = [...foundFragments, id];
        setFoundFragments(next);
        if (next.length === sceneFragments.length) showReward("place");
    };

    const selectLayer = (index: number) => {
        if (selectedLayer === null) {
            setSelectedLayer(index);
            return;
        }

        if (selectedLayer === index) {
            setSelectedLayer(null);
            return;
        }

        const next = [...landscape];
        [next[selectedLayer], next[index]] = [next[index], next[selectedLayer]];
        setLandscape(next);
        setSelectedLayer(null);

        if (next.every((layer, layerIndex) => layer === correctLandscape[layerIndex])) showReward("horizon");
    };

    const insertKey = (key: KeyId) => {
        if (insertedKeys.includes(key)) return;
        const next = [...insertedKeys, key];
        setInsertedKeys(next);
        if (next.length === 3) {
            const bounds = doorRef.current?.getBoundingClientRect();
            if (bounds) setDoorOrigin({ x: `${bounds.left + bounds.width / 2}px`, y: `${bounds.top + bounds.height / 2}px` });
            setDoorOpen(true);
        }
    };

    const renderKey = (key: KeyId, small = false) => (
        <div className={`lov-key lov-key-${key} ${small ? "lov-key-small" : ""}`} aria-hidden="true">
            <div className="lov-key-head"><span /></div>
            <div className="lov-key-stem" />
            <div className="lov-key-teeth" />
        </div>
    );

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#07101b] text-white">
            <Image src="/images/hero-new.png" alt="" fill priority className="object-cover opacity-35 grayscale" />
            <div className="absolute inset-0 bg-[#07101b]/70" />
            <div className="signal-noise pointer-events-none absolute inset-0 opacity-40" />

            <header className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10">
                <Link href="/" className="text-sm font-semibold tracking-[0.28em] transition hover:opacity-60">LOSTONVISION</Link>
                <Link href="/" aria-label="Salir de la experiencia" className="transition hover:opacity-60"><X size={22} /></Link>
            </header>

            <section className="relative z-10 mx-auto flex min-h-[calc(100vh-76px)] max-w-6xl flex-col px-6 pb-10 pt-7 sm:px-10 sm:pt-12">
                <div className="flex items-center justify-between gap-5 text-[10px] font-medium tracking-[0.22em] text-white/55">
                    <span>DROP 01 / SECOND LOOK</span>
                    <span>{keys.length.toString().padStart(2, "0")} / 03 KEYS</span>
                </div>

                {keys.length > 0 && !reward && stage < 4 && <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2 rounded-sm border border-white/20 bg-[#07101b]/85 p-2 backdrop-blur-md">{keys.map((key) => <div key={key} className="flex h-10 w-10 items-center justify-center">{renderKey(key, true)}</div>)}</div>}

                <AnimatePresence mode="wait">
                    {stage === 0 && (
                        <motion.div key="intro" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="my-auto max-w-3xl">
                            <Eye className="mb-8 h-10 w-10 stroke-[1.2]" />
                            <p className="mb-5 text-xs tracking-[0.28em] text-white/55">THE SECOND LOOK</p>
                            <h1 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl">Hay cosas que solo existen cuando vuelves a mirar.</h1>
                            <p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">Tres lugares. Tres llaves. Una puerta al Drop 01. No busques rápido: busca lo que otros no se molestan en ver.</p>
                            <button type="button" onClick={() => { setFrameTargetIndex((current) => (current + 1 + Math.floor(Math.random() * (frameTargets.length - 1))) % frameTargets.length); setStage(1); }} className="mt-10 inline-flex items-center gap-3 border border-white px-6 py-4 text-xs font-semibold tracking-[0.2em] transition hover:bg-white hover:text-black">ENTRAR <ArrowRight size={16} /></button>
                        </motion.div>
                    )}

                    {stage === 1 && (
                        <motion.div key="frame" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} className="my-auto max-w-3xl">
                            <p className="text-xs tracking-[0.28em] text-white/50">PLACE 01 / THE FRAME</p>
                            <h1 className="mt-6 text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl">El objeto no cambia. Tu forma de mirar sí.</h1>
                            <p className="mt-6 max-w-xl text-base leading-7 text-white/65">Tienes tiempo. Observa toda la composición y espera a que el frame cambie.</p>
                            <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
                                {Array.from({ length: 9 }, (_, index) => {
                                    const target = frameTargets[frameTargetIndex];
                                    const targetPosition = firstFrameVisible ? target.from : target.to;
                                    const item = index === targetPosition ? target.item : (index === target.from || index === target.to ? "wall" : frameBase[index]);
                                    return <button key={index} type="button" onClick={() => !firstFrameVisible && selectFrame(index)} disabled={firstFrameVisible} aria-label={`Elemento ${index + 1}`} className="relative flex aspect-square items-center justify-center border border-white/25 bg-black/20 transition enabled:hover:border-white enabled:hover:bg-white/10 disabled:cursor-default"><span className={`frame-object frame-${item}`} /></button>;
                                })}
                            </div>
                            <p className="mt-5 text-[10px] tracking-[0.18em] text-white/45">{firstFrameVisible ? "EL FRAME CAMBIARÁ EN 8 SEGUNDOS" : "¿QUÉ OBJETO CAMBIÓ DE LUGAR?"}</p>
                            {message && <p className="mt-6 text-sm text-white/65">{message}</p>}
                        </motion.div>
                    )}

                    {stage === 2 && (
                        <motion.div key="place" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} className="my-auto max-w-4xl">
                            <p className="text-xs tracking-[0.28em] text-white/50">PLACE 02 / THE SHORE</p>
                            <h1 className="mt-6 text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl">No todo está a la vista. Muévete por el lugar.</h1>
                            <p className="mt-6 max-w-xl text-base leading-7 text-white/65">Pasa el ratón sobre el paisaje. El aire se moverá y dejará ver tres fragmentos. Encuéntralos.</p>
                            <div onMouseMove={moveScene} className="second-look-scene relative mt-10 h-[360px] overflow-hidden border border-white/25 bg-[#08131e] sm:h-[430px]">
                                <Image src="/images/second-look-place.png" alt="Lugar oculto del Drop 01" fill className="object-cover" />
                                <div className="scene-veil scene-veil-one" style={{ transform: `translate(${(scenePointer.x - 50) * -0.22}px, ${(scenePointer.y - 50) * -0.12}px)` }} />
                                <div className="scene-veil scene-veil-two" style={{ transform: `translate(${(scenePointer.x - 50) * 0.18}px, ${(scenePointer.y - 50) * -0.16}px)` }} />
                                <div className="scene-veil scene-veil-three" style={{ transform: `translate(${(scenePointer.x - 50) * -0.1}px, ${(scenePointer.y - 50) * 0.2}px)` }} />
                                {sceneFragments.map((fragment) => {
                                    const distance = Math.hypot(scenePointer.x - fragment.x, scenePointer.y - fragment.y);
                                    const visible = distance < 18 || foundFragments.includes(fragment.id);
                                    const found = foundFragments.includes(fragment.id);
                                    return <button key={fragment.id} type="button" onClick={() => collectFragment(fragment.id)} aria-label="Fragmento de llave" style={{ left: `${fragment.x}%`, top: `${fragment.y}%` }} className={`scene-fragment absolute z-10 -translate-x-1/2 -translate-y-1/2 ${visible ? "scene-fragment-visible" : ""} ${found ? "scene-fragment-found" : ""}`}>{found ? <span>✓</span> : <span className="scene-fragment-eye" />}</button>;
                                })}
                                <p className="absolute bottom-4 left-4 z-10 text-[9px] tracking-[0.18em] text-white/60">FRAGMENTS FOUND: {foundFragments.length} / 03</p>
                            </div>
                        </motion.div>
                    )}

                    {stage === 3 && (
                        <motion.div key="horizon" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} className="my-auto max-w-3xl">
                            <p className="text-xs tracking-[0.28em] text-white/50">PLACE 03 / THE HORIZON</p>
                            <h1 className="mt-6 text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl">Ordena el lugar antes de cruzarlo.</h1>
                            <p className="mt-6 max-w-xl text-base leading-7 text-white/65">No busques diferencias. Construye el paisaje desde el cielo hasta la piedra. Pulsa dos capas para intercambiarlas.</p>
                            <div className="mt-10 max-w-xl overflow-hidden border border-white/25">
                                {landscape.map((layer, index) => <button key={`${layer}-${index}`} type="button" onClick={() => selectLayer(index)} className={`landscape-layer landscape-${layer} flex h-20 w-full items-center justify-between px-5 text-left transition ${selectedLayer === index ? "ring-2 ring-inset ring-white" : "hover:brightness-125"}`}><span className="text-[10px] tracking-[0.2em] text-white/75">{landscapeNames[layer as keyof typeof landscapeNames]}</span><span className={`landscape-symbol landscape-symbol-${layer}`} /></button>)}
                            </div>
                        </motion.div>
                    )}

                    {stage === 4 && (
                        <motion.div key="door" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="my-auto max-w-4xl">
                            <p className="text-xs tracking-[0.28em] text-white/50">DROP 01 / THE DOOR</p>
                            <h1 className="mt-6 text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl">Tres llaves. Una segunda mirada.</h1>
                            <p className="mt-6 max-w-xl text-base leading-7 text-white/65">Inserta las tres llaves. La puerta no guarda una respuesta: guarda el lugar donde empieza el Drop.</p>
                            <div ref={doorRef} className={`drop-door relative mt-10 flex h-80 max-w-2xl items-center justify-center overflow-hidden border border-white/25 ${doorOpen ? "drop-door-open" : ""}`}>
                                <div className="door-frame">
                                    <div className="door-panel door-panel-left" />
                                    <div className="door-panel door-panel-right" />
                                    <div className="door-light" />
                                </div>
                                <div className="relative z-10 flex gap-5">
                                    {(["shift", "place", "horizon"] as KeyId[]).map((key) => <div key={key} className={`keyhole ${insertedKeys.includes(key) ? "keyhole-filled" : ""}`}>{insertedKeys.includes(key) ? renderKey(key, true) : <span />}</div>)}
                                </div>
                            </div>
                            {doorOpen && <div className="door-fullscreen-reveal" style={{ "--door-x": doorOrigin.x, "--door-y": doorOrigin.y } as React.CSSProperties} aria-hidden="true" />}
                            {!doorOpen && <div className="mt-7 flex flex-wrap gap-4">{keys.map((key) => <button key={key} type="button" onClick={() => insertKey(key)} disabled={insertedKeys.includes(key)} className="flex items-center gap-3 border border-white/30 px-4 py-3 transition hover:bg-white hover:text-black disabled:opacity-30">{renderKey(key, true)}<span className="text-[10px] tracking-[0.16em]">KEY {keyInfo[key].number}</span></button>)}</div>}
                            {doorOpen && <p className="mt-7 text-xs tracking-[0.22em] text-white/70">OPENING THE ARCHIVE…</p>}
                        </motion.div>
                    )}
                </AnimatePresence>

                {reward && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#05080d]/80 p-6 backdrop-blur-md">
                        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-sm border border-white/30 bg-[#101b24] p-8 text-center shadow-2xl">
                            <p className="text-[10px] tracking-[0.24em] text-white/55">KEY FOUND / {keyInfo[reward].number}</p>
                            <div className="my-8 flex justify-center">{renderKey(reward)}</div>
                            <h2 className="text-2xl font-medium tracking-[-0.04em]">{keyInfo[reward].name}</h2>
                            <p className="mt-3 text-sm leading-6 text-white/60">Guárdala. No abre este lugar, pero te permitirá abrir el siguiente.</p>
                            <button type="button" onClick={claimReward} className="mt-8 inline-flex items-center gap-3 border border-white px-5 py-3 text-xs font-semibold tracking-[0.18em] transition hover:bg-white hover:text-black">TOMAR LLAVE <ArrowRight size={15} /></button>
                        </motion.div>
                    </div>
                )}
                <p className="mt-auto pt-12 text-[10px] tracking-[0.24em] text-white/40">LOOK TWICE. KEEP MOVING.</p>
            </section>
        </main>
    );
}
