"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import NavCtaPair from "./NavCtaPair";
import {
  DEMO_PHONE_DISPLAY,
  PRIMARY_PHONE_DISPLAY,
} from "./cta";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: `Hi — Automagixx captures and converts inbound opportunities automatically. Fastest path: call or text ${PRIMARY_PHONE_DISPLAY}. Want to hear the system? Try the live demo at ${DEMO_PHONE_DISPLAY}. What kind of inbound volume are you handling right now?`,
    },
  ]);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, open]);

  useEffect(() => {
    if (open) return;
    const hasSeenTip = window.sessionStorage.getItem("chat_tip_seen");
    if (hasSeenTip) return;

    setShowTip(true);
    const timer = window.setTimeout(() => {
      setShowTip(false);
      window.sessionStorage.setItem("chat_tip_seen", "1");
    }, 7000);

    return () => window.clearTimeout(timer);
  }, [open]);

  const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  async function send() {
    const text = input.trim();
    if (!text) return;

    setInput("");
    setIsLoading(true);

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = (await res.json()) as { reply?: string };
      const reply =
        data.reply ??
        `Sorry — I couldn’t respond right now. Call or text ${PRIMARY_PHONE_DISPLAY}. For the live demo, call ${DEMO_PHONE_DISPLAY}.`;

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Something went wrong. Call or text ${PRIMARY_PHONE_DISPLAY} — or try the demo at ${DEMO_PHONE_DISPLAY}.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div aria-live="polite">
      {open ? (
        <div className="fixed bottom-6 right-6 z-[9999] w-[360px] max-w-[calc(100vw-24px)]">
          <div
            ref={panelRef}
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[min(520px,calc(100vh-120px))]"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
              <p className="text-[14px] font-semibold text-gray-900 tracking-tight">Automagixx</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-800 text-[13px] font-medium px-2 py-1 rounded-lg hover:bg-gray-100"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={`${i}-${m.role}`}
                  className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
                >
                  <div
                    className={
                      m.role === "user"
                        ? "bg-emerald-600 text-white px-3 py-2 rounded-2xl text-[13px] leading-relaxed max-w-[85%]"
                        : "bg-white border border-gray-200 text-gray-900 px-3 py-2 rounded-2xl text-[13px] leading-relaxed max-w-[85%]"
                    }
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <div className="px-4 py-3 border-t border-gray-200">
              <div className="mb-3">
                <NavCtaPair compact showDemo showGuarantee={false} primaryLabel="hero" className="w-full" />
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!canSend) return;
                  void send();
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a quick question…"
                  className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-[13px] text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <button
                  type="submit"
                  disabled={!canSend}
                  className="bg-gray-900 text-white px-3 py-2 rounded-xl text-[13px] font-medium hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}

      {showTip && !open ? (
        <div className="fixed bottom-[5.5rem] right-6 z-[9998] max-w-[220px] rounded-xl bg-gray-900 text-white text-[12px] px-3 py-2 shadow-lg">
          Questions? Tap to chat — or call us directly.
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-[9999] h-14 w-14 rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 hover:scale-105 transition-all flex items-center justify-center text-[22px] font-light"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? "×" : "💬"}
      </button>
    </div>
  );
}
