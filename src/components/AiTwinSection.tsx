"use client";

import { useState, type FormEvent } from "react";
import { Send, Sparkles } from "lucide-react";
import { aiTwin } from "@/lib/content";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { sendMessage, receiveMessage, setInput } from "@/store/chatSlice";
import { SectionHeading } from "@/components/SectionHeading";

export function AiTwinSection() {
  const dispatch = useAppDispatch();
  const messages = useAppSelector((s) => s.chat.messages);
  const input = useAppSelector((s) => s.chat.input);
  const [pending, setPending] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || pending) return;
    dispatch(sendMessage(text));
    setPending(true);
    window.setTimeout(() => {
      dispatch(
        receiveMessage(
          "Terima kasih atas pertanyaannya! Ini demo AI Twin. Di situs asli, jawaban dihasilkan dari sistem RAG berbasis pengalaman dan proyek Aditya.",
        ),
      );
      setPending(false);
    }, 900);
  };

  return (
    <section
      id="ai-twin"
      className="relative overflow-hidden bg-bg py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow={aiTwin.eyebrow}>
            {aiTwin.heading}
          </SectionHeading>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
            {aiTwin.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {aiTwin.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-stroke bg-surface/60 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-2xl border border-stroke bg-surface/60 backdrop-blur-sm">
          <div className="flex items-center gap-3 border-b border-stroke px-5 py-4">
            <span className="relative flex size-9 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Sparkles className="size-4" />
              <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-surface bg-emerald-400" />
            </span>
            <div>
              <p className="text-sm font-semibold text-text">AI Twin Aditya</p>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-emerald-400">
                Online
              </p>
            </div>
          </div>

          <div className="flex h-[280px] flex-col gap-4 overflow-y-auto px-5 py-5 no-scrollbar">
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-accent/20 px-4 py-2.5 text-sm text-text"
                    : "mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-surface-2 px-4 py-2.5 text-sm text-muted"
                }
              >
                {m.text}
              </div>
            ))}
            {pending && (
              <div className="mr-auto flex gap-1 rounded-2xl rounded-bl-sm bg-surface-2 px-4 py-3">
                <span className="size-1.5 animate-pulse-dot rounded-full bg-muted" />
                <span className="size-1.5 animate-pulse-dot rounded-full bg-muted [animation-delay:0.2s]" />
                <span className="size-1.5 animate-pulse-dot rounded-full bg-muted [animation-delay:0.4s]" />
              </div>
            )}
          </div>

          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 border-t border-stroke p-3"
          >
            <input
              value={input}
              onChange={(e) => dispatch(setInput(e.target.value))}
              placeholder="Tanyakan sesuatu..."
              className="flex-1 rounded-full border border-stroke bg-bg px-4 py-2.5 text-sm text-text outline-none placeholder:text-faint focus:border-accent/50"
            />
            <button
              type="submit"
              aria-label="Kirim"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-bg transition-transform hover:scale-105 disabled:opacity-50"
              disabled={pending}
            >
              <Send className="size-4" />
            </button>
          </form>

          <p className="border-t border-stroke px-5 py-3 text-[10px] leading-relaxed text-faint">
            {aiTwin.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
