import { useState } from 'react';
import { mockEvents } from '../../data/events';
import EventCard from './EventCard';

export default function EventsView() {
  const [filter, setFilter] = useState<'all' | 'hackathon' | 'quiz'>('all');

  const filteredEvents = mockEvents.filter((e) => {
    if (filter === 'all') return true;
    return e.event_type === filter;
  });

  return (
    <div className="mx-auto max-w-[1200px] space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#deded8] pb-6">
        <div>
          <span className="font-mono text-[9px] tracking-[1px] text-[#858580]">
            DISCOVER / BACKEND DATA
          </span>
          <h1 className="mt-1 font-inter text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-2px] text-[#111111]">
            EVENTS.
          </h1>
          <p className="mt-1 text-[13px] text-[#4f4f4b]">
            Explore CampusCode events — hackathons, quizzes, workshops — and join the ones you want.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded border border-[#deded8] bg-white px-3 py-1.5 font-mono text-[10px]">
          <strong className="text-[#111111]">{filteredEvents.length}</strong>
          <span className="text-[#858580]">AVAILABLE</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {[
          ['all', 'All events'],
          ['hackathon', 'Hackathons'],
          ['quiz', 'Quizzes'],
        ].map(([val, label]) => (
          <button
            key={val}
            onClick={() => setFilter(val as any)}
            className={`rounded px-4 py-1.5 font-mono text-[10px] tracking-[0.5px] transition-all ${
              filter === val
                ? 'bg-[#111111] font-bold text-white'
                : 'border border-[#deded8] bg-white text-[#555555] hover:border-[#111111]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
