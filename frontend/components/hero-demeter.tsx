'use client';

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { Geist } from 'next/font/google';

const geist = Geist({ subsets: ['latin'] });

export default function HeroDemeter() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    const section2 = document.getElementById('how-it-works');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDarkSection(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (section2) {
      observer.observe(section2);
    }

    return () => {
      if (section2) observer.unobserve(section2);
    };
  }, []);

  return (
    <section
      id='hero-demeter'
      className={`${geist.className} relative flex min-h-dvh w-full flex-col overflow-hidden bg-[#fffceb] text-[#323b21] md:h-screen select-none`}
    >
      <header
        className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-10 transition-all duration-300"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full p-1">
          <a href='#hero-demeter' className="transition hover:opacity-75">
            <Image
            src="/images/hero-demeter/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
            />
          </a>
        </div>

        <nav className="hidden items-center gap-10 rounded-full border border-[#2B5120]/30 bg-[#fffceb]/60 backdrop-blur-sm px-8 py-2.5 text-sm font-semibold uppercase tracking-wider md:flex lg:gap-16 xl:gap-20 shadow-xs">
          <a href="#hero-demeter" className="transition hover:opacity-75">
            HOME
          </a>

          <a href="#how-it-works" className="transition hover:opacity-75">
            HOW IT WORKS
          </a>

          <a href="#why-use-it" className="transition hover:opacity-75">
            WHY USE IT
          </a>

          <Link
            href="/signup"
            className="transition hover:opacity-75"
          >
            Sign up
          </Link>

        </nav>

        <button
          className={`md:hidden p-2 transition-colors duration-300 ${
            isDarkSection ? 'text-[#fffceb]' : 'text-[#323b21]'
          }`}
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>

        <div className="hidden w-12 md:block" />
      </header>

      {menuOpen && (
        <div className="fixed top-20 left-5 right-5 z-50 rounded-2xl bg-[#fffceb]/95 backdrop-blur-md border border-[#323b21]/20 p-6 shadow-xl md:hidden">
          <nav className="flex flex-col gap-6 text-sm font-semibold uppercase tracking-wider">
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>HOW IT WORKS</a>
            <a href="#why-use-it" onClick={() => setMenuOpen(false)}>WHY USE IT</a>
            <a href="#signup" onClick={() => setMenuOpen(false)}>SIGN UP</a>
            <a href="#login" onClick={() => setMenuOpen(false)}>LOGIN</a>
          </nav>
        </div>
      )}

      <div className="relative z-10 flex flex-1 flex-col items-center px-6 pt-28 md:absolute md:inset-0 md:flex md:items-center md:justify-center md:px-0 md:pt-0">

        <div className="relative z-10 md:absolute">
          <h1 className="text-center text-[18vw] font-black leading-none tracking-normal md:text-[14vw]">
            DEM
            <span className="hidden md:inline">&nbsp;</span>
            ETER
          </h1>
        </div>

        <div className="relative z-20 flex flex-col items-center md:absolute">
          <Image
            src="/statue.png"
            alt="Statue"
            width={450}
            height={850}
            className="object-contain sm:w-65 md:w-95 lg:w-105 xl:w-112.5"
            priority
          />

          <div className="-mt-6 h-4 w-44 rounded-[100%] bg-black/40 blur-md" />
        </div>

        <div className="relative z-20 mt-18 max-w-xs items-center md:hidden">
          <p className="text-base font-medium uppercase leading-relaxed tracking-wider">
            LESS TIME DECIDING WHAT TO WEAR.<br></br> MORE CONFIDENCE EVERY DAY.
          </p>
        </div>

        <div className="relative z-20 mt-auto flex w-full flex-col items-center gap-4 pb-10 md:hidden">
          <button className="w-full max-w-xs rounded-full bg-[#323b21] px-10 py-4 text-xs font-bold uppercase tracking-widest text-[#FDFBF7] transition duration-300 ease-in-out hover:bg-[#79896c] hover:shadow-md">
            SIGN UP
          </button>

          <Link
            href="/login"
            className="transition hover:opacity-75"
          >
            OR LOGIN IF YOU ALREADY HAVE AN ACCOUNT.
          </Link>
        </div>
      </div>

      <div className="absolute right-[8%] top-32 z-20 hidden max-w-55 space-y-2 text-right md:block">
        <p className="text-[15px] font-medium uppercase leading-snug tracking-wider">
          ALL YOUR FAVORITE LOOKS IN ONE PLACE.
        </p>
        <div className="ml-auto h-px w-20 bg-[#323b21]" />
      </div>

      <div className="absolute bottom-[12%] left-[8%] z-20 hidden max-w-xs space-y-2 md:block">
        <div className="h-px w-50" />

        <p className="text-[15px] font-medium uppercase leading-relaxed tracking-wider">
          LESS TIME DECIDING WHAT TO WEAR.<br></br>
          MORE CONFIDENCE EVERY DAY.
        </p>
        <div className="h-px w-25 bg-[#323b21]" />
      </div>

      {/* BOTÕES - DESKTOP */}
      <div className="absolute bottom-[12%] right-[8%] z-20 hidden items-center gap-4 md:flex">
        <button className="rounded-full bg-[#323b21] px-10 py-4 text-xs font-bold uppercase tracking-widest text-[#FDFBF7] transition duration-300 ease-in-out hover:bg-[#79896c] hover:shadow-md lg:px-14">
          SIGN UP
        </button>

        <a
          href="#"
          className="text-[15px] font-semibold underline underline-offset-4 transition hover:opacity-75"
        >
          OR LOGIN IF YOU ALREADY HAVE AN ACCOUNT.
        </a>
      </div>
    </section>
  );
}