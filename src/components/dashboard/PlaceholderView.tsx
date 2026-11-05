interface PlaceholderViewProps {
  title: string;
}

export default function PlaceholderView({ title }: PlaceholderViewProps) {
  return (
    <div className="mx-auto max-w-[800px] pt-12">
      <div className="rounded border border-[#deded8] bg-white p-10 text-center shadow-sm">
        <span className="font-mono text-[9px] tracking-[1.5px] text-[#7665ff]">
          CAMPUSCODE / STUDENT ARENA
        </span>
        <h2 className="my-3 font-inter text-[32px] font-extrabold tracking-[-1px] text-[#111111]">
          {title}
        </h2>
        <div className="my-3 inline-block rounded bg-[#82b91a]/15 px-3 py-1 font-mono text-[9px] font-bold text-[#82b91a]">
          ACTIVE IN ROUND 2
        </div>
        <p className="mx-auto mt-2 max-w-[480px] text-[13px] leading-relaxed text-[#666666]">
          This feature is scheduled for the Round 2 Rebuild showcase. For Round 1, please explore the faithful recreation of the Overview, Events, and My Events pages.
        </p>
      </div>
    </div>
  );
}
