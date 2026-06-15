"use server";

import { vipFormSchema, type VipFormData } from "@/lib/validations";

export type VipFormResult =
  | { success: true }
  | { success: false; error: string; fieldErrors?: Partial<Record<keyof VipFormData, string>> };

/**
 * Server Action: recebe a inscrição da Lista VIP.
 *
 * Integração futura:
 * 1) Supabase / PostgreSQL
 *    - Criar tabela `vip_signups` com colunas:
 *      id uuid default gen_random_uuid() primary key,
 *      nome text, whatsapp text, email text, tiktok text,
 *      nicho text, created_at timestamptz default now()
 *    - Usar `@supabase/supabase-js` com Service Role Key (somente no servidor)
 *      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
 *      await supabase.from("vip_signups").insert({ ... })
 *
 * 2) Resend
 *    - Enviar e-mail de confirmação para o lead e notificação interna
 *      const resend = new Resend(process.env.RESEND_API_KEY)
 *      await resend.emails.send({
 *        from: "VEXO <vip@vexo.com.br>",
 *        to: data.email,
 *        subject: "Você está na Lista VIP da VEXO 🚀",
 *        html: "...",
 *      })
 */
export async function submitVipForm(
  formData: VipFormData
): Promise<VipFormResult> {
  const parsed = vipFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof VipFormData, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof VipFormData;
      fieldErrors[key] = issue.message;
    }
    return {
      success: false,
      error: "Verifique os campos do formulário.",
      fieldErrors,
    };
  }

  try {
    // TODO: Persistir no Supabase / PostgreSQL
    // const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
    // const { error } = await supabase.from("vip_signups").insert(parsed.data);
    // if (error) throw error;

    // TODO: Disparar e-mail via Resend
    // const resend = new Resend(process.env.RESEND_API_KEY!);
    // await resend.emails.send({ ... });

    // Por enquanto, log estruturado para desenvolvimento
    console.log("[VEXO] Novo lead VIP:", parsed.data);

    return { success: true };
  } catch (err) {
    console.error("[VEXO] Erro ao salvar lead VIP:", err);
    return {
      success: false,
      error: "Não foi possível enviar agora. Tente novamente em instantes.",
    };
  }
}
