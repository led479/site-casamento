<template>
  <div class="flex flex-col items-center gap-4">
    <section class="flex items-center justify-center relative overflow-hidden h-screen w-full">
      <img :src="MainBg" class="absolute h-full w-full object-cover">
      <Logo class="size-80 z-10" />
    </section>

    <section v-if="pessoas.length > 0" class="w-full px-4">
      <div w-full max-w-md>
        <form class="px-4">
          <FieldGroup>
            <FieldSet>
              <FieldLegend variant="label">
                Quem vai no casamento?
              </FieldLegend>
              <FieldDescription>
                Selecione quem vai no casamento.
              </FieldDescription>
              <FieldGroup class="gap-3">
                <Field v-for="pessoa in pessoas" :key="pessoa.nome" orientation="horizontal">
                  <Checkbox :id="`convidado-${pessoa.nome}`" v-model="pessoa.vai" />
                  <FieldLabel :for="`convidado-${pessoa.nome}`" class="font-normal">
                    {{ pessoa.nome }}
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
            <Button type="submit">
              Confirmar
            </Button>
          </FieldGroup>
        </form>
      </div>
    </section>
    <section v-else>
      não há convidados/url bugada
    </section>
  </div>
</template>

<script setup lang="ts">
import Logo from '~/assets/logo.svg'
import MainBg from '~/assets/images/main-bg.png'
import type { PessoaPresenca } from '~/types/convidados'
import Button from '~/components/ui/button/Button.vue'
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '~/components/ui/field'
import { Checkbox } from '~/components/ui/checkbox'

const { $supabase } = useNuxtApp()
const route = useRoute()

const convidado = computed(() => {
  const value = route.query.convidado
  if (Array.isArray(value)) {
    return value[0] ?? ''
  }
  return value ?? ''
})

const grupo = computed(() => buscarGrupo(convidado.value))

if (convidado.value && !grupo.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Convite não encontrado',
  })
}

const pessoas = ref<PessoaPresenca[]>(
  grupo.value?.convidados.map(({ nome }) => ({
    nome,
    vai: true,
  })) ?? [],
)

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

  const { error } = await $supabase.from("rsvp").insert({
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
