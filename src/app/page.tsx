import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,196,0,0.12),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(255,196,0,0.08),_transparent_30%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="mb-10 flex justify-center">
            <Image
              src="/images/logo_alfrigg3.png"
              alt="Construtora Alfrigg"
              width={420}
              height={240}
              priority
              className="h-auto w-[220px] sm:w-[280px] md:w-[360px] lg:w-[420px]"
            />
          </div>

          <span className="mb-4 inline-flex rounded-full border border-[#c79a1b]/40 bg-[#c79a1b]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#d4a61f] sm:text-sm">
            Site em manutenção
          </span>

          <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-[#f4c542] sm:text-4xl md:text-5xl">
            Estamos preparando uma nova experiência digital.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            Nosso site está passando por uma atualização para apresentar melhor
            nossa história, nossos serviços e nossos projetos.
          </p>

          <p className="mt-4 text-lg font-medium text-white sm:text-xl">
            Há mais de 25 anos construindo sonhos.
          </p>

          <div className="mt-10 h-px w-32 bg-gradient-to-r from-transparent via-[#d4a61f] to-transparent" />

          <p className="mt-10 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Em breve, uma nova presença online da <strong className="text-zinc-200">Construtora Alfrigg</strong>,
            com mais clareza, modernidade e credibilidade.
          </p>
        </div>
      </section>
    </main>
  );
}