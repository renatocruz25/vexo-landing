import { Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  Plataforma: [
    { label: "Creator Score", href: "#funcionalidades" },
    { label: "Rankings", href: "#funcionalidades" },
    { label: "VEXO Arena", href: "#arena" },
  ],
  Empresas: [
    { label: "Creator Radar", href: "#empresas" },
    { label: "Watchlist", href: "#empresas" },
    { label: "IA de Compatibilidade", href: "#empresas" },
  ],
  VEXO: [
    { label: "Lista VIP", href: "#vip" },
    { label: "Creators fundadores", href: "#social-proof" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <span className="font-display text-lg font-bold text-white">
                  V
                </span>
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                VEXO
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted">
              A plataforma de Creator Commerce que conecta empresas a
              creators que realmente geram vendas.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-white/20 hover:text-foreground"
                  aria-label="Rede social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-sm font-semibold">{title}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} VEXO. Todos os direitos reservados.
          </p>
          <p className="font-mono text-xs text-muted">
            Compita. Venda. Evolua.
          </p>
        </div>
      </div>
    </footer>
  );
}
