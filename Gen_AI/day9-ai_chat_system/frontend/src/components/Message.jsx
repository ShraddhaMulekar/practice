function Message({ role = "user", text }) {
  const isUser = role === "user";

  return (
    <div
      className={`flex w-full mb-2 ${
        isUser ? "justify-end" : "justify-start"
      } text-sm`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-3 py-2 shadow-sm ${
          isUser
            ? "bg-emerald-500 text-slate-950"
            : "bg-slate-800 text-slate-100"
        }`}
      >
        <p className="text-[10px] uppercase tracking-wide opacity-70 mb-1">
          {isUser ? "You" : "AI"}
        </p>
        <p className="whitespace-pre-wrap break-words">{text}</p>
      </div>
    </div>
  );
}

export default Message;