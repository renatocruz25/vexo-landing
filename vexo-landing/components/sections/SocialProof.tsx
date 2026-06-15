"use client";

import { Quote } from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "@/components/3d/Reveal";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Bia Tavares",
    role: "Creator Fundadora &middot; Beleza",
    quote:
      "Pela primeira vez consigo provar pra marca o tanto que minha audiência compra. O Creator Score virou meu cartão de visitas.",
  },
  {
    name: "Lucas Mendes",
    role: "Creator Fundador &middot; Tecnologia",
    quote:
      "Saí de indicações no DM para receber propostas direto na plataforma, já com o briefing alinhado com meu nicho.",
  },
  {
    name: "Diego Rocha",
    role: "Creator Fundador &middot; Fitness",
    quote:
      "A gamificação mudou como eu encaro meu trabalho. Cada campanha é uma chance de subir de nível, literalmente.",
  },
];

export function SocialProof() {
  return (
    <section id="social-proof" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Creators fundadores
          </span>
          <h2 className="balance mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Quem está construindo a temporada 01.
          </h2>
          <p className="mt-5 text-lg text-muted">
            Depoimentos ilustrativos dos primeiros creators que estão
            ajudando a moldar a VEXO antes do lançamento.
          </p>
        </Reveal>

        <RevealGroup
          staggerDelay={0.1}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={revealItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex h-full flex-col rounded-2xl border border-border bg-card/40 p-7"
            >
              <Quote className="h-6 w-6 text-primary/60" />
              <p
                className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/90"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
              />
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary/50 to-accent/50" />
                <div>
                  <p className="font-display text-sm font-semibold">
                    {t.name}
                  </p>
                  <p
                    className="text-xs text-muted"
                    dangerouslySetInnerHTML={{ __html: t.role }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
