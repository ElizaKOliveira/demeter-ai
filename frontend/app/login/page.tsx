"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });

type Status = "idle" | "loading" | "error" | "success";

const fields = [
  {
    id: "login-email",
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
  },
  {
    id: "login-password",
    name: "password",
    label: "Password",
    type: "password",
    autoComplete: "current-password",
  },
];

export default function LoginPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      // Simulação de login
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className={`${geist.className} grid min-h-screen w-full lg:grid-cols-2`}>
      {/* Lado esquerdo: Tema escuro com título, subtítulo e ilustração */}
      <section className="relative flex flex-col justify-between overflow-hidden bg-[#323b21] px-8 py-16 text-[#fffceb] md:px-16 lg:py-24">
        <h1 className="max-w-[10ch] text-[clamp(3.25rem,8vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
          Welcome back.
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

      {/* Lado direito: Painel do formulário (tema claro) */}
      <section className="flex flex-col justify-between bg-[#fffceb] px-8 py-12 text-[#323b21] md:px-16 lg:py-16">
        {/* Link superior para voltar (opcional, mantido no topo para respiro) */}
        <div>
          <Link
            href="/"
            className="inline-block text-sm uppercase tracking-wider text-[#323b21]/60 transition-colors hover:text-[#323b21]"
          >
            ← HOME
          </Link>
        </div>

        {/* Bloco central do formulário */}
        <div className="mx-auto w-full max-w-sm py-8">
          <div className="mb-8">
            <h1 className="flex items-center justify-center text-2xl font-bold tracking-tight text-[#323b21]">
              Log in to your account
            </h1>
            <p className="flex items-center justify-center mt-1.5 text-sm text-[#323b21]/70">
              Enter your credentials to access your workspace.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-5">
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
                    className="peer w-full border-b border-[#323b21]/25 bg-transparent pb-3 pt-5 text-base text-[#323b21] outline-none transition-colors duration-300 focus:border-[#323b21] motion-reduce:transition-none"
                    style={{
                      WebkitBoxShadow: "0 0 0 1000px #fffceb inset",
                      WebkitTextFillColor: "#323b21",
                    }}
                  />
                  <label
                    htmlFor={f.id}
                    className="pointer-events-none absolute left-0 top-5 origin-left text-base text-[#323b21]/55 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#323b21] peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:scale-75 motion-reduce:transition-none"
                  >
                    {f.label}
                  </label>
                </div>
              ))}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 w-full rounded-full bg-[#323b21] px-6 py-3.5 text-sm font-medium text-[#fffceb] transition-colors duration-300 hover:bg-[#46522d] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#323b21] disabled:opacity-60 motion-reduce:transition-none"
            >
              {status === "loading" ? "Logging in..." : "Log in"}
            </button>

            <p aria-live="polite" className="min-h-5 text-xs text-center">
              {status === "success" && "Welcome back!"}
              {status === "error" && "Something went wrong. Please try again."}
            </p>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#323b21]/15" />
            <span className="text-xs uppercase tracking-wider text-[#323b21]/50">
              Or continue with
            </span>
            <div className="h-px flex-1 bg-[#323b21]/15" />
          </div>

          <button
            type="button"
            disabled
            className="flex w-full items-center justify-center gap-3 rounded-full border border-[#323b21]/20 px-6 py-3.5 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60 hover:bg-[#323b21]/5"
          >
            <span className="font-bold">G</span>
            Continue with Google
            <span className="text-xs text-[#323b21]/50">(Coming soon)</span>
          </button>

          <p className="mt-8 text-center text-sm text-[#323b21]/80">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-[#323b21] underline decoration-[#dcc6a6] decoration-2 underline-offset-4 transition-colors hover:decoration-[#323b21]"
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* Espaçador inferior invisível para equilibrar o layout flex space-between */}
        <div aria-hidden="true" />
      </section>
    </main>
  );
}