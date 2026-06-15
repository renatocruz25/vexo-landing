"use client";

import { motion } from "framer-motion";
import { Crown, TrendingUp, Zap } from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "@/components/3d/Reveal";

const topCreators = [
  {
    rank: 1,
    name: "Bia Tavares",
    handle: "@biatavares",
    niche: "Beleza & Skincare",
    score: 987,
    sales: "R$ 184.200",
    tier: "Platina",
    trend: "+12%",
  },
  {
    rank: 2,
    name: "Lucas Mendes",
    handle: "@lucasmendes",
    niche: "Tech & Gadgets",
    score: 954,
    sales: "R$ 161.900",
    tier: "Platina",
    trend: "+9%",
  },
  {
    rank: 3,
    name: "Ana Ferraz",
    handle: "@anaferraz",
    niche: "Moda & Lifestyle",
    score: 921,
    sales: "R$ 143.500",
    tier: "Ouro",
    trend: "+15%",
  },
  {
    rank: 4,
    name: "Diego Rocha",
    handle: "@diegorocha",
    niche: "Fitness & Performance",
    score: 889,
    sales: "R$ 128.700",
    tier: "Ouro",
    trend: "+6%",
  },
  {
    rank: 5,
    name: "Carol Nunes",
    handle: "@carolnunes",
    niche: "Casa & Decoração",
    score: 862,
    sales: "R$ 117.300",
    tier: "Ouro",
    trend: "+11%",
  },
];

const tierColors: Record<string, string> = {
  Platina: "text-accent border-accent/30 bg-accent/10",
  Ouro: "text-primary border-primary/30 bg-primary/10",
};

export function VexoArena() {
  return (
    <section id="arena" className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 bg-radial-glow opacity-30" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            VEXO Arena
          </span>
          <h2 className="balance mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            O campeonato dos creators de performance.
          </h2>
          <p className="mt-5 text-lg text-muted">
            Cada venda, cada campanha, cada resultado conta pontos. Veja quem
            está dominando a temporada.
          </p>
        </Reveal>

        {/* Live badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Temporada 01 &mdash; Ao vivo
            </span>
          </div>
        </div>

        {/* Leaderboard */}
        <RevealGroup staggerDelay={0.08} className="mx-auto mt-10 max-w-4xl space-y-3">
          {topCreators.map((creator) => (
            <motion.div
              key={creator.rank}
              variants={revealItem}
              whileHover={{ scale: 1.01, x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`group relative flex items-center gap-4 rounded-2xl border p-4 sm:p-5 ${
                creator.rank === 1
                  ? "border-accent/40 bg-gradient-to-r from-accent/10 via-card/60 to-card/60 glow-accent"
                  : "border-border bg-card/40"
              }`}
            >
              {/* Rank */}
              <div className="flex w-12 flex-shrink-0 items-center justify-center">
                {creator.rank === 1 ? (
                  <Crown className="h-7 w-7 text-accent" />
                ) : (
                  <span className="font-display text-2xl font-bold text-muted">
                    {String(creator.rank).padStart(2, "0")}
                  </span>
                )}
              </div>

              {/* Avatar placeholder */}
              <div
                className={`h-12 w-12 flex-shrink-0 rounded-full bg-gradient-to-br ${
                  creator.rank === 1
                    ? "from-accent/70 to-primary/70"
                    : "from-primary/40 to-accent/40"
                }`}
              />

              {/* Info */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-base font-semibold sm:text-lg">
                    {creator.name}
                  </h3>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${tierColors[creator.tier]}`}
                  >
                    {creator.tier}
                  </span>
                </div>
                <p className="text-sm text-muted">
                  {creator.handle} &middot; {creator.niche}
                </p>
              </div>

              {/* Stats */}
              <div className="hidden flex-shrink-0 flex-col items-end gap-1 sm:flex">
                <div className="flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-accent" />
                  <span className="font-mono text-sm font-semibold">
                    {creator.score}
                  </span>
                  <span className="text-xs text-muted">score</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <span className="font-mono">{creator.sales}</span>
                  <span className="flex items-center gap-0.5 text-accent">
                    <TrendingUp className="h-3 w-3" />
                    {creator.trend}
                  </span>
                </div>
              </div>

              {/* Mobile stats */}
              <div className="flex flex-shrink-0 flex-col items-end gap-0.5 sm:hidden">
                <span className="font-mono text-sm font-semibold">
                  {creator.score}
                </span>
                <span className="text-[10px] text-muted">score</span>
              </div>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal direction="up" delay={0.2} className="mt-10 text-center">
          <p className="text-sm text-muted">
            Rankings ilustrativos. A temporada oficial começa no lançamento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
