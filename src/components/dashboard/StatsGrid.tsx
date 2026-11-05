import { StudentStats } from '../../data/stats';

interface StatsGridProps {
  stats: StudentStats;
}

export default function StatsGrid({ stats }: StatsGridProps) {
  const items = [
    { label: 'REGISTERED', value: stats.registered },
    { label: 'ONGOING', value: stats.ongoing },
    { label: 'COMPLETED', value: stats.completed },
    { label: 'CERTIFICATES', value: stats.certificates },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col justify-between rounded border border-[#deded8] bg-white p-5 transition-all hover:border-[#cfcfc8] hover:shadow-sm"
        >
          <span className="font-mono text-[9px] tracking-[1px] text-[#858580]">
            {item.label}
          </span>
          <strong className="my-2 font-inter text-[32px] font-extrabold leading-none text-[#111111]">
            {String(item.value).padStart(2, '0')}
          </strong>
          <small className="font-mono text-[8px] text-[#aaaaaa]">FROM BACKEND</small>
        </div>
      ))}
    </div>
  );
}
