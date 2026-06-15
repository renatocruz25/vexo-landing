"use client";

import {
  Trophy,
  BarChart3,
  Sparkles,
  Target,
  Rocket,
  LineChart,
} from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "@/components/3d/Reveal";
import { TiltCard } from "@/components/3d/TiltCard";
import { motion } from "framer-motion";

const features = [
  {
    icon: Trophy,
    title: "Creator Score",
    description:
      "Uma pontuação única que mede performance real: vendas, engajamento qualificado e consistência. O novo padrão de credibilidade.",
    glow: "accent" as const,
  },
  {
    icon: BarChart3,
    title: "Rankings",
    description:
      "Classificações dinâmicas por nicho, região e categoria. Veja onde você está e o que falta para subir de nível.",
    glow: "primary" as const,
  },
  {
    icon: Sparkles,
    title: "IA Match",
    description:
      "Nossa inteligência artificial conecta empresas aos creators certos com base em dados reais de conversão, não em achismo.",
    glow: "primary" as const,
  },
  {
    icon: LineChart,
    title: "Performance",
    description:
      "Dashboards completos de cliques, conversões e receita gerada por campanha, em tempo real.",
    glow: "accent" as const,
  },
  {
    icon: Target,
    title: "Oportunidades",
    description:
      "Campanhas abertas de marcas que buscam exatamente o seu perfil. Aplique, negocie e entregue, tudo na plataforma.",
    glow: "primary" as const,
  },
  {
    icon: Rocket,
    title: "Crescimento",
    description:
      "Sistema de níveis e gamificação que recompensa consistência. Cada resultado te aproxima do próximo tier.",
    glow: "accent" as const,
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Plataforma
          </span>
          <h2 className="balance mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Tudo o que move um creator para o topo.
          </h2>
          <p className="mt-5 text-lg text-muted">
            Ferramentas construídas para quem entrega resultado, e para quem
            precisa encontrar quem entrega.
          </p>
        </Reveal>

        <RevealGroup
          staggerDelay={0.08}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={revealItem}>
              <TiltCard glowColor={feature.glow} className="h-full">
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${
                    feature.glow === "accent"
                      ? "bg-accent/10 text-accent"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
