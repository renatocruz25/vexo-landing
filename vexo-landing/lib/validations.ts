import { z } from "zod";

export const vipFormSchema = z.object({
  nome: z
    .string()
    .min(2, "Informe seu nome completo")
    .max(80, "Nome muito longo"),
  whatsapp: z
    .string()
    .min(10, "Informe um WhatsApp válido com DDD")
    .max(20, "Número inválido")
    .regex(/^[\d\s()+-]+$/, "Use apenas números, espaços e símbolos válidos"),
  email: z.string().email("Informe um e-mail válido"),
  tiktok: z
    .string()
    .min(2, "Informe seu @ do TikTok")
    .max(40, "Usuário muito longo"),
  nicho: z.enum(
    [
      "beleza",
      "moda",
      "fitness",
      "tecnologia",
      "casa",
      "alimentacao",
      "viagem",
      "financas",
      "outro",
    ],
    {
      errorMap: () => ({ message: "Selecione um nicho" }),
    }
  ),
});

export type VipFormData = z.infer<typeof vipFormSchema>;

export const nichoOptions: { value: VipFormData["nicho"]; label: string }[] = [
  { value: "beleza", label: "Beleza & Skincare" },
  { value: "moda", label: "Moda & Lifestyle" },
  { value: "fitness", label: "Fitness & Performance" },
  { value: "tecnologia", label: "Tecnologia & Gadgets" },
  { value: "casa", label: "Casa & Decoração" },
  { value: "alimentacao", label: "Alimentação & Receitas" },
  { value: "viagem", label: "Viagem & Turismo" },
  { value: "financas", label: "Finanças & Investimentos" },
  { value: "outro", label: "Outro" },
];
