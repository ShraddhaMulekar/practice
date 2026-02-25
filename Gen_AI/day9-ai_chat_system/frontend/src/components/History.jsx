function History({ history = [] }) {
  if (!history.length) {
    return (
      <div className="flex h-full items-center justify-center text-[11px] text-slate-500">
        No history yet. Ask something in chat.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 overflow-y-auto pr-1 text-xs h-[44vh] ">
      {history.map((item, index) => (
        <button
          key={index}
          className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-2 py-2 text-left text-slate-200 hover:border-emerald-400/70 hover:bg-slate-900 transition"
        >
          <div className="line-clamp-2 break-words">{item}</div>
        </button>
      ))}
    </div>
  );
}

export default History;