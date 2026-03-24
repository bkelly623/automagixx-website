import { NextResponse } from "next/server";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");
const BOOKING_URL =
  SITE_ORIGIN ? `${SITE_ORIGIN}/#book-call` : "/#book-call";
const CTA_LABEL = "See Where You're Losing Jobs";
const CTA_SUBTEXT = "Free 10-minute call — no commitment";

function getOpenAiApiKey() {
  return (
    process.env.OPENAI_API_KEY ||
    process.env.OPENAI_KEY ||
    process.env.EXPO_PUBLIC_OPENAI_API_KEY ||
    process.env.NEXT_PUBLIC_OPENAI_API_KEY
  );
}

function buildSystemPrompt() {
  return [
    "You are the Automagixx customer service and lead-generation assistant.",
    "Automagixx is a profit recovery company for service businesses. We help stop missed calls and capture more jobs.",
    "Do NOT mention AI, LLMs, models, 'automation platforms', or technical jargon.",
    "Talk like a contractor-friendly sales/support agent.",
    "",
    "Core job-to-be-done:",
    "Help the visitor understand how missed calls and slow follow-up cause lost jobs, and encourage them to book a short call so we can show them where they're losing jobs.",
    "",
    "Always use this CTA when the visitor asks about booking, next steps, pricing, or readiness to talk:",
    `CTA: ${CTA_LABEL} (${CTA_SUBTEXT})`,
    `Booking link: ${BOOKING_URL}`,
    "",
    "If the user seems unsure, ask 1–2 quick questions about their business (service type, service area, and what happens to after-hours calls) and then offer the CTA.",
    "Keep responses concise (generally 3–6 sentences).",
  ].join("\n");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { messages?: ChatMessage[] };
    const messages = Array.isArray(body.messages) ? body.messages : [];

    const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
    const userText = lastUserMessage?.content?.trim() ?? "";

    if (!userText) {
      return NextResponse.json({ reply: "What can I help you with today?" });
    }

    const apiKey = getOpenAiApiKey();
    if (!apiKey) {
      return NextResponse.json({
        reply:
          "Chat isn’t configured right now. Please book a free 10-minute call — no commitment — and we’ll help you find where jobs are getting lost.",
      });
    }

    // Only send the most recent conversation to keep cost predictable.
    const recent = messages.slice(-10);

    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.4,
        messages: [
          { role: "system", content: buildSystemPrompt() },
          ...recent.map((m) => ({ role: m.role, content: m.content })),
        ],
      }),
    });

    type OpenAIResponse = {
      choices?: Array<{
        message?: { content?: string };
      }>;
    };

    if (!openaiRes.ok) {
      return NextResponse.json({
        reply:
          "I’m sorry — I couldn’t generate a response right now. Please book a free 10-minute call — no commitment — and we’ll help you capture more jobs.",
      });
    }

    const data = (await openaiRes.json()) as OpenAIResponse;
    const reply = data?.choices?.[0]?.message?.content?.trim();

    return NextResponse.json({
      reply:
        reply ??
        "I’m sorry — I couldn’t generate a response. If you’d like, book a free 10-minute call — no commitment — and we’ll help you capture more jobs.",
    });
  } catch {
    return NextResponse.json({
      reply:
        "Sorry — something went wrong. Book a free 10-minute call — no commitment — and we’ll help you capture more jobs.",
    });
  }
}

