import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-800/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 via-cyan-400 to-indigo-500 text-sm font-bold">
              AI
            </span>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                AI Chat System
              </h1>
              <p className="text-xs text-slate-400">
                Docs, chat, and history in one place
              </p>
            </div>
          </div>

          <nav className="flex gap-3 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-full px-3 py-1 transition ${
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/chat"
              className={({ isActive }) =>
                `rounded-full px-3 py-1 transition ${
                  isActive
                    ? "bg-emerald-400 text-slate-900"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              Chat
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Main routed content */}
      <main className="mx-auto flex w-full max-w-6xl flex-1 px-4 py-6">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-slate-800 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-[11px] text-slate-950">
          <span className="text-[12px]">AI CHAT SYSTEM  · Tailwind UI</span>
          <span className="opacity-80 text-[14px]">Powered by your documents</span>
        </div>
      </footer>
      
    </div>
  );
};

export default Layout
