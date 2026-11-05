import { mockEvents } from '../../data/events';
import RegistrationCard from './RegistrationCard';

export default function MyEventsView() {
  const registeredEvents = mockEvents.filter((e) => e.is_registered);

  return (
    <div className="mx-auto max-w-[1200px] space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#deded8] pb-6">
        <div>
          <span className="font-mono text-[9px] tracking-[1px] text-[#858580]">
            MY ACTIVITY / BACKEND DATA
          </span>
          <h1 className="mt-1 font-inter text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-2px] text-[#111111]">
            MY EVENTS.
          </h1>
          <p className="mt-1 text-[13px] text-[#4f4f4b]">
            Every event you joined, in one place. Open one to see its rounds, team, results and certificates.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded border border-[#deded8] bg-white px-3 py-1.5 font-mono text-[10px]">
          <strong className="text-[#111111]">03</strong>
          <span className="text-[#858580]">LIVE DATA</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {registeredEvents.map((event) => (
          <RegistrationCard key={event.id} registration={event} />
        ))}
      </div>
    </div>
  );
}
