"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";
import { useContent } from "@/hooks/useContent";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

const GRADIENT = "linear-gradient(90deg, #89AACC, #4E85BF)";

export function TanyaAiButton() {
  const { chat } = useContent();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const idCounter = useRef(1);
  const nextId = () => `msg-${idCounter.current++}`;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  const stream = (text: string) => {
    const words = text.split(" ");
    setTyping(true);
    const id = nextId();
    setMessages((prev) => [...prev, { id, role: "assistant", text: "" }]);
    let i = 0;
    let acc = "";
    timerRef.current = window.setInterval(() => {
      if (i < words.length) {
        acc += (i === 0 ? "" : " ") + words[i];
        setMessages((prev) =>
          prev.map((m) => (m.id === id ? { ...m, text: acc } : m)),
        );
        i += 1;
      } else {
        if (timerRef.current) window.clearInterval(timerRef.current);
        setTyping(false);
      }
    }, 20);
  };

  const ask = (question: string) => {
    if (typing) return;
    setMessages((prev) => [
      ...prev,
      { id: nextId(), role: "user", text: question },
    ]);
    const normalized = question.toLowerCase().replace(/\?$/, "").trim();
    const match = chat.responses.find(
      (r) =>
        r.question.toLowerCase() === normalized ||
        r.question.toLowerCase() === question.toLowerCase(),
    );
    stream(match ? match.answer : chat.fallback);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || typing) return;
    setInput("");
    ask(text);
  };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            className="group fixed bottom-8 right-8 z-50 inline-flex items-center gap-2 rounded-full border border-stroke bg-surface/90 px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-white/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ background: GRADIENT }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ background: GRADIENT }}
              />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-text-primary">
              {chat.trigger}
            </span>
            <span
              className="absolute inset-[-1px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-40"
              style={{ background: GRADIENT, zIndex: -1 }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              role="dialog"
              aria-label={chat.title}
              className="relative flex h-[600px] max-h-[85vh] w-full max-w-[520px] flex-col overflow-hidden rounded-2xl border border-stroke bg-surface shadow-2xl"
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              style={{
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.05), 0 24px 64px rgba(0,0,0,0.6), 0 0 40px rgba(137,170,204,0.06)",
              }}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-stroke px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-8 w-8 shrink-0">
                    <div className="absolute inset-0 rounded-full" style={{ background: GRADIENT }} />
                    <div className="absolute inset-[1.5px] flex items-center justify-center rounded-full bg-bg">
                      <span className="font-display text-[11px] italic text-text-primary">AI</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">{chat.title}</h3>
                    <p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-muted">
                      <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      {chat.status}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden rounded border border-stroke px-1.5 py-0.5 text-[10px] uppercase tracking-widest text-muted sm:inline-flex">
                    Esc
                  </span>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label={chat.closeLabel}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-stroke text-muted transition-colors hover:border-white/20 hover:text-text-primary"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div
                data-lenis-prevent="true"
                className="flex-1 space-y-4 overflow-y-auto overscroll-none p-5 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                <div className="flex justify-start gap-2.5">
                  <div
                    className="mt-0.5 h-6 w-6 shrink-0 rounded-full"
                    style={{ background: GRADIENT }}
                  />
                  <div className="max-w-[80%] break-words rounded-2xl rounded-tl-sm border border-stroke bg-bg px-4 py-2.5 text-sm leading-relaxed text-muted">
                    {chat.initialMessage}
                  </div>
                </div>

                {messages.map((m) =>
                  m.role === "user" ? (
                    <div key={m.id} className="flex justify-end">
                      <div className="max-w-[80%] whitespace-pre-wrap rounded-2xl rounded-tr-sm border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-text-primary">
                        {m.text}
                      </div>
                    </div>
                  ) : (
                    <div key={m.id} className="flex justify-start gap-2.5">
                      <div
                        className="mt-0.5 h-6 w-6 shrink-0 rounded-full"
                        style={{ background: GRADIENT }}
                      />
                      <div className="max-w-[80%] break-words rounded-2xl rounded-tl-sm border border-stroke bg-bg px-4 py-2.5 text-sm leading-relaxed text-muted">
                        {m.text}
                      </div>
                    </div>
                  ),
                )}

                {messages.length === 0 && !typing && (
                  <div className="mt-3 flex flex-wrap justify-start gap-2 pl-8">
                    {chat.suggestedQuestions.map((question, i) => (
                      <motion.button
                        key={question}
                        type="button"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * i }}
                        onClick={() => ask(question)}
                        className="rounded-full border border-stroke px-3 py-1.5 text-left text-[11px] text-muted transition-all duration-200 hover:border-white/20 hover:text-text-primary"
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                )}

                {typing && (
                  <div className="flex justify-start gap-2.5">
                    <div
                      className="h-6 w-6 shrink-0 rounded-full"
                      style={{ background: GRADIENT }}
                    />
                    <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-stroke bg-bg px-4 py-3">
                      {[0, 150, 300].map((delay) => (
                        <motion.span
                          key={delay}
                          className="h-1.5 w-1.5 rounded-full bg-muted"
                          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: delay / 1000,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              <div className="shrink-0 border-t border-stroke bg-bg/50 px-4 py-3">
                <form
                  onSubmit={onSubmit}
                  className="flex items-center gap-2 rounded-xl border border-stroke bg-surface px-3 py-2 transition-colors focus-within:border-white/20"
                >
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={chat.placeholder}
                    aria-label={chat.placeholder}
                    className="flex-1 bg-transparent text-sm text-text-primary outline-none placeholder:text-muted/60"
                  />
                  <button
                    type="submit"
                    aria-label={chat.sendLabel}
                    disabled={typing}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white transition-opacity disabled:opacity-50"
                    style={{ background: GRADIENT }}
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
                <p className="mt-2 text-center text-[9px] leading-relaxed text-muted/70">
                  {chat.disclaimer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
