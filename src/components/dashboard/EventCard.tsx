import { useState } from 'react';
import { EventItem } from '../../data/events';

interface EventCardProps {
  event: EventItem;
}

export default function EventCard({ event }: EventCardProps) {
  const [isJoined, setIsJoined] = useState(event.is_registered || false);

  const handleJoin = () => {
    setIsJoined(true);
  };

  const getStatusBadge = () => {
    switch (event.status) {
      case 'LIVE':
        return 'bg-[#82b91a]/15 text-[#82b91a] border-[#82b91a]/40';
      case 'OPEN':
        return 'bg-[#7665ff]/15 text-[#7665ff] border-[#7665ff]/40';
      default:
        return 'bg-[#f0f0ec] text-[#858580] border-[#deded8]';
    }
  };

  return (
    <article className="flex flex-col justify-between rounded border border-[#deded8] bg-white p-6 transition-all hover:border-[#cfcfc8] hover:shadow-sm">
      <div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[8px] tracking-[1px] text-[#858580]">{event.category}</span>
          <span className={`rounded border px-2 py-0.5 font-mono text-[8px] ${getStatusBadge()}`}>
            {event.status}
          </span>
        </div>

        <h3 className="mt-3 font-inter text-[20px] font-bold text-[#111111]">{event.title}</h3>
        <p className="mt-2 text-[12px] leading-relaxed text-[#555555]">{event.description}</p>

        <div className="mt-4 flex flex-wrap gap-2 font-mono text-[9px] text-[#777777]">
          <span>{event.start_date}</span>
          <span>•</span>
          <span>{event.mode}</span>
        </div>
      </div>

      <div className="mt-6">
        {isJoined ? (
          <div className="flex h-10 w-full items-center justify-center rounded border border-[#82b91a]/40 bg-[#82b91a]/10 font-mono text-[10px] font-bold text-[#82b91a]">
            JOINED ✓
          </div>
        ) : (
          <button
            type="button"
            onClick={handleJoin}
            className="flex h-10 w-full items-center justify-center gap-1.5 rounded bg-[#111111] font-inter text-[11px] font-bold text-white transition-all hover:bg-[#202020]"
          >
            <span>JOIN EVENT</span>
            <b className="font-mono text-[12px] text-[#a8e62e]">↗</b>
          </button>
        )}
      </div>
    </article>
  );
}
