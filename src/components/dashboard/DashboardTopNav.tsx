import React from 'react';

interface DashboardTopNavProps {
  activeTab: string;
  userName?: string;
  onRefresh?: () => void;
  isSidebarCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export default function DashboardTopNav({
  activeTab = 'Events',
  userName = 'Sai',
}: DashboardTopNavProps) {
  return (
    <header className="sticky top-0 z-20 flex h-[52px] w-full items-center justify-between border-b border-[#111111]/[0.08] bg-[#F7F7F4] px-6 md:px-8 select-none">
      {/* Breadcrumb Left Side */}
      <div className="flex items-center gap-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-[#858580]">
          WORKSPACE
        </span>
        <span className="text-[#858580]/50 font-mono text-[11px]">/</span>
        <span className="font-inter text-[12px] font-semibold text-[#111111]">
          {activeTab}
        </span>
      </div>

      {/* Builder Badge Right Side */}
      <div className="flex items-center rounded-full border border-gray-200/90 bg-white px-3 py-1 shadow-2xs">
        <span className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-[#858580] mr-1.5">
          BUILDER :
        </span>
        <span className="font-inter text-[11px] font-semibold text-[#111111]">
          {userName || 'Sai'}
        </span>
      </div>
    </header>
  );
}
