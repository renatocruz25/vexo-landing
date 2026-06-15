"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Plataforma", href: "#funcionalidades" },
  { label: "VEXO Arena", href: "#arena" },
  { label: "Para Empresas", href: "#empresas" },
  { label: "Creators", href: "#social-proof" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_-2px_rgba(37,99,235,0.6)]">
            <span className="font-display text-lg font-bold text-white">V</span>
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            VEXO
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm" asChild>
            <a href="#cta-final">Sou Empresa</a>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <a href="#vip">Lista VIP</a>
          </Button>
        </div>

        <MobileMenu />
      </nav>
    </motion.header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/60"
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 right-0 top-full border-b border-border bg-background/95 px-6 py-6 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              <Button variant="outline" asChild>
                <a href="#cta-final" onClick={() => setOpen(false)}>
                  Sou Empresa
                </a>
              </Button>
              <Button variant="primary" asChild>
                <a href="#vip" onClick={() => setOpen(false)}>
                  Entrar na Lista VIP
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
