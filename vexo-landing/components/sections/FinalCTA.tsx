"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/3d/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { vipFormSchema, nichoOptions, type VipFormData } from "@/lib/validations";
import { submitVipForm } from "@/lib/actions";

export function FinalCTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<VipFormData>({
    resolver: zodResolver(vipFormSchema),
  });

  async function onSubmit(data: VipFormData) {
    setStatus("loading");
    setErrorMessage("");
    const result = await submitVipForm(data);

    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  }

  return (
    <section id="cta-final" className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 bg-radial-glow opacity-40" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-accent-glow opacity-30" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal direction="up" className="text-center">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Lista VIP
          </span>
          <h2 className="balance mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Pronto para fazer parte da próxima geração do Creator Commerce?
          </h2>
          <p className="mt-5 text-lg text-muted">
            Garanta acesso antecipado, benefícios exclusivos de lançamento e
            seu lugar na primeira temporada da VEXO Arena.
          </p>
        </Reveal>

        <div id="vip">
          <Reveal direction="up" delay={0.15} className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-10 glow-primary">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <CheckCircle2 className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">
                    Você está na Lista VIP!
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-muted">
                    Em breve você receberá um e-mail com os próximos passos e
                    novidades exclusivas sobre o lançamento da VEXO.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-6"
                    onClick={() => setStatus("idle")}
                  >
                    Cadastrar outro perfil
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="nome">Nome</Label>
                      <Input
                        id="nome"
                        placeholder="Seu nome completo"
                        error={!!errors.nome}
                        {...register("nome")}
                      />
                      {errors.nome && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.nome.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="whatsapp">WhatsApp</Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        error={!!errors.whatsapp}
                        {...register("whatsapp")}
                      />
                      {errors.whatsapp && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.whatsapp.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="voce@email.com"
                        error={!!errors.email}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="tiktok">TikTok</Label>
                      <Input
                        id="tiktok"
                        placeholder="@seuusuario"
                        error={!!errors.tiktok}
                        {...register("tiktok")}
                      />
                      {errors.tiktok && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.tiktok.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="nicho">Nicho</Label>
                    <Controller
                      name="nicho"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="nicho" error={!!errors.nicho}>
                            <SelectValue placeholder="Selecione seu nicho" />
                          </SelectTrigger>
                          <SelectContent>
                            {nichoOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.nicho && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.nicho.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
                      {errorMessage}
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Entrar para a Lista VIP
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted">
                    Ao se cadastrar, você concorda em receber comunicações da
                    VEXO sobre o lançamento da plataforma.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
