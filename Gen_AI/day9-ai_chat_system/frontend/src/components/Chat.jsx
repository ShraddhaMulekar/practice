import { useState } from "react";
import { SendHorizonal } from "lucide-react";
import Upload from "./Upload";
import History from "./History";
import Message from "./Message";
import { basic_url } from "../basic_url/basic_url";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);
  const [hasUploadedDoc, setHasUploadedDoc] = useState(false);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // require at least one successful document upload
    if (!hasUploadedDoc) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Please upload a document before starting the chat.",
        },
      ]);
      return;
    }

    const userMsg = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setHistory((prev) => [trimmed, ...prev]);
    setInput("");

    try {
      const res = await fetch(`${basic_url}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply || "No reply" },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Error talking to server." },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex w-full gap-4">
      {/* LEFT SIDEBAR: Upload + History */}
      <aside className="hidden md:flex md:w-72 flex-col gap-3">
        <Upload onUploadSuccess={() => setHasUploadedDoc(true)} />
        <div className="flex-1 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
          <p className="mb-2 text-[11px] font-semibold tracking-wide text-slate-300">
            History
          </p>
          <History history={history} />
        </div>
      </aside>

      {/* MOBILE SIDEBAR (stacked) */}
      <aside className="flex flex-col gap-3 md:hidden w-full max-w-xs">
        <Upload onUploadSuccess={() => setHasUploadedDoc(true)} />
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
          <p className="mb-2 text-[11px] font-semibold tracking-wide text-slate-300">
            History
          </p>
          <History history={history} />
        </div>
      </aside>

      {/* CHAT AREA */}
      <section className="flex-1 flex flex-col h-[75vh] rounded-2xl border border-slate-800 bg-slate-900/70 shadow-inner">
        {/* Messages area */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1">
          {messages.length === 0 ? (
            <div className="flex h-full items-center justify-center text-xs text-slate-500">
              Start chatting with your AI about the docs you upload.
            </div>
          ) : (
            messages.map((m, index) => (
              <Message key={index} role={m.role} text={m.text} />
            ))
          )}
        </div>

        {/* Input box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="border-t border-slate-800 bg-slate-900/90 px-3 py-2 rounded-2xl"
        >
          <div className="flex items-end gap-2">
            <textarea
              rows={1}
              className="flex-1 h-12 resize-none rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs leading-snug text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/60"
              placeholder="Ask something about your uploaded docs..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              type="submit"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 active:scale-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={!input.trim()}
            >
              <SendHorizonal className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-1 text-[10px] text-slate-500">
            Press Enter to send · Shift + Enter for new line
          </p>
        </form>
      </section>
    </div>
  );
}

export default Chat;