"use client";

import { Radar, Eye, Brain, TrendingUp } from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "@/components/3d/Reveal";
import { TiltCard } from "@/components/3d/TiltCard";
import { motion } from "framer-motion";

const companyFeatures = [
  {
    icon: Radar,
    title: "Creator Radar",
    description:
      "Descubra creators emergentes antes que se tornem caros ou saturados, ordenados por potencial de conversão.",
  },
  {
    icon: Eye,
    title: "Watchlist",
    description:
      "Monitore creators específicos e receba alertas quando o Creator Score deles subir de nível.",
  },
  {
    icon: Brain,
    title: "IA de Compatibilidade",
    description:
      "Cruzamos seu público, produto e budget com o histórico de performance de cada creator da base.",
  },
  {
    icon: TrendingUp,
    title: "Tendências",
    description:
      "Veja quais formatos, nichos e abordagens estão gerando mais vendas agora, em tempo real.",
  },
];

export function ForCompanies() {
  return (
    <section id="empresas" className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] bg-radial-glow opacity-50" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal direction="left">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Para empresas
              </span>
              <h2 className="balance mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Encontre creators antes dos seus concorrentes.
              </h2>
              <p className="mt-5 text-lg text-muted">
                Pare de escolher creators no escuro. A VEXO entrega dados de
                performance real para que cada parceria seja uma decisão de
                negócio, não uma aposta.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.15} className="mt-8">
              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Compatibilidade média</span>
                  <span className="font-mono font-semibold text-accent">94%</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
                <p className="mt-4 text-xs text-muted">
                  Score médio de compatibilidade entre marcas e creators
                  recomendados pela IA da VEXO durante o período de testes.
                </p>
              </div>
            </Reveal>
          </div>

          <RevealGroup staggerDelay={0.1} className="grid gap-5 sm:grid-cols-2">
            {companyFeatures.map((feature) => (
              <motion.div key={feature.title} variants={revealItem}>
                <TiltCard className="h-full" intensity={6}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
