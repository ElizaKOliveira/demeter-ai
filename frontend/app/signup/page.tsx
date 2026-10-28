"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from 'next/image';
import { Geist, Fraunces } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });

type Status = "idle" | "loading" | "error" | "success";

const fields = [
  {
    id: "signup-name",
    name: "name",
    label: "Name",
    type: "text",
    autoComplete: "name",
  },
  {
    id: "signup-email",
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
  },
  {
    id: "signup-password",
    name: "password",
    label: "Password",
    type: "password",
    autoComplete: "new-password",
  },
];

export default function SignUp() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      // TODO: troque pelo envio real para a sua API, por exemplo:
      // const res = await fetch("/api/signup", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      // if (!res.ok) throw new Error("Sign up failed");
      void data;

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main
      className={`${geist.className} grid min-h-screen w-full lg:grid-cols-2`}
    >
      <section className="relative overflow-hidden bg-[#323b21] px-8 py-16 text-[#fffceb] md:px-16 lg:py-24">
        <h1
          className={`relative z-10 max-w-[10ch] text-[clamp(3.25rem,8vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.03em]`}
        >
          Start with one piece.
        </h1>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-px right-0 hidden lg:block"
        >
          <div className="flex h-104 w-[20rem] items-end justify-center rounded-t-full border border-[#dcc6a6]/25 pb-0">
            <div className="flex h-80 w-56 items-end justify-center rounded-t-full border border-[#dcc6a6]/40">
              <div className="h-56 w-32 rounded-t-full bg-[#dcc6a6]" />
            </div>
          </div>
        </div>
      </section>

      {/* Painel do formulário */}
      <section className="flex items-center justify-center bg-[#fffceb] px-8 py-16 text-[#323b21] md:px-16 lg:py-24">
        <div className="w-full max-w-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-9">
            {fields.map((f) => (
              <div key={f.id} className="relative">
                <input
                  id={f.id}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  placeholder=" "
                  required
                  minLength={f.type === "password" ? 8 : undefined}
                  className="peer w-full border-b border-[#323b21]/25 bg-transparent pb-3 pt-5 text-lg text-[#323b21] outline-none transition-colors duration-300 focus:border-[#323b21] motion-reduce:transition-none"
                  style={{
                    WebkitBoxShadow: "0 0 0 1000px #fffceb inset",
                    WebkitTextFillColor: "#323b21",
                  }}
                />
                <label
                  htmlFor={f.id}
                  className="pointer-events-none absolute left-0 top-5 origin-left text-lg text-[#323b21]/55 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#323b21] peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:scale-75 motion-reduce:transition-none"
                >
                  {f.label}
                </label>
              </div>
            ))}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 w-full rounded-full bg-[#323b21] px-8 py-4 text-base font-medium text-[#fffceb] transition-colors duration-300 hover:bg-[#46522d] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#323b21] disabled:opacity-60 motion-reduce:transition-none"
            >
              {status === "loading" ? "Creating account..." : "Sign up"}
            </button>

            <p aria-live="polite" className="min-h-6 text-sm">
              {status === "success" && "Account created. Welcome to Demeter."}
              {status === "error" && "Something went wrong. Please try again."}
            </p>
          </form>

          <p className="mt-2 text-base text-[#323b21]/80">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-[#323b21] underline decoration-[#dcc6a6] decoration-2 underline-offset-4 transition-colors hover:decoration-[#323b21]"
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
