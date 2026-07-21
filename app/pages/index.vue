<template>
  <div class="card flex flex-col items-center m-4 p-4 gap-4">
    <h1>Nosso Casamento 💍</h1>

    <div v-if="!enviado" class="flex flex-col w-full">
      <h2>Confirme sua presença</h2>

      <label>Seu nome</label>
      <input v-model="form.nome" class="input" placeholder="Nome completo" >

      <label>
        <input v-model="form.vai_comparecer" type="checkbox" >
        Vou comparecer
      </label>

      <label>Quantas pessoas?</label>
      <input v-model.number="form.qtd_pessoas" type="number" min="1" >

      <label>Restrição alimentar (opcional)</label>
      <input v-model="form.restricao_alimentar" >

      <label>Mensagem para os noivos (opcional)</label>
      <textarea v-model="form.mensagem" />

      <button :disabled="enviando || !form.nome" @click="confirmar">
        {{ enviando ? "Enviando..." : "Confirmar presença" }}
      </button>

      <p v-if="erro" style="color: red">{{ erro }}</p>
    </div>

    <div v-else>
      <h2>Obrigado, {{ form.nome }}! 🎉</h2>
      <p>Sua confirmação foi registrada.</p>
    </div>
  </div>
</template>

<script setup>
import { createClient } from "@supabase/supabase-js";
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
