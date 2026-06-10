"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type IconName =
  | "building"
  | "steel"
  | "roof"
  | "shield"
  | "helmet"
  | "plan"
  | "tools"
  | "download"
  | "gallery"
  | "question"
  | "check"
  | "arrow";

const heroBanners = [
  {
    image: "/images/banner/galpao_01.png",
    alt: "Galpão industrial em estrutura metálica",
    eyebrow: "Construção em aço e concreto",
    title: "Galpões, estruturas metálicas, coberturas e fechamentos industriais.",
    description:
      "A Construtora Alfrigg atua com soluções técnicas para obras industriais, comerciais e estruturais, unindo experiência, planejamento e execução em aço e concreto.",
  },
  {
    image: "/images/banner/galpao_04.png",
    alt: "Equipe sorrindo em obra com estruturas metálicas ao fundo",
    eyebrow: "Equipe e execução",
    title: "Pessoas, planejamento e obra trabalhando juntos.",
    description:
      "Uma construtora forte também se mostra pelo time. Estruturas metálicas, presença técnica e profissionais preparados para conduzir cada etapa da execução.",
  },
  {
    image: "/images/banner/galpao_02.png",
    alt: "Projeto estrutural para ampliação e construção de barracões",
    eyebrow: "Projetos estruturais",
    title: "Soluções para empresas que precisam construir ou ampliar.",
    description:
      "Estruturas em aço e concreto para galpões, barracões, áreas produtivas, coberturas e fechamentos com foco em eficiência e resultado final.",
  },
];

const services = [
  {
    number: "01",
    icon: "building" as IconName,
    title: "Galpões e barracões",
    description:
      "Estruturas para indústrias, comércios, depósitos, áreas produtivas e operações que precisam de espaço, resistência e funcionalidade.",
  },
  {
    number: "02",
    icon: "steel" as IconName,
    title: "Estruturas metálicas",
    description:
      "Soluções em aço para obras que exigem precisão, capacidade estrutural, montagem eficiente e acabamento técnico.",
  },
  {
    number: "03",
    icon: "roof" as IconName,
    title: "Coberturas metálicas",
    description:
      "Coberturas para áreas industriais, comerciais, logísticas, esportivas e institucionais.",
  },
  {
    number: "04",
    icon: "shield" as IconName,
    title: "Fechamentos industriais",
    description:
      "Fechamentos laterais, fachadas técnicas e soluções para proteção, acabamento e desempenho da edificação.",
  },
];

const movingItems = [
  "Barracões industriais",
  "Fechamentos metálicos",
  "Coberturas comerciais",
  "Estruturas em aço",
  "Galpões logísticos",
  "Obras em concreto",
  "Ampliações industriais",
  "Montagem estrutural",
  "Projetos técnicos",
  "Construção civil",
];

const galleryItems = [
  {
    image: "/images/galeria/obra_01.png",
    title: "Coberturas metálicas",
    description: "Execução de cobertura com estrutura metálica e acabamento técnico.",
  },
  {
    image: "/images/galeria/obra_02.png",
    title: "Estrutura em campo",
    description: "Registro de obra com montagem, preparação e acompanhamento.",
  },
  {
    image: "/images/galeria/obra_03.png",
    title: "Galpões e fechamentos",
    description: "Soluções para áreas produtivas, comerciais e industriais.",
  },
  {
    image: "/images/galeria/obra_04.png",
    title: "Obra industrial",
    description: "Estruturas em aço e concreto para operações que precisam durar.",
  },
  {
    image: "/images/galeria/obra_05.png",
    title: "Montagem estrutural",
    description: "Processo de execução com foco em resistência e funcionalidade.",
  },
  {
    image: "/images/galeria/obra_06.png",
    title: "Cobertura técnica",
    description: "Detalhes de cobertura metálica para proteção e desempenho.",
  },
  {
    image: "/images/galeria/obra_07.png",
    title: "Barracões",
    description: "Estruturas para ampliar, proteger e organizar áreas de trabalho.",
  },
  {
    image: "/images/galeria/obra_08.png",
    title: "Execução em aço",
    description: "Obras com presença de estrutura metálica e acabamento industrial.",
  },
  {
    image: "/images/galeria/obra_09.png",
    title: "Detalhes de obra",
    description: "Registros técnicos que mostram a construção em andamento.",
  },
  {
    image: "/images/galeria/obra_10.png",
    title: "Construção civil",
    description: "Soluções para diferentes necessidades comerciais e estruturais.",
  },
  {
    image: "/images/galeria/obra_11.png",
    title: "Fechamentos",
    description: "Proteção, acabamento e fechamento para estruturas industriais.",
  },
  {
    image: "/images/galeria/obra_12.png",
    title: "Obras entregues",
    description: "Galeria de projetos, estruturas, coberturas e execuções reais.",
  },
];

const processSteps = [
  {
    icon: "question" as IconName,
    title: "Diagnóstico",
    description:
      "Entendimento da necessidade, tipo de obra, uso do espaço e objetivo do cliente.",
  },
  {
    icon: "plan" as IconName,
    title: "Análise técnica",
    description:
      "Leitura da estrutura necessária, condicionantes da obra e solução construtiva.",
  },
  {
    icon: "tools" as IconName,
    title: "Planejamento",
    description:
      "Organização de etapas, materiais, cronograma e execução em campo.",
  },
  {
    icon: "helmet" as IconName,
    title: "Execução",
    description:
      "Construção, montagem, acompanhamento técnico e controle do resultado.",
  },
];

const faqItems = [
  {
    question: "A Construtora Alfrigg trabalha com quais tipos de obra?",
    answer:
      "A empresa atua com estruturas em aço e concreto, incluindo galpões, barracões, coberturas metálicas, fechamentos industriais e soluções estruturais para áreas comerciais e produtivas.",
  },
  {
    question:
      "É possível solicitar orçamento para ampliação de uma estrutura existente?",
    answer:
      "Sim. O ideal é avaliar a necessidade, o uso do espaço e as condições da estrutura atual para definir a solução técnica mais adequada.",
  },
  {
    question: "A empresa atende apenas Curitiba?",
    answer:
      "A comunicação atual da marca indica atuação em diferentes regiões do Brasil. No site, mantemos esse posicionamento como atuação nacional.",
  },
  {
    question: "O que é avaliado antes da execução da obra?",
    answer:
      "São avaliados o objetivo do cliente, o tipo de estrutura, materiais, prazo, local da obra, acesso, segurança, orçamento e viabilidade técnica.",
  },
];

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
    "aria-hidden": true,
  };

  if (name === "building") {
    return (
      <svg {...common}>
        <path d="M4 20V8l8-4 8 4v12" />
        <path d="M8 20v-7h8v7" />
        <path d="M8 9h.01M12 8h.01M16 9h.01" />
        <path d="M4 20h16" />
      </svg>
    );
  }

  if (name === "steel") {
    return (
      <svg {...common}>
        <path d="M4 19 20 5" />
        <path d="M7 16h10" />
        <path d="M9 14h6" />
        <path d="M5 19h14" />
        <path d="M7 17 5 11" />
        <path d="M17 17l2-6" />
      </svg>
    );
  }

  if (name === "roof") {
    return (
      <svg {...common}>
        <path d="M3 12 12 4l9 8" />
        <path d="M5 11v9h14v-9" />
        <path d="M8 20v-6h8v6" />
        <path d="M12 4v16" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 3 20 6v6c0 5-3.4 7.7-8 9-4.6-1.3-8-4-8-9V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2L16 9" />
      </svg>
    );
  }

  if (name === "helmet") {
    return (
      <svg {...common}>
        <path d="M4 14a8 8 0 0 1 16 0" />
        <path d="M3 14h18" />
        <path d="M7 14V9" />
        <path d="M12 14V6" />
        <path d="M17 14V9" />
        <path d="M5 17h14" />
      </svg>
    );
  }

  if (name === "plan") {
    return (
      <svg {...common}>
        <path d="M5 4h14v16H5z" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
        <path d="M8 16h5" />
      </svg>
    );
  }

  if (name === "tools") {
    return (
      <svg {...common}>
        <path d="m14 7 3-3 3 3-3 3" />
        <path d="M3 21 14 10" />
        <path d="m5 5 4 4" />
        <path d="m3 7 2-2 4 4-2 2Z" />
      </svg>
    );
  }

  if (name === "download") {
    return (
      <svg {...common}>
        <path d="M12 3v11" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 20h14" />
      </svg>
    );
  }

  if (name === "gallery") {
    return (
      <svg {...common}>
        <path d="M4 5h16v14H4z" />
        <path d="m4 15 5-5 4 4 2-2 5 5" />
        <path d="M15 8h.01" />
      </svg>
    );
  }

  if (name === "question") {
    return (
      <svg {...common}>
        <path d="M9 9a3 3 0 1 1 4.2 2.7c-.8.4-1.2 1-1.2 2.3" />
        <path d="M12 18h.01" />
        <path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  const [activeBanner, setActiveBanner] = useState(0);

  const currentBanner = useMemo(
    () => heroBanners[activeBanner],
    [activeBanner],
  );

  function goToPreviousBanner() {
    setActiveBanner((current) =>
      current === 0 ? heroBanners.length - 1 : current - 1,
    );
  }

  function goToNextBanner() {
    setActiveBanner((current) => (current + 1) % heroBanners.length);
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % heroBanners.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const movingLoop = [...movingItems, ...movingItems];
  const galleryLoop = [...galleryItems, ...galleryItems];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <header className="relative z-30 border-b border-white/10 bg-black">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="block">
            <Image
              src="/images/logo_alfrigg3.png"
              alt="Construtora Alfrigg"
              width={190}
              height={110}
              priority
              className="h-auto w-[138px] sm:w-[160px]"
            />
          </a>

          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-300 lg:flex">
            <a className="transition hover:text-[#f1bd2b]" href="#servicos">
              Serviços
            </a>
            <a className="transition hover:text-[#f1bd2b]" href="#galeria">
              Galeria
            </a>
            <a className="transition hover:text-[#f1bd2b]" href="#faq">
              FAQ
            </a>
            <a className="transition hover:text-[#f1bd2b]" href="#contato">
              Contato
            </a>
          </nav>

          <a
            href="https://wa.me/5541999999999"
            className="rounded-[12px] border border-[#c99a1b] bg-[#c99a1b]/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#f1bd2b] transition hover:bg-[#c99a1b] hover:text-black sm:text-[11px]"
          >
            Orçamento
          </a>
        </div>
      </header>

      <section className="relative border-b border-[#c99a1b]/35 bg-black">
        <div className="relative h-[520px] w-full overflow-hidden">
          <Image
            src={currentBanner.image}
            alt={currentBanner.alt}
            fill
            priority
            className="object-cover transition duration-700"
          />

          <div className="absolute inset-0 bg-black/42" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.82),_rgba(0,0,0,0.44)_44%,_rgba(0,0,0,0.68)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.24),_rgba(0,0,0,0.10)_40%,_rgba(0,0,0,0.68)_100%)]" />

          <div className="absolute inset-0 z-10 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
              <div className="max-w-2xl rounded-[12px] border border-white/10 bg-black/38 px-6 py-6 backdrop-blur-[2px]">
                <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#f1bd2b] sm:text-[11px]">
                  {currentBanner.eyebrow}
                </p>

                <h1 className="mt-4 max-w-2xl text-2xl font-black leading-[1.08] tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">
                  {currentBanner.title}
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-200 sm:text-base">
                  {currentBanner.description}
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={goToPreviousBanner}
            className="absolute left-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[12px] border border-[#c99a1b]/70 bg-black/45 text-2xl font-light text-[#f1bd2b] transition hover:bg-[#c99a1b] hover:text-black"
            aria-label="Banner anterior"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={goToNextBanner}
            className="absolute right-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[12px] border border-[#c99a1b]/70 bg-black/45 text-2xl font-light text-[#f1bd2b] transition hover:bg-[#c99a1b] hover:text-black"
            aria-label="Próximo banner"
          >
            ›
          </button>

          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
            {heroBanners.map((banner, index) => (
              <button
                key={banner.image}
                type="button"
                onClick={() => setActiveBanner(index)}
                className={`h-[4px] rounded-[12px] transition-all ${
                  activeBanner === index
                    ? "w-16 bg-[#f1bd2b]"
                    : "w-8 bg-white/35 hover:bg-white/60"
                }`}
                aria-label={`Ir para banner ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 z-20 h-[5px] w-full bg-[#c99a1b]" />
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#070707]">
        <div className="overflow-hidden py-6">
          <div className="flex min-w-max animate-[alfriggTicker_26s_linear_infinite] items-center gap-10 whitespace-nowrap">
            {movingLoop.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="shrink-0 text-sm font-black uppercase tracking-[0.28em] text-zinc-500"
              >
                <span className="mr-10 text-[#c99a1b]">+</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 bg-[#050505] px-6 py-24 lg:px-8">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:90px_90px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-0 rounded-[12px] border border-white/10 bg-[#090909] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[430px] overflow-hidden rounded-l-[12px] bg-[#111]">
            <Image
              src="/images/banner/galpao_03.png"
              alt="Engenheiro em obra com estruturas metálicas ao fundo"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/14" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.06),_rgba(0,0,0,0.44)_100%)]" />

            <div className="absolute bottom-0 left-0 z-10 h-[5px] w-full bg-[#c99a1b]" />

            <div className="absolute bottom-8 left-8 z-10 max-w-sm rounded-[12px] border border-white/10 bg-black/46 px-5 py-4 backdrop-blur-[2px]">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#f1bd2b]">
                Engenharia e execução
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-200">
                Planejamento técnico, acompanhamento de obra e estruturas
                metálicas executadas com responsabilidade.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#f1bd2b]">
              Quem somos
            </p>

            <h2 className="mt-5 max-w-xl text-3xl font-black leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
              Construção civil com experiência, controle e responsabilidade.
            </h2>

            <div className="mt-8 grid gap-5 text-base leading-8 text-zinc-300">
              <p>
                A Construtora Alfrigg atua na construção de estruturas em aço e
                concreto, com foco em soluções para empresas que precisam
                construir, ampliar ou estruturar áreas produtivas com segurança e
                eficiência.
              </p>

              <p>
                O trabalho une tradição, planejamento e visão técnica para
                executar galpões, barracões, coberturas, fechamentos industriais
                e estruturas metálicas com atenção ao resultado final da obra.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Experiência", "Planejamento", "Execução técnica"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-[12px] border border-white/10 bg-black/45 p-4"
                  >
                    <Icon name="check" className="h-6 w-6 text-[#f1bd2b]" />
                    <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-zinc-300">
                      {item}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        className="relative border-b border-white/10 bg-[#080808] px-6 py-24 lg:px-8"
      >
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:96px_96px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#f1bd2b]">
              Serviços
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl font-black leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
              Soluções para obras industriais, comerciais e estruturais.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative min-h-[330px] overflow-hidden rounded-[12px] border border-white/10 bg-[#090909] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#c99a1b]/60 hover:bg-[#12100a]"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 border border-[#c99a1b]/20 transition duration-500 group-hover:rotate-45 group-hover:border-[#c99a1b]/70" />

                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <p className="text-sm font-black text-[#f1bd2b]">
                    {service.number}
                  </p>

                  <div className="rounded-[12px] border border-[#c99a1b]/30 bg-black/50 p-3">
                    <Icon
                      name={service.icon}
                      className="h-8 w-8 text-[#f1bd2b] transition duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-black leading-tight tracking-[-0.035em] text-white">
                  {service.title}
                </h3>

                <p className="mt-6 text-sm leading-7 text-zinc-400">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#f1bd2b] opacity-70 transition group-hover:opacity-100">
                  Ver solução
                  <Icon name="arrow" className="h-4 w-4" />
                </div>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#c99a1b] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050505] px-6 py-24 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-4 lg:grid-cols-2">
          <article className="rounded-[12px] border border-white/10 bg-[#0d0d0d] p-8 sm:p-10 lg:p-12">
            <Icon name="plan" className="h-12 w-12 text-[#f1bd2b]" />
            <p className="mt-7 text-xs font-black uppercase tracking-[0.32em] text-[#f1bd2b]">
              Tecnologia
            </p>
            <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-0.045em] text-white lg:text-4xl">
              Planejar melhor para construir com mais controle.
            </h2>
            <p className="mt-7 text-base leading-8 text-zinc-300">
              A construção civil moderna exige precisão, acompanhamento e gestão.
              Modelagem, monitoramento, softwares de controle e processos bem
              organizados ajudam a reduzir falhas, melhorar decisões e tornar a
              execução mais eficiente.
            </p>
          </article>

          <article className="rounded-[12px] border border-white/10 bg-[#0d0d0d] p-8 sm:p-10 lg:p-12">
            <Icon name="tools" className="h-12 w-12 text-[#f1bd2b]" />
            <p className="mt-7 text-xs font-black uppercase tracking-[0.32em] text-[#f1bd2b]">
              Eficiência
            </p>
            <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-0.045em] text-white lg:text-4xl">
              Obra eficiente começa antes da execução.
            </h2>
            <p className="mt-7 text-base leading-8 text-zinc-300">
              Planejamento, canteiro organizado, relação com fornecedores,
              transporte adequado, armazenamento correto e controle de materiais
              são decisões que reduzem desperdícios e aumentam a previsibilidade
              da obra.
            </p>
          </article>
        </div>
      </section>

      <section
        id="processo"
        className="relative border-b border-white/10 bg-[#050505] px-6 py-24 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-[#f1bd2b]">
                Processo
              </p>
              <h2 className="mt-5 max-w-xl text-3xl font-black leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Da primeira conversa à entrega da estrutura.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[12px] border border-white/10 bg-[#0a0a0a] p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      name={step.icon}
                      className="h-10 w-10 text-[#f1bd2b]"
                    />
                    <div className="rounded-[12px] border border-[#c99a1b]/30 px-3 py-2 text-sm font-black text-[#f1bd2b]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-black tracking-[-0.035em] text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080808] px-6 py-24 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-10 rounded-[12px] border border-[#c99a1b]/35 bg-black/55 p-8 lg:grid-cols-[0.75fr_1.25fr] lg:p-12">
          <div>
            <Icon name="download" className="h-14 w-14 text-[#f1bd2b]" />
            <p className="mt-7 text-xs font-black uppercase tracking-[0.32em] text-[#f1bd2b]">
              Material institucional
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-black leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl">
              Baixe o manifesto técnico da Construtora Alfrigg.
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <p className="max-w-2xl text-base leading-8 text-zinc-300">
              Espaço reservado para um arquivo institucional, manifesto,
              apresentação técnica, catálogo de serviços ou material comercial
              para o cliente baixar. Depois ajustamos o nome real do documento e
              o arquivo final.
            </p>

            <a
              href="#"
              className="inline-flex w-fit items-center gap-3 rounded-[12px] bg-[#d7a51f] px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:bg-[#f1bd2b]"
            >
              Baixar material
              <Icon name="download" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="galeria" className="border-b border-white/10 bg-[#050505] py-24">
        <div className="mx-auto mb-12 flex w-full max-w-7xl flex-col justify-between gap-6 px-6 lg:flex-row lg:items-end lg:px-8">
          <div>
            <Icon name="gallery" className="h-12 w-12 text-[#f1bd2b]" />
            <p className="mt-7 text-xs font-black uppercase tracking-[0.32em] text-[#f1bd2b]">
              Galeria de fotos
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
              Obras, detalhes e execução em campo.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-zinc-400">
            Registros reais de obras, coberturas, estruturas e soluções
            executadas pela Construtora Alfrigg.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex min-w-max animate-[alfriggGallery_46s_linear_infinite] gap-5 px-6">
            {galleryLoop.map((item, index) => (
              <article
                key={`${item.image}-${index}`}
                className="group relative h-[390px] w-[330px] shrink-0 overflow-hidden rounded-[12px] border border-white/10 bg-[#111] transition hover:-translate-y-2 hover:border-[#c99a1b]/60"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="330px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/18" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.08),_rgba(0,0,0,0.20)_38%,_rgba(0,0,0,0.78)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-[5px] bg-[#c99a1b]" />

                <div className="relative z-10 flex h-full flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <p className="rounded-[12px] bg-black/40 px-3 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#f1bd2b] backdrop-blur-[2px]">
                      Foto{" "}
                      {String((index % galleryItems.length) + 1).padStart(
                        2,
                        "0",
                      )}
                    </p>

                    <div className="rounded-[12px] border border-[#c99a1b]/40 bg-black/45 p-3 backdrop-blur-[2px]">
                      <Icon name="gallery" className="h-6 w-6 text-[#f1bd2b]" />
                    </div>
                  </div>

                  <div className="rounded-[12px] border border-white/10 bg-black/42 p-5 backdrop-blur-[2px]">
                    <h3 className="text-2xl font-black leading-none tracking-[-0.045em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 border-l-2 border-[#c99a1b] pl-4 text-sm leading-6 text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="border-b border-white/10 bg-[#080808] px-6 py-24 lg:px-8"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <Icon name="question" className="h-12 w-12 text-[#f1bd2b]" />
            <p className="mt-7 text-xs font-black uppercase tracking-[0.32em] text-[#f1bd2b]">
              FAQ
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-black leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
              Perguntas frequentes sobre obras e estruturas.
            </h2>
          </div>

          <div className="grid gap-4">
            {faqItems.map((item, index) => (
              <article
                key={item.question}
                className="rounded-[12px] border border-white/10 bg-[#0d0d0d] p-7"
              >
                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#c99a1b]/60 text-sm font-black text-[#f1bd2b]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-lg font-black tracking-[-0.02em] text-white">
                      {item.question}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="relative bg-[#0b0b0b] px-6 py-24 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,_rgba(201,154,27,0.18),_transparent_35%,_rgba(255,255,255,0.04))]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 rounded-[12px] border border-[#c99a1b]/35 bg-black/70 p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
          <Image
            src="/images/logo_alfrigg3.png"
            alt="Construtora Alfrigg"
            width={260}
            height={150}
            className="h-auto w-[190px]"
          />

          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#f1bd2b]">
              Orçamento
            </p>
            <h2 className="mt-5 max-w-4xl text-3xl font-black leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
              Vamos planejar a estrutura da sua próxima obra?
            </h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              Fale com a Construtora Alfrigg e solicite uma avaliação para
              galpões, barracões, coberturas, fechamentos ou estruturas em aço e
              concreto.
            </p>

            <a
              href="https://wa.me/5541999999999"
              className="mt-9 inline-flex rounded-[12px] bg-[#d7a51f] px-8 py-5 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:bg-[#f1bd2b]"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-[#c99a1b]/35 bg-black px-6 pt-20 lg:px-8">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:86px_86px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c99a1b] to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr]">
            <div>
              <Image
                src="/images/logo_alfrigg3.png"
                alt="Construtora Alfrigg"
                width={260}
                height={150}
                className="h-auto w-[190px]"
              />

              <p className="mt-7 max-w-md text-sm leading-7 text-zinc-400">
                Construção em aço e concreto para empresas que precisam de
                galpões, barracões, estruturas metálicas, coberturas e
                fechamentos industriais com planejamento, experiência e execução
                técnica.
              </p>

              <div className="mt-8 grid max-w-md gap-4 sm:grid-cols-3">
                <div className="rounded-[12px] border border-white/10 bg-[#080808] p-4">
                  <p className="text-xl font-black text-[#f1bd2b]">+25</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">
                    anos
                  </p>
                </div>

                <div className="rounded-[12px] border border-white/10 bg-[#080808] p-4">
                  <p className="text-xl font-black text-[#f1bd2b]">Aço</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">
                    estrutura
                  </p>
                </div>

                <div className="rounded-[12px] border border-white/10 bg-[#080808] p-4">
                  <p className="text-xl font-black text-[#f1bd2b]">Brasil</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">
                    atuação
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.28em] text-[#f1bd2b]">
                Serviços
              </h3>

              <nav className="mt-6 grid gap-4 text-sm text-zinc-400">
                <a className="transition hover:text-[#f1bd2b]" href="#servicos">
                  Galpões e barracões
                </a>
                <a className="transition hover:text-[#f1bd2b]" href="#servicos">
                  Estruturas metálicas
                </a>
                <a className="transition hover:text-[#f1bd2b]" href="#servicos">
                  Coberturas metálicas
                </a>
                <a className="transition hover:text-[#f1bd2b]" href="#servicos">
                  Fechamentos industriais
                </a>
              </nav>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.28em] text-[#f1bd2b]">
                Navegação
              </h3>

              <nav className="mt-6 grid gap-4 text-sm text-zinc-400">
                <a className="transition hover:text-[#f1bd2b]" href="#">
                  Início
                </a>
                <a className="transition hover:text-[#f1bd2b]" href="#galeria">
                  Galeria de obras
                </a>
                <a className="transition hover:text-[#f1bd2b]" href="#faq">
                  Perguntas frequentes
                </a>
                <a className="transition hover:text-[#f1bd2b]" href="#contato">
                  Solicitar orçamento
                </a>
              </nav>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.28em] text-[#f1bd2b]">
                Contato
              </h3>

              <div className="mt-6 grid gap-4 text-sm leading-7 text-zinc-400">
                <p>
                  Curitiba, Paraná
                  <br />
                  Atendimento para obras em diferentes regiões do Brasil.
                </p>

                <a
                  href="https://wa.me/5541999999999"
                  className="inline-flex w-fit items-center gap-3 rounded-[12px] border border-[#c99a1b]/70 bg-[#c99a1b]/10 px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#f1bd2b] transition hover:bg-[#c99a1b] hover:text-black"
                >
                  Falar no WhatsApp
                  <Icon name="arrow" className="h-4 w-4" />
                </a>

                <a
                  href="#"
                  className="inline-flex w-fit items-center gap-3 text-[11px] font-black uppercase tracking-[0.18em] text-zinc-500 transition hover:text-[#f1bd2b]"
                >
                  Baixar material institucional
                  <Icon name="download" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-6 py-8 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-600 lg:grid-cols-[1fr_auto] lg:items-center">
            <p>© 2026 Construtora Alfrigg. Todos os direitos reservados.</p>

            <div className="flex flex-wrap gap-5">
              <a className="transition hover:text-[#f1bd2b]" href="#servicos">
                Estruturas metálicas
              </a>
              <a className="transition hover:text-[#f1bd2b]" href="#galeria">
                Obras
              </a>
              <a className="transition hover:text-[#f1bd2b]" href="#contato">
                Orçamento
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes alfriggTicker {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes alfriggGallery {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </main>
  );
}