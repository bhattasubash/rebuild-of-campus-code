import { EventItem } from '../../data/events';

interface RegistrationCardProps {
  registration: EventItem;
}

export default function RegistrationCard({ registration }: RegistrationCardProps) {
  const isCompleted = registration.status === 'COMPLETED';

  return (
    <article className="flex flex-col justify-between rounded border border-[#deded8] bg-white p-6 transition-all hover:border-[#cfcfc8] hover:shadow-sm">
      <div>
        <div className="flex items-center justify-between border-b border-[#deded8] pb-3">
          <span className="font-mono text-[8px] tracking-[1px] text-[#858580]">REGISTRATION</span>
          <b className="font-mono text-[9px] text-[#111111]">
            {registration.registration_id || 'CONFIRMED'}
          </b>
        </div>

        <div className="my-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0f0ec] font-mono text-[11px] font-bold text-[#111111]">
            CC
          </div>
          <h2 className="font-inter text-[18px] font-bold text-[#111111]">{registration.title}</h2>
        </div>

        <div className="space-y-1.5 font-mono text-[10px] text-[#555555]">
          <div>
            STATUS: <strong className={isCompleted ? 'text-[#858580]' : 'text-[#82b91a]'}>{registration.status}</strong>
          </div>
          <div>
            TEAM: <strong>{registration.team_name || 'Individual'}</strong>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="mt-6 flex h-10 w-full items-center justify-center gap-1.5 rounded bg-[#111111] font-inter text-[11px] font-bold text-white transition-all hover:bg-[#202020]"
      >
        <span>{isCompleted ? 'VIEW RESULTS' : 'OPEN JOURNEY'}</span>
        <b className="font-mono text-[12px] text-[#a8e62e]">↗</b>
      </button>
    </article>
  );
}
