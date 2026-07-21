<template>
  <div class="flex flex-col items-center gap-4">
    <section class="flex items-center justify-center relative overflow-hidden h-80 w-full">
      <img :src="MainBg" class="absolute h-full w-full object-cover" >
      <Logo class="size-80 z-10" />
    </section>
    <h1>Nosso Casamento 💍</h1>

    <div v-if="!enviado" class="px-4 w-full">
      <Card  class="flex flex-col w-full gap-4 px-4">
        <h2>Confirme sua presença</h2>
  
        <Label>Seu nome</Label>
        <Input v-model="form.nome" class="input" placeholder="Nome completo" />
  
        <Label>
          <Checkbox v-model="form.vai_comparecer" type="checkbox" />
          Vou comparecer
        </Label>
  
        <Label>Quantas pessoas?</Label>
        <Input v-model.number="form.qtd_pessoas" type="number" min="1" />
  
        <Label>Restrição alimentar (opcional)</Label>
        <Input v-model="form.restricao_alimentar" />
  
        <Label>Mensagem para os noivos (opcional)</Label>
        <Textarea v-model="form.mensagem" />
  
        <Button :disabled="enviando || !form.nome" @click="confirmar">
          {{ enviando ? "Enviando..." : "Confirmar presença" }}
        </Button>
  
        <p v-if="erro" style="color: red">{{ erro }}</p>
      </Card>
    </div>

    <div v-else>
      <h2>Obrigado, {{ form.nome }}! 🎉</h2>
      <p>Sua confirmação foi registrada.</p>
    </div>
  </div>
</template>

<script setup>
import { createClient } from "@supabase/supabase-js";
import Logo from '~/assets/logo.svg'
import MainBg from '~/assets/images/main-bg.png'

const config = useRuntimeConfig();
const supabase = createClient(
  config.public.supabaseUrl,
  config.public.supabasePublishableKey,
);
const form = reactive({
  nome: "",
  vai_comparecer: true,
  qtd_pessoas: 1,
  restricao_alimentar: "",
  mensagem: "",
});

const enviado = ref(false);
const erro = ref("");
const enviando = ref(false);

async function confirmar() {
  enviando.value = true;
  erro.value = "";

  const { error } = await supabase.from("rsvp").insert({
    nome: form.nome,
    vai_comparecer: form.vai_comparecer,
    qtd_pessoas: form.qtd_pessoas,
    restricao_alimentar: form.restricao_alimentar,
    mensagem: form.mensagem,
  });

  enviando.value = false;

  if (error) {
    erro.value = "Ops, algo deu errado. Tente novamente.";
    return;
  }
  enviado.value = true;
}
</script>
