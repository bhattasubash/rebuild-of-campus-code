import { Link } from 'react-router-dom';

interface DashboardSidebarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  userName: string;
  onLogout: () => void;
}

const NAV_ITEMS = [
  { name: 'Overview', icon: '▦' },
  { name: 'Events', icon: '◈' },
  { name: 'My Events', icon: '◉' },
  { name: 'HackMate AI', icon: '✦', isAi: true },
  { name: 'IdeaCheck AI', icon: '✦' },
  { name: 'Certificates', icon: '◩' },
  { name: 'Digital Card', icon: '▤' },
  { name: 'RuleBot AI', icon: '✦', isAi: true },
  { name: 'Student Guide', icon: '◪' },
  { name: 'Official Communication', icon: '✉' },
  { name: 'Notifications', icon: '🔔' },
  { name: 'Help & Support', icon: '?' },
  { name: 'Profile', icon: '👤' },
];

export default function DashboardSidebar({
  activeTab,
  onSelectTab,
  userName,
  onLogout,
}: DashboardSidebarProps) {
  return (
    <aside className="sticky top-0 flex h-screen w-[260px] min-w-[260px] flex-col border-r border-[#deded8] bg-[#f7f7f4f5] p-5 shadow-[8px_0_30px_rgba(0,0,0,0.02)]">
      {/* Brand */}
      <Link to="/" className="flex items-center gap-2">
        <img src="/campuscode-logo.png" alt="CampusCode" className="h-8 w-auto object-contain" />
      </Link>
      <span className="mt-1 font-mono text-[8px] tracking-[1px] text-[#858580]">
        HACKATHON ARENA
      </span>

      <div className="mt-6 mb-2 font-mono text-[9px] tracking-[1px] text-[#858580]">
        WORKSPACE
      </div>

      {/* Nav List */}
      <nav className="flex-1 space-y-1 overflow-y-auto pr-1">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              type="button"
              onClick={() => onSelectTab(item.name)}
              className={`flex w-full min-h-[38px] items-center gap-2.5 rounded-lg px-3 py-2 text-left font-inter text-[12px] font-bold transition-all ${
                isActive
                  ? 'bg-[#a7d94b] text-[#111111] shadow-[0_7px_22px_rgba(115,145,45,0.15)]'
                  : 'text-[#6f6f69] hover:bg-[#eeeeea] hover:text-[#111111] hover:translate-x-0.5'
              }`}
            >
              <span className="text-[13px]">{item.icon}</span>
              <span className="flex-1 truncate">{item.name}</span>
              {item.isAi && (
                <span className="font-mono text-[8px] font-black text-[#7665ff]">AI</span>
              )}
              {isActive && <b className="font-mono text-[12px]">→</b>}
            </button>
          );
        })}
      </nav>

      {/* Account Footer */}
      <div className="mt-auto border-t border-[#deded8] pt-4">
        <div className="mb-2 font-mono text-[8px] tracking-[1px] text-[#858580]">ACCOUNT</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] font-inter text-[12px] font-bold text-white">
              {userName.charAt(0).toUpperCase() || 'S'}
            </div>
            <div>
              <div className="font-inter text-[12px] font-bold text-[#111111]">{userName}</div>
              <div className="font-mono text-[8px] text-[#858580]">STUDENT</div>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="font-mono text-[9px] text-[#ff5252] hover:underline"
            title="Log out"
          >
            LOG OUT
          </button>
        </div>
      </div>
    </aside>
  );
}
