interface DashboardTopNavProps {
  activeTab: string;
  userName: string;
  onRefresh: () => void;
}

export default function DashboardTopNav({
  activeTab,
  userName,
  onRefresh,
}: DashboardTopNavProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-[#deded8] bg-[#f7f7f4]/95 px-8 backdrop-blur-sm">
      <div className="flex items-center gap-2 font-mono text-[9px] tracking-[1px] text-[#858580]">
        <span>CAMPUSCODE</span>
        <span>/</span>
        <span>STUDENT</span>
        <span>/</span>
        <span className="font-bold text-[#111111]">{activeTab.toUpperCase()}</span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onRefresh}
          className="flex h-8 w-8 items-center justify-center rounded border border-[#deded8] bg-white font-mono text-[13px] text-[#555555] transition-all hover:border-[#111111] hover:text-[#111111]"
          title="Refresh current page"
        >
          ↻
        </button>

        <div className="flex items-center gap-2 rounded-full border border-[#deded8] bg-white px-3 py-1 font-mono text-[9px] text-[#111111]">
          <span className="h-2 w-2 rounded-full bg-[#82b91a]" />
          <span>{userName}</span>
        </div>
      </div>
    </header>
  );
}
