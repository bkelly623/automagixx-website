'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import PrimaryCta from "./PrimaryCta";

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
      content:
        "Hi — I can help service businesses stop missing calls and capture more jobs. What kind of business are you in, and what happens when calls come in after hours?",
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
        "Sorry — I couldn’t respond right now. If you want, book a free 10-minute call and we’ll help you identify what’s leaking jobs.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry — something went wrong. Book a free 10-minute call — no commitment — and we’ll show you where your business is losing jobs.",
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
          <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <div>
                <div className="text-[14px] font-semibold text-gray-900">Quick question?</div>
                <div className="text-[12px] text-gray-500">Use the chat to capture more jobs.</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-800 px-2 py-1 rounded"
                aria-label="Close chat"
                type="button"
              >
                ✕
              </button>
            </div>

            <div
              ref={panelRef}
              className="px-4 py-3 max-h-[420px] overflow-auto bg-gray-50"
            >
              <div className="space-y-3">
                {messages.map((m, idx) => (
                  <div
                    key={`${m.role}-${idx}`}
                    className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
                  >
                    <div
                      className={
                        m.role === "user"
                          ? "bg-blue-600 text-white px-3 py-2 rounded-2xl text-[13px] leading-relaxed max-w-[85%]"
                          : "bg-white border border-gray-200 text-gray-900 px-3 py-2 rounded-2xl text-[13px] leading-relaxed max-w-[85%]"
                      }
                    >
                      {m.content}
                    </div>
                  </div>
                ))}

                <div ref={bottomRef} />
              </div>
            </div>

            <div className="px-4 py-3 border-t border-gray-200">
              <div className="mb-3">
                <PrimaryCta className="rounded-xl px-4 py-3 text-[14px]" />
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
                  placeholder="Ask about missed calls, scheduling, or booking…"
                  className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-[13px] outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  disabled={!canSend}
                  className="bg-gray-900 text-white px-3 py-2 rounded-xl text-[13px] font-medium hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                >
                  Send
                </button>
              </form>

              {isLoading ? (
                <div className="text-[12px] text-gray-500 mt-2">Thinking…</div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {!open && showTip ? (
        <div className="fixed bottom-[4.9rem] right-4 sm:right-5 z-[9998] bg-white text-gray-800 border border-gray-200 rounded-xl shadow-lg px-3 py-2 text-[12px] font-medium">
          Quick question? Chat now.
        </div>
      ) : null}

      {!open ? (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            setShowTip(false);
            window.sessionStorage.setItem("chat_tip_seen", "1");
          }}
          className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[9998] inline-flex items-center gap-2 bg-cyan-600 text-white rounded-full px-4 py-3 shadow-2xl ring-4 ring-white/80 hover:bg-cyan-700 transition-all text-[14px] font-semibold"
          aria-label="Open chat now"
        >
          <MessageCircle className="w-4 h-4" />
          Chat now
        </button>
      ) : null}
    </div>
  );
}

