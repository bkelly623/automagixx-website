import { NextResponse } from "next/server";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");

const OPTIONAL_SCHEDULE_URL =
  SITE_ORIGIN ? `${SITE_ORIGIN}/#book-call` : "/#book-call";

const PRIMARY_PHONE_DISPLAY = "(484) 673-7612";
const PRIMARY_TEL = "tel:4846737612";
const DEMO_PHONE_DISPLAY = "484-992-9411";
const DEMO_TEL = "tel:4849929411";

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
    "Automagixx helps service businesses stop missing calls, capture more leads, and book more jobs — profit recovery for contractors (plumbing, HVAC, electrical, and similar).",
    "",
    "PRIORITY ORDER (always follow this when suggesting next steps):",
    "1) PRIMARY: Invite the visitor to call the main line now — no forms.",
    `   Main number: ${PRIMARY_PHONE_DISPLAY} (use link format ${PRIMARY_TEL} only if the UI supports links; otherwise spell the number).`,
    "2) SECONDARY: If they want a quick taste of how it works, invite them to call the 30-second live demo line:",
    `   Demo number: ${DEMO_PHONE_DISPLAY} (${DEMO_TEL})`,
    "3) OPTIONAL / LAST RESORT: Only if they explicitly ask to schedule online or pick a calendar time, mention they can optionally use the scheduling section on the website:",
    `   Scheduling section: ${OPTIONAL_SCHEDULE_URL}`,
    "   Make clear phone is faster and preferred.",
    "",
    "Tone and style:",
    "- Sound like a contractor-friendly operations/revenue person — not a software demo.",
    "- Do NOT mention AI, LLMs, chatbots, 'automation platforms', or technical jargon.",
    "- Keep replies concise: about 3–6 short sentences unless they ask for detail.",
    "",
    "What to accomplish:",
    "- Help them see how missed calls, slow follow-up, and weak intake quietly lose jobs.",
    "- Ask 1–2 quick questions when useful (trade, rough call volume, what happens after hours).",
    "- Then guide them to call the main line, or the demo line if they want to hear it first.",
    "",
    "Never present calendar booking as the default. Never suggest forms before a phone call unless they insist on scheduling online.",
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
        reply: `The fastest way to get answers is to call us at ${PRIMARY_PHONE_DISPLAY} — no forms. If you want to hear how it works first, try the 30-second demo at ${DEMO_PHONE_DISPLAY}.`,
      });
    }

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
        reply: `I couldn’t respond just now — call ${PRIMARY_PHONE_DISPLAY} and we’ll walk through where jobs may be slipping away. For a quick listen, dial ${DEMO_PHONE_DISPLAY}.`,
      });
    }

    const data = (await openaiRes.json()) as OpenAIResponse;
    const reply = data?.choices?.[0]?.message?.content?.trim();

    return NextResponse.json({
      reply:
        reply ??
        `Give us a call at ${PRIMARY_PHONE_DISPLAY} — that’s the fastest way to see if we can help. Want to hear it first? Call ${DEMO_PHONE_DISPLAY} for the 30-second demo.`,
    });
  } catch {
    return NextResponse.json({
      reply: `Something went wrong on our end. Call ${PRIMARY_PHONE_DISPLAY} and we’ll help from there — or try ${DEMO_PHONE_DISPLAY} for the quick demo.`,
    });
  }
}
