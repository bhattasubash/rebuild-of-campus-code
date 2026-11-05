import { mockStats } from '../../data/stats';
import { mockNotifications } from '../../data/notifications';
import StatsGrid from './StatsGrid';

interface OverviewViewProps {
  userName: string;
  onNavigateTab: (tab: string) => void;
}

export default function OverviewView({ userName, onNavigateTab }: OverviewViewProps) {
  return (
    <div className="mx-auto max-w-[1200px] space-y-6">
      {/* Top Banner Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#deded8] pb-6">
        <div>
          <span className="font-mono text-[9px] tracking-[1px] text-[#858580]">
            STUDENT WORKSPACE / LIVE
          </span>
          <h1 className="mt-1 font-inter text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-2px] text-[#111111]">
            WELCOME BACK, <span className="text-[#7665ff]">{userName.toUpperCase()}</span>.
          </h1>
          <p className="mt-1 text-[13px] text-[#4f4f4b]">
            Your CampusCode activity is loaded directly from the backend.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded border border-[#deded8] bg-white px-3 py-1.5 font-mono text-[10px]">
          <strong className="text-[#111111]">03</strong>
          <span className="text-[#858580]">LIVE DATA</span>
        </div>
      </div>

      {/* Hero Card */}
      <div className="flex flex-wrap items-center justify-between gap-6 rounded border border-[#deded8] bg-white p-7 shadow-sm">
        <div className="max-w-[650px] space-y-2">
          <span className="font-mono text-[9px] font-bold tracking-[1.5px] text-[#7665ff]">
            BUILD · LEARN · COLLABORATE
          </span>
          <h2 className="font-inter text-[26px] font-extrabold tracking-[-1px] text-[#111111]">
            ReBuild '26
          </h2>
          <p className="text-[13px] leading-relaxed text-[#555555]">
            Recreate it faithfully on Friday. Rebuild it beautifully on Saturday. Individual hackathon. Frontend only. Mock data fine.
          </p>
          <button
            onClick={() => onNavigateTab('My Events')}
            className="mt-3 inline-flex items-center gap-2 rounded bg-[#111111] px-5 py-2.5 font-inter text-[11px] font-bold text-white transition-all hover:bg-[#202020]"
          >
            OPEN EVENT <span className="font-mono text-[#a8e62e]">↗</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#7665ff] font-inter text-[20px] font-extrabold text-white">
            {userName.charAt(0).toUpperCase()}
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#deded8] bg-[#f7f7f4] font-mono text-[11px] font-bold text-[#111111]">
            CC
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <StatsGrid stats={mockStats} />

      {/* Two Column Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Panel 1: Current Activity */}
        <div className="rounded border border-[#deded8] bg-white p-6">
          <div className="mb-4 flex items-center justify-between border-b border-[#deded8] pb-3">
            <span className="font-mono text-[9px] tracking-[1px] text-[#858580]">01 / CURRENT ACTIVITY</span>
            <button
              onClick={() => onNavigateTab('Events')}
              className="font-mono text-[9px] text-[#7665ff] hover:underline"
            >
              VIEW EVENTS ↗
            </button>
          </div>
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-[#858580]">CC-RB26</span>
            <h3 className="font-inter text-[18px] font-bold text-[#111111]">ReBuild '26</h3>
            <div className="flex flex-wrap gap-2 pt-2 font-mono text-[9px]">
              <span className="rounded bg-[#82b91a]/15 px-2 py-0.5 text-[#82b91a]">LIVE</span>
              <span className="rounded bg-[#f0f0ec] px-2 py-0.5 text-[#555555]">ONLINE</span>
              <span className="rounded bg-[#f0f0ec] px-2 py-0.5 text-[#555555]">06 NOV 2026</span>
            </div>
          </div>
        </div>

        {/* Panel 2: Notifications */}
        <div className="rounded border border-[#deded8] bg-white p-6">
          <div className="mb-4 flex items-center justify-between border-b border-[#deded8] pb-3">
            <span className="font-mono text-[9px] tracking-[1px] text-[#858580]">02 / NOTIFICATIONS</span>
            <button
              onClick={() => onNavigateTab('Notifications')}
              className="font-mono text-[9px] text-[#7665ff] hover:underline"
            >
              OPEN ALL ↗
            </button>
          </div>
          <div className="space-y-3">
            {mockNotifications.map((n) => (
              <div key={n.id} className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#82b91a]" />
                <div className="flex-1">
                  <div className="font-inter text-[12px] font-bold text-[#111111]">{n.title}</div>
                  <div className="text-[11px] text-[#666666]">{n.body}</div>
                </div>
                <time className="font-mono text-[8px] text-[#aaaaaa]">{n.created_at}</time>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
