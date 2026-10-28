"use client";

import { useState, useEffect } from "react";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });
const steps = [
  {
    id: "step-1",
    number: "01",
    title: "Create your account",
    description:
      "Sign up in a few moments and start building your digital wardrobe.",
    image: "/images/how-it-works/step-1.jpg",
    imageAlt: "Demeter sign up screen",
  },
  {
    id: "step-2",
    number: "02",
    title: "Add your pieces",
    description:
      "Upload photos of your clothes, shoes, and accessories so Demeter can match them.",
    image: "/images/how-it-works/step-1.jpg",
    imageAlt: "Wardrobe grid with uploaded pieces",
  },
  {
    id: "step-3",
    number: "03",
    title: "Pick a trip or event",
    description:
      "Tell Demeter where you are going or what you are dressing for.",
    image: "/images/how-it-works/step-3.png",
    imageAlt: "Destination and occasion selector",
  },
  {
    id: "step-4",
    number: "04",
    title: "Get your outfits",
    description:
      "Demeter combines the pieces you own into looks that fit your style and the moment.",
    image: "/images/how-it-works/step-4.png",
    imageAlt: "Suggested outfit made from wardrobe pieces",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
    );
    const hiddenElements = document.querySelectorAll(".hidden-scroll");
    hiddenElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);


  return (
    <section
      id="how-it-works"
      className={`${geist.className} w-full bg-[#323b21] px-6 py-24 text-[#fffceb] md:px-12 select-none`}
    >
      <div className="hidden-scroll mx-auto max-w-7xl">
        <header className="max-w-2xl">
          <h2 className="text-5xl font-black leading-none tracking-tight md:text-[5vw]">
            How it works
          </h2>
          <p className="mt-5 text-sm uppercase leading-relaxed tracking-wider text-[#fffceb]/75">
            Four steps from a closet full of clothes to an outfit for
            tomorrow.
          </p>
        </header>

        <div className="relative mt-16">
          <ol
            className="border-t border-[#fffceb]/15"
            onMouseLeave={() => setActive(null)}
          >
            {steps.map((step, i) => (
              <li
                key={step.id}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className={`relative flex flex-col gap-6 border-b border-[#fffceb]/15 py-8 outline-none transition-opacity duration-500 focus-visible:bg-[#fffceb]/5 xl:flex-row xl:items-end xl:justify-between xl:py-10 ${
                  i === active ? "z-10" : ""
                } ${active !== null && i !== active ? "xl:opacity-30" : ""}`}
              >
                <div className="grid grid-cols-[2.5rem_1fr] xl:max-w-[36%]">
                  <span
                    className={`pt-2 text-sm font-bold tabular-nums transition-colors duration-300 xl:pt-3 ${
                      i === active ? "text-[#dcc6a6]" : ""
                    }`}
                  >
                    {step.number}
                  </span>
                  <h3
                    className={`text-3xl font-black leading-tight tracking-tight transition-colors duration-300 md:text-4xl xl:text-5xl ${
                      i === active ? "text-[#dcc6a6]" : ""
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className={`col-start-2 mt-3 max-w-md text-base leading-relaxed ${
                    i === active ? "text-[#dcc6a6]" : ""
                  }`}
                  >
                    {step.description}
                  </p>
                </div>

                <ul className={`flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-wider xl:grid xl:w-104 xl:grid-cols-3 xl:gap-4 ${
                    i === active ? "text-[#dcc6a6]" : ""
                }`}
                >
                </ul>

                <img
                  id={`${step.id}-image`}
                  src={step.image}
                  alt={step.imageAlt}
                  onError={(e) => (e.currentTarget.style.visibility = "hidden")}
                  className={`pointer-events-none absolute left-[90%] top-1/2 z-10 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#fffceb]/15 bg-[#3b472a] object-cover transition-all duration-500 ease-out xl:block ${
                    i === active ? "scale-100 opacity-100" : "scale-95 opacity-0"
                  }`}
                />

                <div className="xl:hidden">
                  <img
                    id={`${step.id}-image-mobile`}
                    src={step.image}
                    alt={step.imageAlt}
                    onError={(e) =>
                      (e.currentTarget.style.visibility = "hidden")
                    }
                    className="aspect-4/3 w-full max-w-sm rounded-2xl border border-[#fffceb]/15 bg-[#3b472a] object-cover"
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
