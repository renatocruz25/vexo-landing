import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vexo.com.br"),
  title: {
    default: "VEXO | Performance vale mais que seguidores",
    template: "%s | VEXO",
  },
  description:
    "VEXO é a plataforma de Creator Commerce que conecta empresas a creators que realmente geram vendas. Rankings, Creator Score, IA de recomendação e marketplace de performance.",
  keywords: [
    "creator commerce",
    "creator score",
    "marketplace de creators",
    "influenciadores que vendem",
    "ranking de creators",
    "VEXO",
  ],
  authors: [{ name: "VEXO" }],
  openGraph: {
    title: "VEXO | Performance vale mais que seguidores",
    description:
      "A primeira plataforma que transforma creators em campeões de vendas. Compita. Venda. Evolua.",
    url: "https://vexo.com.br",
    siteName: "VEXO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VEXO | Performance vale mais que seguidores",
    description:
      "A primeira plataforma que transforma creators em campeões de vendas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className="font-body antialiased bg-background text-foreground overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
