"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingCart, TrendingDown, TrendingUp, X, Check } from "lucide-react";
import { Reveal } from "@/components/3d/Reveal";

const traditional = [
  { icon: Heart, label: "Curtidas e visualizações", value: "Alto volume, sem garantia" },
  { icon: TrendingDown, label: "Conversão real", value: "Difícil de medir" },
  { icon: X, label: "ROI para a empresa", value: "Incerto" },
];

const performance = [
  { icon: ShoppingCart, label: "Vendas geradas", value: "Métrica principal" },
  { icon: TrendingUp, label: "Creator Score", value: "Transparente e rankeado" },
  { icon: Check, label: "ROI para a empresa", value: "Mensurável em tempo real" },
];

export function Problem() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            O problema
          </span>
          <h2 className="balance mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Curtidas <span className="text-muted">≠</span> Vendas.
            <br />
            Seguidores <span className="text-muted">≠</span> Resultado.
          </h2>
          <p className="mt-5 text-lg text-muted">
            O mercado de influência cresceu, mas a confiança das empresas
            caiu. A VEXO nasceu para resolver essa desconexão com dados, não
            com promessas.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-6 lg:grid-cols-2 lg:gap-0">
          {/* VS divider */}
          <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background font-display text-sm font-bold text-muted shadow-[0_0_40px_-5px_rgba(37,99,235,0.4)]">
              VS
            </div>
          </div>

          {/* Traditional influencer */}
          <Reveal direction="left">
            <div className="relative h-full rounded-2xl border border-border bg-card/40 p-8 lg:rounded-r-none lg:border-r-0">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-muted">
                  Influenciador tradicional
                </h3>
                <span className="font-mono text-xs text-muted">A</span>
              </div>
              <div className="space-y-4">
                {traditional.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-xl border border-border bg-background/40 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                        <item.icon className="h-4 w-4 text-muted" />
                      </div>
                      <span className="text-sm font-medium text-muted">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-sm font-mono text-muted/70">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Performance creator */}
          <Reveal direction="right">
            <div className="relative h-full rounded-2xl border border-accent/30 bg-card/60 p-8 glow-accent lg:rounded-l-none">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold">
                  Creator de performance
                </h3>
                <span className="font-mono text-xs text-accent">VEXO</span>
              </div>
              <div className="space-y-4">
                {performance.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between rounded-xl border border-accent/20 bg-accent/[0.04] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                        <item.icon className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-sm font-mono text-accent">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
