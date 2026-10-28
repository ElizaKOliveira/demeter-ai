import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });

const reasons = [
  {
    label: "Save time",
    text: "Get a look for any day in seconds, not minutes in front of the mirror.",
  },
  {
    label: "Wear more",
    text: "The pieces you forgot about finally get a place in your week.",
  },
  {
    label: "Travel lighter",
    text: "Plan outfits for a trip and pack only what you will actually wear.",
  },
];

export default function WhyUseIt() {
  return (
    <section
      id="why-use-it"
      className={`${geist.className} w-full bg-[#fffceb] px-6 py-28 text-[#323b21] md:px-12 md:py-40 select-none`}
    >
      <div className="hidden-scroll mx-auto max-w-7xl">
        <p className="inline-block border-b border-[#323b21] pb-1 text-sm uppercase tracking-wider">
          Why Demeter
        </p>

        <h2 className="mt-10 max-w-6xl text-4xl font-black leading-[1.05] tracking-tight text-[#323b21]/60 md:text-6xl xl:text-[5.5vw]">
          Stop staring at your closet.{" "}
          <span className="text-[#323b21]">
            See looks made from what you already own
          </span>
          , shaped by <span className="text-[#323b21]">your </span>
          <span className="text-[#323b21]">needs</span>.
        </h2>

        <ul className="mt-20 grid gap-10 md:mt-28 md:grid-cols-3 md:gap-8">
          {reasons.map((r) => (
            <li key={r.label}>
              <p className="text-sm font-bold uppercase tracking-wider">
                {r.label}
              </p>
              <p className="mt-3 max-w-xs text-base leading-relaxed text-[#323b21]/75">
                {r.text}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
