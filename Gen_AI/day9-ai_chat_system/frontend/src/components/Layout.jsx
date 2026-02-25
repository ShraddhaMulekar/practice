import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="border-b border-slate-800 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950/80 text-sm font-bold">
              AI
            </span>
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-slate-950">
                AI Chat System
              </h1>
              <p className="text-xs text-slate-900/80">
                Upload · Chat · History
              </p>
            </div>
          </div>

          <nav className="flex gap-3 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-full px-3 py-1 text-xs font-medium transition ${
                  isActive
                    ? "bg-slate-950 text-emerald-300"
                    : "bg-slate-900/40 text-slate-100 hover:bg-slate-900/70"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/chat"
              className={({ isActive }) =>
                `rounded-full px-3 py-1 text-xs font-medium transition ${
                  isActive
                    ? "bg-slate-950 text-cyan-300"
                    : "bg-slate-900/40 text-slate-100 hover:bg-slate-900/70"
                }`
              }
            >
              Chat
            </NavLink>
          </nav>
        </div>
      </header>

      {/* MAIN AREA */}
      <main className="mx-auto flex w-full max-w-6xl flex-1 px-4 py-6">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-slate-800 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-[11px] text-slate-950">
          <span>AI_CHAT_SYSTEM · Tailwind UI</span>
          <span className="opacity-80">Powered by your documents</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;