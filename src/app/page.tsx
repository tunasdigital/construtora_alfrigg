export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
      <section className="w-full max-w-3xl rounded-[12px] border border-white/10 bg-[#0b0b0b] px-8 py-16 text-center shadow-2xl sm:px-12">
        <div className="mx-auto mb-8 h-[3px] w-24 rounded-[12px] bg-[#d4a61f]" />

        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d4a61f]">
          Serviço indisponível
        </p>

        <h1 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
          SITE SUSPENSO
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">
          Este serviço está temporariamente indisponível.
        </p>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
          Consulte o administrador do servidor para mais informações.
        </p>

        <div className="mx-auto mt-10 h-px w-full max-w-md bg-white/10" />

        <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-zinc-600">
          Serviço temporariamente suspenso
        </p>
      </section>
    </main>
  );
}