export default function SectionMission() {
  return (
    <section id="community" className="relative mx-auto max-w-[1320px] px-6 lg:px-11 pt-10 md:pt-16 pb-16 md:pb-24 overflow-hidden">
      {/* Ambient Brand Gradients: Lime on left (5–8%), Purple on right (4–7%) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse 52% 52% at 5% 50%,
              rgba(168, 230, 46, 0.087) 0%,
              rgba(168, 230, 46, 0.025) 38%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 48% 48% at 94% 50%,
              rgba(118, 101, 255, 0.075) 0%,
              rgba(118, 101, 255, 0.025) 35%,
              transparent 70%
            )
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Left Column: Heading with editorial serif italic 'builders' */}
        <div>
          <h2 className="font-inter text-[clamp(36px,4.2vw,54px)] font-normal leading-[1.12] tracking-[-0.01em] text-[#111111]">
            Great ideas
            <br />
            need{' '}
            <span className="font-serif italic font-normal text-[#7665FF] text-[1.06em]">
              builders
            </span>
          </h2>
        </div>

        {/* Right Column: Refined Three Statements */}
        <div className="flex flex-col justify-center space-y-3.5 font-inter text-[clamp(22px,2.6vw,32px)] font-normal text-[#111111]">
          <div>
            Build with{' '}
            <span className="font-semibold text-[#7665FF]">developers.</span>
          </div>
          <div>
            Think with{' '}
            <span className="font-semibold text-[#82B91A]">designers.</span>
          </div>
          <div>
            Compete with{' '}
            <span className="relative inline-block font-bold text-[#111111]">
              builders.
              <span
                className="absolute left-0 bottom-0.5 h-[3px] w-full rounded-full bg-[#A8E62E]"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
