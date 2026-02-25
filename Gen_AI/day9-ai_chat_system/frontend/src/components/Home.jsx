function Home() {
  const steps = [
    {
      title: "1. Upload Docs",
      desc: "Add PDFs, notes, and reference material into the system.",
    },
    {
      title: "2. AI Ingestion",
      desc: "We index, chunk, and understand your documents securely.",
    },
    {
      title: "3. Chat with AI",
      desc: "Ask natural questions over your private knowledge base.",
    },
    {
      title: "4. History & Recall",
      desc: "Revisit previous questions, answers, and threads instantly.",
    },
  ];

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-[#020617] via-[#0b1220] to-[#111827] p-8 shadow-2xl w-full">
        {/* soft gradient glows */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400 via-teal-300 to-sky-400 blur-3xl" />
          <div className="absolute -bottom-40 -right-10 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500 via-violet-400 to-cyan-400 blur-3xl" />
        </div>

        <div className="relative z-10 space-y-6 text-slate-100">
          <div>
            <p className="text-[16px] font-semibold uppercase tracking-[0.35em] text-emerald-300/80">
              AI CHAT SYSTEM
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Flow of your{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                AI Chat System
              </span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              A focused workspace where you can upload documents, talk to an AI
              that understands them, and revisit every important question in a
              clean history view.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4 mt-4">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4 text-sm backdrop-blur shadow-sm"
              >
                <p className="text-[11px] font-semibold text-emerald-300/90">
                  {step.title}
                </p>
                <p className="mt-2 text-slate-100">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-[11px] text-slate-200">
            <span className="rounded-full border border-emerald-400/50 bg-emerald-400/10 px-3 py-1">
              Tailwind-powered layout
            </span>
            <span className="rounded-full border border-cyan-400/50 bg-cyan-400/10 px-3 py-1">
              Doc-aware conversations
            </span>
            <span className="rounded-full border border-violet-400/50 bg-violet-400/10 px-3 py-1">
              Persistent chat history
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
