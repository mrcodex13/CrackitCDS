import { useState, useRef, useEffect } from "react";
import "./FloatingChatButton.jsx.css";

/* ── Static bot responses ────────────────────────────────────
   Keyword → response map. In future this gets replaced by an
   API call to an LLM / agentic backend.
   ─────────────────────────────────────────────────────────── */
const BOT_RESPONSES = [
  { keywords: ["hello", "hi", "hey"],
    reply: "Hey there! 👋 I'm your CDS study assistant. Ask me anything about this chapter — concepts, tips, or exam strategy!" },
  { keywords: ["tip", "tips", "strategy", "advice", "crack"],
    reply: "📌 CDS Tip: Focus on accuracy over speed. Negative marking applies, so skip questions you're unsure about. Revise PYQs — 40% of questions repeat patterns!" },
  { keywords: ["pyq", "previous", "year", "question", "past"],
    reply: "📜 PYQs are the best preparation resource! CDS repeats concept patterns every 2–3 years. Go through the last 10 years' papers for this chapter." },
  { keywords: ["time", "how long", "duration", "schedule"],
    reply: "⏱ Recommended: Spend 2–3 days per chapter. Day 1: Read concepts. Day 2: Solve PYQs. Day 3: Revise weak points and take a mini-test." },
  { keywords: ["formula", "rule", "shortcut"],
    reply: "🧮 Check the Notes tab → Formula / Rule Sheet for this chapter. Memorise the top 5 rules — they cover 80% of exam questions!" },
  { keywords: ["video", "lecture", "watch"],
    reply: "🎬 Video lectures for this chapter are coming soon! For now, check the Videos tab to see what's planned." },
  { keywords: ["note", "notes", "summary"],
    reply: "📝 Chapter Notes are being prepared! Head to the Notes tab. Once live, you'll find Summary, Key Concepts, and Formula Sheets there." },
  { keywords: ["thank", "thanks", "okay", "ok", "great"],
    reply: "You're welcome! 💪 Keep going — every chapter you complete brings you closer to CDS selection. All the best!" },
  { keywords: ["hard", "difficult", "tough", "struggle"],
    reply: "Don't worry! This chapter feels tough for everyone initially. Break it into topics, do 1 topic per session, and revisit after 48 hours. Spaced repetition works!" },
  { keywords: ["rank", "score", "cutoff", "marks"],
    reply: "📊 CDS cutoffs vary by year. Typically: OTA ~80–90, IMA/INA/AFA ~100–120 total. Consistency across all 3 papers matters most!" },
];

const FALLBACK = "Hmm, I don't have a specific answer for that yet 🤔. Try asking about tips, PYQs, time management, or this chapter's concepts. I'm still learning!";

function getBotReply(input) {
  const lower = input.toLowerCase();
  for (const { keywords, reply } of BOT_RESPONSES) {
    if (keywords.some((k) => lower.includes(k))) return reply;
  }
  return FALLBACK;
}

const INIT_MSG = {
  from: "bot",
  text: "Hi! 👋 I'm your CDS AI Study Assistant. Ask me anything about this chapter — concepts, exam tips, PYQs, or time management!",
};

/* ── Component ───────────────────────────────────────────── */
function FloatingChatButton({ chapterTitle = "this chapter" }) {
  const [open, setOpen]       = useState(false);
  const [messages, setMessages] = useState([INIT_MSG]);
  const [input, setInput]     = useState("");
  const [typing, setTyping]   = useState(false);
  const bottomRef             = useRef(null);

  /* scroll to latest message */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { from: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    /* simulate bot "thinking" delay */
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: getBotReply(trimmed) }]);
    }, 900);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── Chat Panel ──────────────────────────────────── */}
      <div className={`chat-panel ${open ? "chat-panel--open" : ""}`} aria-hidden={!open}>
        {/* header */}
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar">🤖</div>
            <div>
              <p className="chat-bot-name">CDS Study Assistant</p>
              <p className="chat-bot-status">
                <span className="chat-status-dot" /> Online
              </p>
            </div>
          </div>
          <button className="chat-close-btn" onClick={() => setOpen(false)} title="Close chat">✕</button>
        </div>

        {/* chapter context pill */}
        <div className="chat-context-pill">
          📖 Chatting about: <strong>{chapterTitle}</strong>
        </div>

        {/* messages */}
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-bubble chat-bubble--${msg.from}`}>
              {msg.from === "bot" && <span className="bubble-avatar">🤖</span>}
              <p>{msg.text}</p>
            </div>
          ))}
          {typing && (
            <div className="chat-bubble chat-bubble--bot">
              <span className="bubble-avatar">🤖</span>
              <p className="typing-indicator">
                <span /><span /><span />
              </p>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* input */}
        <div className="chat-input-area">
          <input
            className="chat-input"
            type="text"
            placeholder="Ask about this chapter…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            maxLength={300}
          />
          <button
            className="chat-send-btn"
            onClick={sendMessage}
            disabled={!input.trim()}
            title="Send"
          >
            ➤
          </button>
        </div>
      </div>

      {/* ── Floating Trigger Button ─────────────────────── */}
      <button
        className={`floating-chat-trigger ${open ? "floating-chat-trigger--open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        title={open ? "Close chat" : "Open AI Study Assistant"}
        aria-label="AI Study Chat"
      >
        {open ? "✕" : "🤖"}
      </button>
    </>
  );
}

export default FloatingChatButton;
